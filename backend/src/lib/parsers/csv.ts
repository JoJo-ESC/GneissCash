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

      const csvCategory = row.Category?.trim()
      transactions.push({
        date,
        name: description,
        merchant_name: merchantName,
        amount,
        category: csvCategory || categorizeByMerchant(merchantName, amount),
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

      const csvCategory = categoryCol ? row[categoryCol]?.trim() : null
      transactions.push({
        date,
        name: description,
        merchant_name: merchantName,
        amount,
        category: csvCategory || categorizeByMerchant(merchantName, amount),
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

// Auto-categorize based on merchant name
function categorizeByMerchant(merchantName: string, amount: number): string {
  const name = merchantName.toLowerCase()

  // Income detection (positive amounts or specific keywords)
  if (amount > 0) {
    if (name.includes('payroll') || name.includes('direct dep') || name.includes('salary') ||
        name.includes('employer') || name.includes('wage')) {
      return 'Income'
    }
    if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') ||
        name.includes('cash app') || name.includes('paypal')) {
      return 'Transfer'
    }
    return 'Income'
  }

  // Food & Drink
  if (name.includes('mcdonald') || name.includes('burger') || name.includes('wendy') ||
      name.includes('taco bell') || name.includes('chipotle') || name.includes('subway') ||
      name.includes('starbucks') || name.includes('dunkin') || name.includes('coffee') ||
      name.includes('pizza') || name.includes('domino') || name.includes('papa john') ||
      name.includes('grubhub') || name.includes('doordash') || name.includes('uber eat') ||
      name.includes('postmates') || name.includes('restaurant') || name.includes('cafe') ||
      name.includes('diner') || name.includes('grill') || name.includes('kitchen') ||
      name.includes('bakery') || name.includes('chick-fil') || name.includes('popeye') ||
      name.includes('kfc') || name.includes('arby') || name.includes('sonic') ||
      name.includes('panera') || name.includes('noodle') || name.includes('sushi') ||
      name.includes('panda express') || name.includes('five guys') || name.includes('in-n-out') ||
      name.includes('whataburger') || name.includes('jack in the box') || name.includes('del taco') ||
      name.includes('wingstop') || name.includes('buffalo wild') || name.includes('ihop') ||
      name.includes('denny') || name.includes('waffle') || name.includes('cracker barrel') ||
      name.includes('applebee') || name.includes('chili') || name.includes('olive garden') ||
      name.includes('red lobster') || name.includes('outback') || name.includes('texas roadhouse') ||
      name.includes('longhorn') || name.includes('cheesecake factory') || name.includes('pf chang')) {
    return 'Food & Drink'
  }

  // Groceries (part of Food & Drink)
  if (name.includes('walmart') || name.includes('target') || name.includes('kroger') ||
      name.includes('safeway') || name.includes('publix') || name.includes('whole foods') ||
      name.includes('trader joe') || name.includes('aldi') || name.includes('costco') ||
      name.includes('sam\'s club') || name.includes('grocery') || name.includes('market') ||
      name.includes('food lion') || name.includes('giant') || name.includes('wegmans') ||
      name.includes('heb') || name.includes('meijer') || name.includes('sprouts') ||
      name.includes('fresh') || name.includes('albertson') || name.includes('vons') ||
      name.includes('ralph') || name.includes('food')) {
    return 'Food & Drink'
  }

  // Shopping
  if (name.includes('amazon') || name.includes('ebay') || name.includes('etsy') ||
      name.includes('best buy') || name.includes('apple store') || name.includes('microsoft') ||
      name.includes('nike') || name.includes('adidas') || name.includes('foot locker') ||
      name.includes('nordstrom') || name.includes('macy') || name.includes('jcpenney') ||
      name.includes('kohl') || name.includes('ross') || name.includes('tj maxx') ||
      name.includes('marshalls') || name.includes('burlington') || name.includes('old navy') ||
      name.includes('gap') || name.includes('h&m') || name.includes('zara') ||
      name.includes('forever 21') || name.includes('urban outfitters') || name.includes('home depot') ||
      name.includes('lowe') || name.includes('ikea') || name.includes('bed bath') ||
      name.includes('pottery barn') || name.includes('williams sonoma') || name.includes('crate') ||
      name.includes('dollar') || name.includes('five below') || name.includes('big lots') ||
      name.includes('walgreens') || name.includes('cvs') || name.includes('rite aid') ||
      name.includes('ulta') || name.includes('sephora') || name.includes('bath & body') ||
      name.includes('victoria') || name.includes('shop') || name.includes('store') ||
      name.includes('mall') || name.includes('outlet')) {
    return 'Shopping'
  }

  // Transportation
  if (name.includes('uber') || name.includes('lyft') || name.includes('taxi') ||
      name.includes('gas') || name.includes('shell') || name.includes('exxon') ||
      name.includes('chevron') || name.includes('bp') || name.includes('mobil') ||
      name.includes('sunoco') || name.includes('speedway') || name.includes('wawa') ||
      name.includes('sheetz') || name.includes('quiktrip') || name.includes('racetrac') ||
      name.includes('circle k') || name.includes('7-eleven') || name.includes('fuel') ||
      name.includes('petro') || name.includes('parking') || name.includes('toll') ||
      name.includes('metro') || name.includes('transit') || name.includes('bus') ||
      name.includes('train') || name.includes('amtrak') || name.includes('greyhound') ||
      name.includes('autozone') || name.includes('advance auto') || name.includes('o\'reilly') ||
      name.includes('jiffy lube') || name.includes('valvoline') || name.includes('car wash') ||
      name.includes('tire') || name.includes('mechanic') || name.includes('auto')) {
    return 'Transportation'
  }

  // Entertainment
  if (name.includes('netflix') || name.includes('hulu') || name.includes('disney') ||
      name.includes('hbo') || name.includes('spotify') || name.includes('apple music') ||
      name.includes('youtube') || name.includes('amazon prime') || name.includes('paramount') ||
      name.includes('peacock') || name.includes('amc') || name.includes('regal') ||
      name.includes('cinema') || name.includes('movie') || name.includes('theater') ||
      name.includes('concert') || name.includes('ticketmaster') || name.includes('stubhub') ||
      name.includes('live nation') || name.includes('playstation') || name.includes('xbox') ||
      name.includes('nintendo') || name.includes('steam') || name.includes('game') ||
      name.includes('twitch') || name.includes('arcade') || name.includes('bowling') ||
      name.includes('golf') || name.includes('gym') || name.includes('fitness') ||
      name.includes('planet fitness') || name.includes('24 hour') || name.includes('anytime') ||
      name.includes('equinox') || name.includes('orangetheory') || name.includes('crossfit') ||
      name.includes('yoga') || name.includes('spa') || name.includes('massage') ||
      name.includes('salon') || name.includes('barber') || name.includes('nail')) {
    return 'Entertainment'
  }

  // Bills & Utilities
  if (name.includes('electric') || name.includes('power') || name.includes('energy') ||
      name.includes('water') || name.includes('sewer') || name.includes('gas bill') ||
      name.includes('utility') || name.includes('internet') || name.includes('comcast') ||
      name.includes('xfinity') || name.includes('spectrum') || name.includes('at&t') ||
      name.includes('verizon') || name.includes('t-mobile') || name.includes('sprint') ||
      name.includes('phone') || name.includes('wireless') || name.includes('mobile') ||
      name.includes('cable') || name.includes('directv') || name.includes('dish') ||
      name.includes('insurance') || name.includes('geico') || name.includes('progressive') ||
      name.includes('state farm') || name.includes('allstate') || name.includes('liberty mutual') ||
      name.includes('rent') || name.includes('lease') || name.includes('mortgage') ||
      name.includes('hoa') || name.includes('property') || name.includes('apartment') ||
      name.includes('landlord')) {
    return 'Bills & Utilities'
  }

  // Health
  if (name.includes('pharmacy') || name.includes('drug') || name.includes('rx') ||
      name.includes('medical') || name.includes('doctor') || name.includes('hospital') ||
      name.includes('clinic') || name.includes('urgent care') || name.includes('dental') ||
      name.includes('dentist') || name.includes('orthodont') || name.includes('vision') ||
      name.includes('optom') || name.includes('eye') || name.includes('glasses') ||
      name.includes('contacts') || name.includes('therapy') || name.includes('counseling') ||
      name.includes('mental health') || name.includes('lab') || name.includes('diagnostic') ||
      name.includes('imaging') || name.includes('xray') || name.includes('mri')) {
    return 'Health'
  }

  // Travel
  if (name.includes('airline') || name.includes('delta') || name.includes('united') ||
      name.includes('american air') || name.includes('southwest') || name.includes('jetblue') ||
      name.includes('frontier') || name.includes('spirit') || name.includes('alaska air') ||
      name.includes('flight') || name.includes('airport') || name.includes('tsa') ||
      name.includes('hotel') || name.includes('marriott') || name.includes('hilton') ||
      name.includes('hyatt') || name.includes('ihg') || name.includes('wyndham') ||
      name.includes('best western') || name.includes('motel') || name.includes('airbnb') ||
      name.includes('vrbo') || name.includes('booking.com') || name.includes('expedia') ||
      name.includes('kayak') || name.includes('priceline') || name.includes('tripadvisor') ||
      name.includes('hertz') || name.includes('enterprise') || name.includes('avis') ||
      name.includes('budget') || name.includes('national car') || name.includes('rental car') ||
      name.includes('cruise') || name.includes('carnival') || name.includes('royal caribbean')) {
    return 'Travel'
  }

  // Transfer
  if (name.includes('transfer') || name.includes('zelle') || name.includes('venmo') ||
      name.includes('cash app') || name.includes('paypal') || name.includes('wire') ||
      name.includes('ach') || name.includes('withdrawal') || name.includes('atm')) {
    return 'Transfer'
  }

  // Default to Other
  return 'Other'
}
