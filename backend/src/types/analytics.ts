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
