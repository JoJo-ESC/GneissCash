import { ParsedTransaction, ParseResult } from './types'

// Dynamic import to avoid issues with Next.js bundling
async function getPdfParse() {
  const pdfParse = await import('pdf-parse')
  return pdfParse.default
}

/**
 * Parse a Chime bank statement PDF
 * Extracts transactions from the structured table format
 */
export async function parseChimePDF(pdfBuffer: Buffer): Promise<ParseResult> {
  const errors: string[] = []
  const transactions: ParsedTransaction[] = []

  try {
    const pdfParse = await getPdfParse()
    const data = await pdfParse(pdfBuffer)
    const text = data.text

    // Split into lines and clean up
    const lines = text
      .split('\n')
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0)

    // Find transaction lines - they start with a date pattern M/DD/YYYY or MM/DD/YYYY
    const datePattern = /^(\d{1,2}\/\d{1,2}\/\d{4})/

    let i = 0
    while (i < lines.length) {
      const line = lines[i]
      const dateMatch = line.match(datePattern)

      if (dateMatch) {
        // This line starts a transaction
        const dateStr = dateMatch[1]
        const date = parseUSDate(dateStr)

        if (!date) {
          errors.push(`Invalid date: ${dateStr}`)
          i++
          continue
        }

        // Skip summary lines (Beginning balance, Ending balance, etc.)
        const skipPatterns = [
          /beginning balance/i,
          /ending balance/i,
          /deposits/i,
          /withdrawals/i,
          /adjustments/i,
          /transfers/i,
          /fees/i,
          /spotme/i,
          /summary/i,
          /page \d/i,
        ]

        if (skipPatterns.some((pattern) => line.match(pattern))) {
          i++
          continue
        }

        // Get merchant name - it's after the date on the same line
        const merchantName = line.replace(datePattern, '').trim()

        // Look for amount pattern in this line or following lines
        let amount: number | null = null

        // Scan current and next few lines for amount
        const amountPattern = /-?\$[\d,]+\.?\d*/g
        for (let j = 0; j < 4 && i + j < lines.length; j++) {
          const searchLine = lines[i + j]
          const amounts = searchLine.match(amountPattern)

          if (amounts && amounts.length > 0) {
            // Take the first amount found (usually the transaction amount)
            amount = parseChimeAmount(amounts[0])
            break
          }
        }

        // Skip if no amount found (probably a header line)
        if (amount === null) {
          i++
          continue
        }

        // Clean up merchant name
        const cleanedMerchant = cleanMerchantName(merchantName)

        if (cleanedMerchant && amount !== 0) {
          transactions.push({
            date,
            name: merchantName || cleanedMerchant,
            merchant_name: cleanedMerchant,
            amount,
            category: null, // Chime doesn't provide categories
          })
        }
      }

      i++
    }
  } catch (err) {
    errors.push(`Failed to parse PDF: ${err instanceof Error ? err.message : 'Unknown error'}`)
  }

  // Remove duplicates (PDF parsing can sometimes double-count)
  const unique = deduplicateTransactions(transactions)

  return { transactions: unique, errors }
}

/**
 * Generic PDF parser - attempts to extract transactions from any bank statement
 */
export async function parsePDF(pdfBuffer: Buffer): Promise<ParseResult> {
  // For now, default to Chime parser
  // Can add format detection later based on content
  return parseChimePDF(pdfBuffer)
}

// Helper: Parse US date format (M/DD/YYYY or MM/DD/YYYY) to ISO (YYYY-MM-DD)
function parseUSDate(dateStr: string): string | null {
  const match = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (!match) return null

  const [, month, day, year] = match
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

// Helper: Parse Chime amount format (-$XX.XX or $XX.XX)
function parseChimeAmount(amountStr: string): number {
  const cleaned = amountStr.replace(/[$,]/g, '')
  return parseFloat(cleaned)
}

// Helper: Clean merchant name
function cleanMerchantName(name: string): string {
  // Remove common suffixes and clean up
  let cleaned = name
    .replace(/\s*(NYUS|CAUS|TXUS|FLUS|ILUS|\d{3}-\d{3}-\d{4}|WWW\.\S+)\s*/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  // Capitalize first letter of each word
  cleaned = cleaned
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return cleaned
}

// Helper: Remove duplicate transactions
function deduplicateTransactions(transactions: ParsedTransaction[]): ParsedTransaction[] {
  const seen = new Set<string>()
  return transactions.filter((t) => {
    const key = `${t.date}-${t.amount}-${t.merchant_name}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
