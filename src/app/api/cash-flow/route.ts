import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  eachMonthOfInterval,
  endOfMonth,
  format,
  isValid,
  parseISO,
  startOfMonth,
  subMonths,
} from 'date-fns'
import { CashFlowPoint, CashFlowResponse } from '@/types/analytics'

const RANGE_TO_MONTHS: Record<string, number> = {
  '3m': 3,
  '6m': 6,
  '12m': 12,
}

function resolveMonthSpan(range: string | null): number {
  if (!range) return RANGE_TO_MONTHS['6m']
  const normalized = range.toLowerCase()
  if (RANGE_TO_MONTHS[normalized]) return RANGE_TO_MONTHS[normalized]
  // Support numeric values like "5"
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

type Grouping = 'month'

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
    const grouping = (searchParams.get('grouping') || 'month').toLowerCase() as Grouping

    if (grouping !== 'month') {
      return NextResponse.json({ error: 'Unsupported grouping' }, { status: 400 })
    }

    const explicitEnd = sanitizeEndDate(searchParams.get('end'))
    const today = explicitEnd ?? new Date()
    const periodEnd = endOfMonth(today)
    const periodStart = startOfMonth(subMonths(periodEnd, months - 1))

    const { data: transactions, error } = await supabase
      .from('transactions')
      .select('amount, date')
      .eq('user_id', user.id)
      .gte('date', format(periodStart, 'yyyy-MM-dd'))
      .lte('date', format(periodEnd, 'yyyy-MM-dd'))
      .order('date', { ascending: true })

    if (error) {
      console.error('Failed to load cash flow history:', error)
      return NextResponse.json({ error: 'Failed to load cash flow history' }, { status: 500 })
    }

    const aggregates = new Map<string, { income: number; expenses: number }>()

    transactions?.forEach((transaction) => {
      const bucket = format(new Date(transaction.date), 'yyyy-MM')
      const current = aggregates.get(bucket) || { income: 0, expenses: 0 }

      if (transaction.amount >= 0) {
        current.income += transaction.amount
      } else {
        current.expenses += Math.abs(transaction.amount)
      }

      aggregates.set(bucket, current)
    })

    const monthsInterval = eachMonthOfInterval({ start: periodStart, end: periodEnd })

    const points: CashFlowPoint[] = monthsInterval.map((month, index) => {
      const bucket = format(month, 'yyyy-MM')
      const aggregate = aggregates.get(bucket) || { income: 0, expenses: 0 }
      const income = Math.round(aggregate.income * 100) / 100
      const expenses = Math.round(aggregate.expenses * 100) / 100
      const net = Math.round((income - expenses) * 100) / 100

      return {
        bucket,
        label: format(month, 'MMM yyyy'),
        income,
        expenses,
        net,
        rollingNet: null, // placeholder, populated below
        deficit: net < 0,
      }
    })

    const rollingWindow = 3
    points.forEach((point, index) => {
      const start = Math.max(0, index - (rollingWindow - 1))
      const slice = points.slice(start, index + 1)
      if (slice.length === 0) return
      const total = slice.reduce((sum, item) => sum + item.net, 0)
      point.rollingNet = Math.round((total / slice.length) * 100) / 100
    })

    const totals = points.reduce(
      (acc, point) => {
        acc.income += point.income
        acc.expenses += point.expenses
        acc.net += point.net
        acc.maxIncome = Math.max(acc.maxIncome, point.income)
        acc.maxExpenses = Math.max(acc.maxExpenses, point.expenses)
        if (point.deficit) acc.deficitMonths += 1
        return acc
      },
      { income: 0, expenses: 0, net: 0, maxIncome: 0, maxExpenses: 0, deficitMonths: 0 }
    )

    const response: CashFlowResponse = {
      range: {
        start: periodStart.toISOString(),
        end: periodEnd.toISOString(),
        grouping: 'month',
        buckets: points.length,
      },
      points,
      totals: {
        income: Math.round(totals.income * 100) / 100,
        expenses: Math.round(totals.expenses * 100) / 100,
        net: Math.round(totals.net * 100) / 100,
        maxIncome: Math.round(totals.maxIncome * 100) / 100,
        maxExpenses: Math.round(totals.maxExpenses * 100) / 100,
        deficitMonths: totals.deficitMonths,
      },
      metadata: {
        generatedAt: new Date().toISOString(),
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error building cash flow history:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
