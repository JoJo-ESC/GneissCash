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

export type SpendClassification = 'essential' | 'flex'

export interface SpendMixTotals {
  essential: number
  flex: number
  total: number
  essentialPct: number
  flexPct: number
}

export interface SpendMixBreakdownItem {
  classification: SpendClassification
  label: string
  amount: number
  percentage: number
}

export interface SpendMixCategoryHighlight {
  category: string
  amount: number
  percentage: number
}

export interface SpendMixResponse {
  range: CashFlowRange
  totals: SpendMixTotals
  breakdown: SpendMixBreakdownItem[]
  topFlexCategories: SpendMixCategoryHighlight[]
  metadata: {
    generatedAt: string
  }
}
