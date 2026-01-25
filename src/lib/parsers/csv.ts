import Papa from 'papaparse'
import { ParsedTransaction, ParseResult } from './types'

interface DiscoverRow {
  'Trans. Date': string
  'Post Date': string
  Description: string
  Amount: string
  Category: string
}

// Generic CSV row for other formats
interface GenericRow {
  [key: string]: string
}

/**
 * Parse a Discover credit card CSV export
 * Format: Trans. Date, Post Date, Description, Amount, Category
 * Amounts: positive = purchase, negative = payment/credit
 */
export function parseDiscoverCSV(csvContent: string): ParseResult {
  const errors: string[] = []
  const transactions: ParsedTransaction[] = []

  const result = Papa.parse<DiscoverRow>(csvContent, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim(),
  })

  if (result.errors.length > 0) {
    result.errors.forEach((err) => {
      errors.push(`Row ${err.row}: ${err.message}`)
    })
  }

  for (const row of result.data) {
    try {
      const dateStr = row['Trans. Date']
      if (!dateStr) continue

      // Parse MM/DD/YYYY to YYYY-MM-DD
      const date = parseUSDate(dateStr)
      if (!date) {
        errors.push(`Invalid date: ${dateStr}`)
        continue
      }

      // Discover: positive = expense, negative = payment/credit
      // We want: negative = expense, positive = income
      const rawAmount = parseFloat(row.Amount)
      if (isNaN(rawAmount)) {
        errors.push(`Invalid amount: ${row.Amount}`)
        continue
      }
      const amount = -rawAmount // Flip sign for our convention

      const description = row.Description?.trim() || 'Unknown'
      const merchantName = extractMerchantName(description)

      transactions.push({
        date,
        name: description,
        merchant_name: merchantName,
        amount,
        category: row.Category?.trim() || null,
      })
    } catch (err) {
      errors.push(`Failed to parse row: ${JSON.stringify(row)}`)
    }
  }

  return { transactions, errors }
}

/**
 * Parse a generic bank CSV (attempts to auto-detect columns)
 * Looks for common column names: Date, Description, Amount, Debit, Credit
 */
export function parseGenericCSV(csvContent: string): ParseResult {
  const errors: string[] = []
  const transactions: ParsedTransaction[] = []

  const result = Papa.parse<GenericRow>(csvContent, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim().toLowerCase(),
  })

  if (result.errors.length > 0) {
    result.errors.forEach((err) => {
      errors.push(`Row ${err.row}: ${err.message}`)
    })
  }

  // Detect column mappings
  const headers = Object.keys(result.data[0] || {})
  const dateCol = headers.find((h) =>
    ['date', 'trans. date', 'transaction date', 'trans date', 'posted date'].includes(h)
  )
  const descCol = headers.find((h) =>
    ['description', 'merchant', 'name', 'memo', 'payee'].includes(h)
  )
  const amountCol = headers.find((h) => ['amount', 'transaction amount'].includes(h))
  const debitCol = headers.find((h) => ['debit', 'withdrawal', 'withdrawals'].includes(h))
  const creditCol = headers.find((h) => ['credit', 'deposit', 'deposits'].includes(h))
  const categoryCol = headers.find((h) => ['category', 'type'].includes(h))

  if (!dateCol) {
    errors.push('Could not find date column')
    return { transactions, errors }
  }
  if (!descCol) {
    errors.push('Could not find description column')
    return { transactions, errors }
  }
  if (!amountCol && !debitCol && !creditCol) {
    errors.push('Could not find amount column')
    return { transactions, errors }
  }

  for (const row of result.data) {
    try {
      const dateStr = row[dateCol]
      if (!dateStr) continue

      const date = parseUSDate(dateStr)
      if (!date) {
        errors.push(`Invalid date: ${dateStr}`)
        continue
      }

      let amount: number
      if (amountCol && row[amountCol]) {
        amount = parseAmount(row[amountCol])
      } else {
        // Handle separate debit/credit columns
        const debit = debitCol ? parseAmount(row[debitCol] || '0') : 0
        const credit = creditCol ? parseAmount(row[creditCol] || '0') : 0
        amount = credit - debit // credits positive, debits negative
      }

      if (isNaN(amount)) {
        errors.push(`Invalid amount in row`)
        continue
      }

      const description = row[descCol]?.trim() || 'Unknown'
      const merchantName = extractMerchantName(description)

      transactions.push({
        date,
        name: description,
        merchant_name: merchantName,
        amount,
        category: categoryCol ? row[categoryCol]?.trim() || null : null,
      })
    } catch (err) {
      errors.push(`Failed to parse row: ${JSON.stringify(row)}`)
    }
  }

  return { transactions, errors }
}

/**
 * Auto-detect CSV format and parse accordingly
 */
export function parseCSV(csvContent: string): ParseResult {
  // Check first line for format detection
  const firstLine = csvContent.split('\n')[0]?.toLowerCase() || ''

  if (firstLine.includes('trans. date') && firstLine.includes('post date')) {
    return parseDiscoverCSV(csvContent)
  }

  return parseGenericCSV(csvContent)
}

// Helper: Parse US date format (MM/DD/YYYY) to ISO (YYYY-MM-DD)
function parseUSDate(dateStr: string): string | null {
  const cleaned = dateStr.trim()

  // Try MM/DD/YYYY
  const usMatch = cleaned.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (usMatch) {
    const [, month, day, year] = usMatch
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

  // Try YYYY-MM-DD (already ISO)
  const isoMatch = cleaned.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (isoMatch) {
    return cleaned
  }

  return null
}

// Helper: Parse amount string to number (handles $, commas, parentheses for negatives)
function parseAmount(amountStr: string): number {
  let cleaned = amountStr.trim()

  // Handle parentheses as negative: (100.00) -> -100.00
  const isNegative = cleaned.startsWith('(') && cleaned.endsWith(')')
  if (isNegative) {
    cleaned = cleaned.slice(1, -1)
  }

  // Remove $ and commas
  cleaned = cleaned.replace(/[$,]/g, '')

  let amount = parseFloat(cleaned)
  if (isNegative) {
    amount = -Math.abs(amount)
  }

  return amount
}

// Helper: Extract merchant name from description
function extractMerchantName(description: string): string {
  // Take first part before common separators
  const parts = description.split(/\s{2,}|#|\*|APPLE PAY ENDING/i)
  return parts[0]?.trim() || description
}
