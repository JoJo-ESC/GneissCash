export interface UserSettings {
  id: string
  user_id: string
  monthly_income: number | null
  savings_goal: number | null
  goal_deadline: string | null
  current_saved: number | null
  created_at: string
  updated_at: string
}

export interface PlaidItem {
  id: string
  user_id: string
  access_token: string
  item_id: string
  institution_id: string | null
  institution_name: string | null
  cursor: string | null
  created_at: string
  updated_at: string
}

export interface BankAccount {
  id: string
  user_id: string
  plaid_item_id: string
  account_id: string
  name: string | null
  official_name: string | null
  type: string | null
  subtype: string | null
  mask: string | null
  current_balance: number | null
  available_balance: number | null
  iso_currency_code: string
  created_at: string
  updated_at: string
}

export interface Transaction {
  id: string
  user_id: string
  bank_account_id: string
  plaid_transaction_id: string | null
  amount: number
  date: string
  name: string | null
  merchant_name: string | null
  category: string[] | null
  pending: boolean
  created_at: string
}

export interface WeeklySummary {
  id: string
  user_id: string
  week_start: string
  week_end: string
  total_spent: number | null
  total_income: number | null
  biggest_purchase_name: string | null
  biggest_purchase_amount: number | null
  grade: string | null
  created_at: string
}
