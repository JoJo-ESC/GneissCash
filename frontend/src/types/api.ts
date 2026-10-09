export interface User {
  id: string
  email: string
}

export interface BankAccount {
  id: string
  user_id: string
  name: string
  type: "checking" | "savings" | "credit"
  current_balance: string | null
  created_at: string
  updated_at: string
}

export interface Transaction {
  id: string
  user_id: string
  bank_account_id: string
  import_id: string | null
  amount: string
  date: string
  name: string | null
  merchant_name: string | null
  category: string | null
  created_at: string
  bank_account?: { id: string; name: string; type: BankAccount["type"] }
}

export interface Goal {
  id: string
  user_id: string
  name: string
  goal_amount: string
  current_amount: string
  created_at: string
}

export interface UserSettings {
  id: string
  user_id: string
  monthly_income: string | null
  savings_goal: string | null
  goal_deadline: string | null
  current_saved: string | null
  display_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
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

export interface CashFlowResponse {
  range: { start: string; end: string; grouping: string; buckets: number }
  points: CashFlowPoint[]
  totals: {
    income: number
    expenses: number
    net: number
    maxIncome: number
    maxExpenses: number
    deficitMonths: number
  }
  metadata: { generatedAt: string }
}

export type SpendClassification = "essential" | "flex"

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
  range: { start: string; end: string; grouping: string; buckets: number }
  totals: {
    essential: number
    flex: number
    total: number
    essentialPct: number
    flexPct: number
  }
  breakdown: SpendMixBreakdownItem[]
  topFlexCategories: SpendMixCategoryHighlight[]
  metadata: { generatedAt: string }
}

export type Grade = "A" | "B" | "C" | "D" | "F"

export interface WeeklySummary {
  id: string
  user_id: string
  week_start: string
  week_end: string
  total_spent: string | null
  total_income: string | null
  biggest_purchase_name: string | null
  biggest_purchase_amount: string | null
  grade: Grade | null
  created_at: string
}

export interface ImportResult {
  import: {
    id: string
    filename: string
    import_type: "csv" | "pdf"
    transaction_count: number
  }
  transactions_imported: number
  parse_errors: string[]
}
