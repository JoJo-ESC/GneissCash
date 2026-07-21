import { Router, Response } from 'express'
import { eachMonthOfInterval, endOfMonth, format, isValid, parseISO, startOfMonth, subMonths } from 'date-fns'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'

const router = Router()

router.use(requireAuth)

const RANGE_TO_MONTHS: Record<string, number> = { '3m': 3, '6m': 6, '12m': 12 }

function resolveMonthSpan(range: string | null): number {
  if (!range) return 6
  const normalized = range.toLowerCase()
  if (RANGE_TO_MONTHS[normalized]) return RANGE_TO_MONTHS[normalized]
  const parsed = parseInt(normalized, 10)
  return !isNaN(parsed) && parsed > 0 ? Math.min(parsed, 24) : 6
}

function sanitizeEndDate(param: string | null): Date | null {
  if (!param) return null
  const parsed = parseISO(param)
  return isValid(parsed) ? parsed : null
}

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { range, end, grouping = 'month' } = req.query

  if (grouping !== 'month') {
    res.status(400).json({ error: 'Unsupported grouping' })
    return
  }

  const months = resolveMonthSpan(range as string)
  const today = sanitizeEndDate(end as string) ?? new Date()
  const periodEnd = endOfMonth(today)
  const periodStart = startOfMonth(subMonths(periodEnd, months - 1))

  try {
    const result = await query(
      `SELECT amount, date FROM transactions
       WHERE user_id = $1 AND date >= $2 AND date <= $3
       ORDER BY date ASC`,
      [userId, format(periodStart, 'yyyy-MM-dd'), format(periodEnd, 'yyyy-MM-dd')]
    )

    const aggregates = new Map<string, { income: number; expenses: number }>()

    for (const tx of result.rows) {
      const bucket = format(new Date(tx.date), 'yyyy-MM')
      const current = aggregates.get(bucket) ?? { income: 0, expenses: 0 }
      const amount = parseFloat(tx.amount)
      if (amount >= 0) current.income += amount
      else current.expenses += Math.abs(amount)
      aggregates.set(bucket, current)
    }

    const points = eachMonthOfInterval({ start: periodStart, end: periodEnd }).map((month) => {
      const bucket = format(month, 'yyyy-MM')
      const agg = aggregates.get(bucket) ?? { income: 0, expenses: 0 }
      const income = Math.round(agg.income * 100) / 100
      const expenses = Math.round(agg.expenses * 100) / 100
      const net = Math.round((income - expenses) * 100) / 100
      return { bucket, label: format(month, 'MMM yyyy'), income, expenses, net, rollingNet: null as number | null, deficit: net < 0 }
    })

    points.forEach((point, index) => {
      const slice = points.slice(Math.max(0, index - 2), index + 1)
      const total = slice.reduce((sum, p) => sum + p.net, 0)
      point.rollingNet = Math.round((total / slice.length) * 100) / 100
    })

    const totals = points.reduce(
      (acc, p) => ({
        income: acc.income + p.income,
        expenses: acc.expenses + p.expenses,
        net: acc.net + p.net,
        maxIncome: Math.max(acc.maxIncome, p.income),
        maxExpenses: Math.max(acc.maxExpenses, p.expenses),
        deficitMonths: acc.deficitMonths + (p.deficit ? 1 : 0),
      }),
      { income: 0, expenses: 0, net: 0, maxIncome: 0, maxExpenses: 0, deficitMonths: 0 }
    )

    res.json({
      range: { start: periodStart.toISOString(), end: periodEnd.toISOString(), grouping: 'month', buckets: points.length },
      points,
      totals: {
        income: Math.round(totals.income * 100) / 100,
        expenses: Math.round(totals.expenses * 100) / 100,
        net: Math.round(totals.net * 100) / 100,
        maxIncome: Math.round(totals.maxIncome * 100) / 100,
        maxExpenses: Math.round(totals.maxExpenses * 100) / 100,
        deficitMonths: totals.deficitMonths,
      },
      metadata: { generatedAt: new Date().toISOString() },
    })
  } catch (err) {
    console.error('Failed to build cash flow:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
