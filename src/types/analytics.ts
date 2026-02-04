export type CashFlowGrouping = 'month'

export interface CashFlowRange {
  start: string
  end: string
  grouping: CashFlowGrouping
  buckets: number
}

export interface CashFlowPoint {
  bucket: string
  label: string
  income: number
  expenses: number
  net: number
  rollingNet: number | null
  deficit: boolean
}

export interface CashFlowTotals {
  income: number
  expenses: number
  net: number
  maxIncome: number
  maxExpenses: number
  deficitMonths: number
}

export interface CashFlowResponse {
  range: CashFlowRange
  points: CashFlowPoint[]
  totals: CashFlowTotals
  metadata: {
    generatedAt: string
  }
}
