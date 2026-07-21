export interface ParsedTransaction {
  date: string
  name: string
  merchant_name: string | null
  amount: number
  category: string | null
}

export interface ParseResult {
  transactions: ParsedTransaction[]
  errors: string[]
}
