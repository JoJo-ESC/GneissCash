// Shared types for parsers

export interface ParsedTransaction {
  date: string // ISO format YYYY-MM-DD
  name: string
  merchant_name: string | null
  amount: number // negative for expenses, positive for income
  category: string | null
}

export interface ParseResult {
  transactions: ParsedTransaction[]
  errors: string[]
}
