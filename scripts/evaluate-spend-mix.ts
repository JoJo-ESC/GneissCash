#!/usr/bin/env tsx
import fs from 'node:fs'
import path from 'node:path'
import Papa from 'papaparse'

import { classifyTransaction } from '@/lib/analytics/spendMix'
import type { SpendMixTransaction } from '@/lib/analytics/spendMix'
import type { SpendClassification } from '@/types/analytics'

type AllowedClass = Extract<SpendClassification, 'essential' | 'flex'>

type RawRow = Record<string, unknown>

interface CliOptions {
  file?: string
  errorsOutput?: string
  delimiter?: string
}

interface EvaluationRow extends RawRow {
  expected_class?: string
}

interface ConfusionMatrix {
  essential: Record<AllowedClass, number>
  flex: Record<AllowedClass, number>
}

const ALLOWED_CLASSES: AllowedClass[] = ['essential', 'flex']

function usage(): string {
  return `Usage: npx tsx scripts/evaluate-spend-mix.ts --file <labeled-transactions.csv> [--errors <output.csv>]

Options:
  --file       Path to labeled CSV with an expected_class column (required)
  --errors     Optional path to write misclassified rows as CSV (default: reports/spend-mix-mismatches.csv)
  --delimiter  Optional custom delimiter if your CSV is not comma-separated (default: ,)
`
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {}

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--file') {
      options.file = argv[i + 1]
      i += 1
    } else if (arg === '--errors') {
      options.errorsOutput = argv[i + 1]
      i += 1
    } else if (arg === '--delimiter') {
      options.delimiter = argv[i + 1]
      i += 1
    } else if (arg === '--help' || arg === '-h') {
      console.log(usage())
      process.exit(0)
    }
  }

  return options
}

function pickField(row: RawRow, keys: string[]): string | number | null | undefined {
  for (const key of keys) {
    if (key in row && row[key] !== undefined && row[key] !== null && row[key] !== '') {
      return row[key] as string | number
    }
  }
  return undefined
}

function parseAmount(value: string | number | null | undefined): number | null {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null
  }

  if (typeof value !== 'string') {
    return null
  }

  let cleaned = value.trim()
  if (!cleaned) {
    return null
  }

  let multiplier = 1
  const hasParens = cleaned.startsWith('(') && cleaned.endsWith(')')
  if (hasParens) {
    multiplier = -1
    cleaned = cleaned.slice(1, -1)
  }

  cleaned = cleaned.replace(/[$,]/g, '')

  const parsed = Number(cleaned)
  if (Number.isNaN(parsed)) {
    return null
  }

  return parsed * multiplier
}

function normalizeString(value: string | number | null | undefined): string | null {
  if (typeof value === 'string') {
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
  }
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value.toString()
  }
  return null
}

function normalizeClass(value: string | null | undefined): AllowedClass | null {
  if (!value) {
    return null
  }
  const normalized = value.trim().toLowerCase()
  if (ALLOWED_CLASSES.includes(normalized as AllowedClass)) {
    return normalized as AllowedClass
  }
  return null
}

function parseCsv(filePath: string, delimiter?: string): EvaluationRow[] {
  const absolutePath = path.resolve(process.cwd(), filePath)
  const content = fs.readFileSync(absolutePath, 'utf8')

  const result = Papa.parse<EvaluationRow>(content, {
    header: true,
    skipEmptyLines: 'greedy',
    delimiter,
    transformHeader: (header) => header.trim(),
  })

  if (result.errors.length > 0) {
    const formatted = result.errors.map((error) => `${error.message} (row: ${error.row})`).join('\n')
    throw new Error(`Failed to parse CSV:\n${formatted}`)
  }

  return result.data
}

function buildTransaction(row: RawRow, amount: number): SpendMixTransaction {
  const category = normalizeString(
    pickField(row, ['category', 'Category', 'plaid_category', 'Plaid Category'])
  )
  const merchantName = normalizeString(
    pickField(row, ['merchant_name', 'merchant', 'Merchant Name', 'Merchant', 'description', 'Description'])
  )
  const name = normalizeString(pickField(row, ['name', 'Name', 'transaction_name', 'Transaction Name', 'memo', 'Memo']))
  const date = normalizeString(pickField(row, ['date', 'Date', 'posted_at', 'Posted At'])) || new Date().toISOString()

  return {
    amount,
    category,
    merchant_name: merchantName,
    name,
    date,
  }
}

function evaluate(rows: EvaluationRow[]) {
  let totalEvaluated = 0
  let skippedMissingClass = 0
  let skippedInvalidAmount = 0

  const confusion: ConfusionMatrix = {
    essential: { essential: 0, flex: 0 },
    flex: { essential: 0, flex: 0 },
  }

  const mismatches: (RawRow & { predicted_class: AllowedClass; expected_class: AllowedClass })[] = []

  rows.forEach((row) => {
    const expected = normalizeClass(row.expected_class)
    if (!expected) {
      skippedMissingClass += 1
      return
    }

    const amountValue = pickField(row, ['amount', 'Amount', 'transaction_amount', 'Transaction Amount', 'net_amount', 'Net Amount'])
    const amount = parseAmount(amountValue)
    if (amount === null) {
      skippedInvalidAmount += 1
      return
    }

    totalEvaluated += 1

    const transaction = buildTransaction(row, amount)
    const predicted = classifyTransaction(transaction)

    if (!ALLOWED_CLASSES.includes(predicted as AllowedClass)) {
      throw new Error(`Classifier returned unsupported class "${predicted}"`)
    }

    const predictedClass = predicted as AllowedClass
    confusion[expected][predictedClass] += 1

    if (predictedClass !== expected) {
      mismatches.push({
        ...row,
        predicted_class: predictedClass,
        expected_class: expected,
      })
    }
  })

  const tpEssential = confusion.essential.essential
  const fpEssential = confusion.flex.essential
  const fnEssential = confusion.essential.flex

  const tpFlex = confusion.flex.flex
  const fpFlex = confusion.essential.flex
  const fnFlex = confusion.flex.essential

  const accuracy = totalEvaluated > 0 ? (tpEssential + tpFlex) / totalEvaluated : 0
  const precisionEssential = tpEssential + fpEssential > 0 ? tpEssential / (tpEssential + fpEssential) : 0
  const recallEssential = tpEssential + fnEssential > 0 ? tpEssential / (tpEssential + fnEssential) : 0
  const precisionFlex = tpFlex + fpFlex > 0 ? tpFlex / (tpFlex + fpFlex) : 0
  const recallFlex = tpFlex + fnFlex > 0 ? tpFlex / (tpFlex + fnFlex) : 0

  return {
    totalEvaluated,
    skippedMissingClass,
    skippedInvalidAmount,
    confusion,
    mismatches,
    metrics: {
      accuracy,
      precisionEssential,
      recallEssential,
      precisionFlex,
      recallFlex,
    },
  }
}

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`
}

function writeMismatches(mismatches: RawRow[], outputPath: string) {
  if (mismatches.length === 0) {
    return
  }

  const absolute = path.resolve(process.cwd(), outputPath)
  fs.mkdirSync(path.dirname(absolute), { recursive: true })

  const csv = Papa.unparse(mismatches)
  fs.writeFileSync(absolute, csv, 'utf8')
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  if (!args.file) {
    console.error('Error: --file is required')
    console.error(usage())
    process.exit(1)
  }

  const delim = args.delimiter
  const labeledRows = parseCsv(args.file, delim)
  const results = evaluate(labeledRows)

  console.log('--- Spend Mix Classifier Accuracy ---')
  console.log(`Evaluated: ${results.totalEvaluated}`)
  console.log(`Skipped (missing expected_class): ${results.skippedMissingClass}`)
  console.log(`Skipped (invalid amount): ${results.skippedInvalidAmount}`)
  console.log('')
  console.log('Confusion Matrix (actual -> predicted)')
  console.log(`  essential -> essential: ${results.confusion.essential.essential}`)
  console.log(`  essential -> flex:      ${results.confusion.essential.flex}`)
  console.log(`  flex -> essential:      ${results.confusion.flex.essential}`)
  console.log(`  flex -> flex:           ${results.confusion.flex.flex}`)
  console.log('')
  console.log('Metrics')
  console.log(`  Accuracy:              ${formatPercent(results.metrics.accuracy)}`)
  console.log(`  Precision (essential): ${formatPercent(results.metrics.precisionEssential)}`)
  console.log(`  Recall (essential):    ${formatPercent(results.metrics.recallEssential)}`)
  console.log(`  Precision (flex):      ${formatPercent(results.metrics.precisionFlex)}`)
  console.log(`  Recall (flex):         ${formatPercent(results.metrics.recallFlex)}`)

  if (results.mismatches.length > 0) {
    const outputPath = args.errorsOutput ?? 'reports/spend-mix-mismatches.csv'
    writeMismatches(results.mismatches, outputPath)
    console.log('')
    console.log(`Misclassifications written to ${outputPath}`)
    console.log(`Total mismatches: ${results.mismatches.length}`)
  } else {
    console.log('')
    console.log('No misclassifications detected in the provided dataset. 🎉')
  }
}

main().catch((error) => {
  console.error('Failed to evaluate spend mix classifier:')
  console.error(error)
  process.exit(1)
})
