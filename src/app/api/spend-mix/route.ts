import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { eachMonthOfInterval, endOfMonth, format, isValid, parseISO, startOfMonth, subMonths } from 'date-fns'
import { summarizeSpendMix, type SpendMixTransaction } from '@/lib/analytics/spendMix'
import type { SpendMixResponse } from '@/types/analytics'

const RANGE_TO_MONTHS: Record<string, number> = {
  '3m': 3,
  '6m': 6,
  '12m': 12,
}

function resolveMonthSpan(range: string | null): number {
  if (!range) return RANGE_TO_MONTHS['6m']
  const normalized = range.toLowerCase()
  if (RANGE_TO_MONTHS[normalized]) return RANGE_TO_MONTHS[normalized]
  const parsed = parseInt(normalized, 10)
  if (!Number.isNaN(parsed) && parsed > 0) {
    return Math.min(parsed, 24)
  }
  return RANGE_TO_MONTHS['6m']
}

function sanitizeEndDate(param: string | null): Date | null {
  if (!param) return null
  const parsed = parseISO(param)
  if (!isValid(parsed)) return null
  return parsed
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const rangeParam = searchParams.get('range')
    const months = resolveMonthSpan(rangeParam)
    const explicitEnd = sanitizeEndDate(searchParams.get('end'))
    const today = explicitEnd ?? new Date()
    const periodEnd = endOfMonth(today)
    const periodStart = startOfMonth(subMonths(periodEnd, months - 1))

    const { data, error } = await supabase
      .from('transactions')
      .select('amount, category, merchant_name, name, date')
      .eq('user_id', user.id)
      .lt('amount', 0)
      .gte('date', format(periodStart, 'yyyy-MM-dd'))
      .lte('date', format(periodEnd, 'yyyy-MM-dd'))
      .order('date', { ascending: false })

    if (error) {
      console.error('Failed to load spending split:', error)
      return NextResponse.json({ error: 'Failed to load spending split' }, { status: 500 })
    }

    const transactions: SpendMixTransaction[] = (data || []).map((transaction) => ({
      amount: transaction.amount,
      category: transaction.category,
      merchant_name: transaction.merchant_name,
      name: transaction.name,
      date: transaction.date,
    }))

    const summary = summarizeSpendMix(transactions)

    const buckets = eachMonthOfInterval({ start: periodStart, end: periodEnd }).length

    const response: SpendMixResponse = {
      range: {
        start: periodStart.toISOString(),
        end: periodEnd.toISOString(),
        grouping: 'month',
        buckets,
      },
      totals: summary.totals,
      breakdown: summary.breakdown,
      topFlexCategories: summary.topFlexCategories,
      metadata: {
        generatedAt: new Date().toISOString(),
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error building spending split:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
