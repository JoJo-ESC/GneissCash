import { SupabaseClient } from '@supabase/supabase-js'
import { format } from 'date-fns'
import {
  getWeekBounds,
  calculateWeeklyAllowance,
  calculateGrade,
  getPulseStatus,
  getRemainingAllowance,
  PulseStatus,
  GradeResult,
} from './calculations'
import { UserSettings, Transaction } from '@/types/database'

export interface CategorySpending {
  category: string
  amount: number
  percentage: number
  transactionCount: number
}

export interface DashboardData {
  // User settings
  settings: UserSettings | null
  hasSettings: boolean

  // Week info
  weekStart: Date
  weekEnd: Date

  // Transactions
  transactions: Transaction[]
  transactionCount: number

  // Totals
  totalSpent: number
  totalIncome: number
  netAmount: number

  // Allowance
  weeklyAllowance: number
  remainingAllowance: number
  dailyAllowance: number

  // By category
  spendingByCategory: CategorySpending[]

  // Status
  pulseStatus: PulseStatus
  grade: GradeResult
}

/**
 * Fetches and calculates all dashboard data for the current user
 * @param supabase - Supabase client instance
 * @returns Dashboard data with settings, transactions, totals, and status
 */
export async function getDashboardData(
  supabase: SupabaseClient
): Promise<DashboardData> {
  const now = new Date()
  const { start: weekStart, end: weekEnd } = getWeekBounds(now)

  // Format dates for Supabase query
  const startDate = format(weekStart, 'yyyy-MM-dd')
  const endDate = format(weekEnd, 'yyyy-MM-dd')

  // Fetch user settings and this week's transactions in parallel
  const [settingsResult, transactionsResult] = await Promise.all([
    supabase
      .from('user_settings')
      .select('*')
      .single(),
    supabase
      .from('transactions')
      .select('*')
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: false }),
  ])

  const settings = settingsResult.data as UserSettings | null
  const transactions = (transactionsResult.data as Transaction[]) || []

  // Check if user has configured their settings
  const hasSettings = Boolean(
    settings?.monthly_income &&
    settings?.savings_goal &&
    settings?.goal_deadline
  )

  // Calculate totals from transactions
  // Expenses are negative, income is positive
  const totalSpent = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const netAmount = totalIncome - totalSpent

  // Calculate weekly allowance based on settings
  let weeklyAllowance = 0
  if (hasSettings && settings) {
    weeklyAllowance = calculateWeeklyAllowance({
      monthlyIncome: settings.monthly_income!,
      goalAmount: settings.savings_goal!,
      deadline: new Date(settings.goal_deadline!),
      currentSaved: settings.current_saved || 0,
    })
  }

  const remainingAllowance = getRemainingAllowance(totalSpent, weeklyAllowance)
  const dailyAllowance = Math.round((weeklyAllowance / 7) * 100) / 100

  // Group spending by category
  const categoryMap = new Map<string, { amount: number; count: number }>()

  transactions
    .filter((t) => t.amount < 0)
    .forEach((t) => {
      const category = t.category || 'Other'
      const existing = categoryMap.get(category) || { amount: 0, count: 0 }
      categoryMap.set(category, {
        amount: existing.amount + Math.abs(t.amount),
        count: existing.count + 1,
      })
    })

  const spendingByCategory: CategorySpending[] = Array.from(categoryMap.entries())
    .map(([category, data]) => ({
      category,
      amount: Math.round(data.amount * 100) / 100,
      percentage: totalSpent > 0 ? Math.round((data.amount / totalSpent) * 100) : 0,
      transactionCount: data.count,
    }))
    .sort((a, b) => b.amount - a.amount)

  // Get pulse status and grade
  const pulseStatus = getPulseStatus(totalSpent, weeklyAllowance, now)
  const grade = calculateGrade(totalSpent, weeklyAllowance)

  return {
    settings,
    hasSettings,
    weekStart,
    weekEnd,
    transactions,
    transactionCount: transactions.length,
    totalSpent: Math.round(totalSpent * 100) / 100,
    totalIncome: Math.round(totalIncome * 100) / 100,
    netAmount: Math.round(netAmount * 100) / 100,
    weeklyAllowance,
    remainingAllowance,
    dailyAllowance,
    spendingByCategory,
    pulseStatus,
    grade,
  }
}
