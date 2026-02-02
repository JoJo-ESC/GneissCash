export interface UserSettings {
  id: string
  user_id: string
  display_name: string | null
  avatar_url: string | null
  monthly_income: number | null
  savings_goal: number | null
  goal_deadline: string | null
  current_saved: number | null
  created_at: string
  updated_at: string
}

export interface BankAccount {
  id: string
  user_id: string
  name: string
  type: 'checking' | 'savings' | 'credit'
  current_balance: number | null
  created_at: string
  updated_at: string
}

export interface Import {
  id: string
  user_id: string
  bank_account_id: string
  filename: string
  file_hash: string
  import_type: 'csv' | 'pdf'
  transaction_count: number
  created_at: string
}

export interface Transaction {
  id: string
  user_id: string
  bank_account_id: string
  import_id: string | null
  amount: number
  date: string
  name: string | null
  merchant_name: string | null
  category: string | null
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
