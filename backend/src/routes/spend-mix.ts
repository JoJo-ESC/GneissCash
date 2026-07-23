import { Router, Response } from 'express'
import { eachMonthOfInterval, endOfMonth, format, isValid, parseISO, startOfMonth, subMonths } from 'date-fns'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'
import { summarizeSpendMix, type SpendMixTransaction } from '../lib/analytics/spendMix'

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

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { range, end } = req.query

  const months = resolveMonthSpan(range as string)
  const parsedEnd = end ? parseISO(end as string) : null
  const today = parsedEnd && isValid(parsedEnd) ? parsedEnd : new Date()
  const periodEnd = endOfMonth(today)
  const periodStart = startOfMonth(subMonths(periodEnd, months - 1))

  try {
    const result = await query(
      `SELECT amount, category, merchant_name, name, date
       FROM transactions
       WHERE user_id = $1 AND amount < 0
         AND date >= $2 AND date <= $3
       ORDER BY date DESC`,
      [userId, format(periodStart, 'yyyy-MM-dd'), format(periodEnd, 'yyyy-MM-dd')]
    )

    const transactions: SpendMixTransaction[] = result.rows.map((row) => ({
      amount: parseFloat(row.amount),
      category: row.category,
      merchant_name: row.merchant_name,
      name: row.name,
      date: row.date,
    }))

    const summary = summarizeSpendMix(transactions)
    const buckets = eachMonthOfInterval({ start: periodStart, end: periodEnd }).length

    res.json({
      range: { start: periodStart.toISOString(), end: periodEnd.toISOString(), grouping: 'month', buckets },
      totals: summary.totals,
      breakdown: summary.breakdown,
      topFlexCategories: summary.topFlexCategories,
      metadata: { generatedAt: new Date().toISOString() },
    })
  } catch (err) {
    console.error('Failed to build spend mix:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
