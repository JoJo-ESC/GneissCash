import { SupabaseClient } from '@supabase/supabase-js'
import { format } from 'date-fns'
import { getWeekBounds, calculateWeeklyAllowance, calculateGrade } from './calculations'
import { UserSettings, Transaction, WeeklySummary } from '@/types/database'

export interface WeeklySummaryResult {
  summary: WeeklySummary
  isNew: boolean
}

/**
 * Generate a weekly summary for a given week
 * Calculates totals, determines grade, finds biggest purchase, and saves to database
 *
 * @param supabase - Supabase client instance
 * @param date - Any date within the target week (defaults to current date)
 * @returns The generated or updated weekly summary
 */
export async function generateWeeklySummary(
  supabase: SupabaseClient,
  date: Date = new Date()
): Promise<WeeklySummaryResult> {
  // Get authenticated user
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error('Unauthorized')
  }

  // Get week bounds (Monday to Sunday)
  const { start: weekStart, end: weekEnd } = getWeekBounds(date)
  const startDate = format(weekStart, 'yyyy-MM-dd')
  const endDate = format(weekEnd, 'yyyy-MM-dd')

  // Fetch user settings and transactions for the week in parallel
  const [settingsResult, transactionsResult] = await Promise.all([
    supabase
      .from('user_settings')
      .select('*')
      .single(),
    supabase
      .from('transactions')
      .select('*')
      .eq('user_id', user.id)
      .gte('date', startDate)
      .lte('date', endDate)
      .order('amount', { ascending: true }), // Order by amount to easily find biggest purchase
  ])

  const settings = settingsResult.data as UserSettings | null
  const transactions = (transactionsResult.data as Transaction[]) || []

  // Calculate totals (expenses are negative, income is positive)
  const totalSpent = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  // Find biggest purchase (most negative amount)
  const biggestPurchase = transactions
    .filter((t) => t.amount < 0)
    .sort((a, b) => a.amount - b.amount)[0] // Most negative first

  const biggestPurchaseName = biggestPurchase?.merchant_name || biggestPurchase?.name || null
  const biggestPurchaseAmount = biggestPurchase ? Math.abs(biggestPurchase.amount) : null

  // Calculate grade based on allowance
  let grade: string | null = null

  if (settings?.monthly_income && settings?.savings_goal && settings?.goal_deadline) {
    const weeklyAllowance = calculateWeeklyAllowance({
      monthlyIncome: settings.monthly_income,
      goalAmount: settings.savings_goal,
      deadline: new Date(settings.goal_deadline),
      currentSaved: settings.current_saved || 0,
    })

    const gradeResult = calculateGrade(totalSpent, weeklyAllowance)
    grade = gradeResult.grade
  }

  // Check if a summary already exists for this week
  const { data: existingSummary } = await supabase
    .from('weekly_summaries')
    .select('id')
    .eq('user_id', user.id)
    .eq('week_start', startDate)
    .single()

  const summaryData = {
    user_id: user.id,
    week_start: startDate,
    week_end: endDate,
    total_spent: Math.round(totalSpent * 100) / 100,
    total_income: Math.round(totalIncome * 100) / 100,
    biggest_purchase_name: biggestPurchaseName,
    biggest_purchase_amount: biggestPurchaseAmount ? Math.round(biggestPurchaseAmount * 100) / 100 : null,
    grade,
  }

  let summary: WeeklySummary
  let isNew = false

  if (existingSummary) {
    // Update existing summary
    const { data: updated, error: updateError } = await supabase
      .from('weekly_summaries')
      .update(summaryData)
      .eq('id', existingSummary.id)
      .select()
      .single()

    if (updateError) {
      console.error('Failed to update weekly summary:', updateError)
      throw new Error('Failed to update weekly summary')
    }

    summary = updated as WeeklySummary
  } else {
    // Create new summary
    const { data: created, error: createError } = await supabase
      .from('weekly_summaries')
      .insert(summaryData)
      .select()
      .single()

    if (createError) {
      console.error('Failed to create weekly summary:', createError)
      throw new Error('Failed to create weekly summary')
    }

    summary = created as WeeklySummary
    isNew = true
  }

  return { summary, isNew }
}

/**
 * Get all weekly summaries for a user
 *
 * @param supabase - Supabase client instance
 * @param limit - Maximum number of summaries to return
 * @returns Array of weekly summaries ordered by most recent first
 */
export async function getWeeklySummaries(
  supabase: SupabaseClient,
  limit: number = 12
): Promise<WeeklySummary[]> {
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error('Unauthorized')
  }

  const { data: summaries, error } = await supabase
    .from('weekly_summaries')
    .select('*')
    .eq('user_id', user.id)
    .order('week_start', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Failed to fetch weekly summaries:', error)
    throw new Error('Failed to fetch weekly summaries')
  }

  return (summaries as WeeklySummary[]) || []
}
