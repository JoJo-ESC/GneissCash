import { Router, Response } from 'express'
import { format } from 'date-fns'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'
import { getWeekBounds, calculateWeeklyAllowance, calculateGrade } from '../lib/calculations'

const router = Router()

router.use(requireAuth)

router.post('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { date: dateParam } = req.body

  const date = dateParam ? new Date(dateParam) : new Date()
  if (isNaN(date.getTime())) {
    res.status(400).json({ error: 'Invalid date format' })
    return
  }

  const { start: weekStart, end: weekEnd } = getWeekBounds(date)
  const startDate = format(weekStart, 'yyyy-MM-dd')
  const endDate = format(weekEnd, 'yyyy-MM-dd')

  try {
    const [settingsResult, txResult] = await Promise.all([
      query('SELECT * FROM user_settings WHERE user_id = $1', [userId]),
      query(
        `SELECT amount, merchant_name, name FROM transactions
         WHERE user_id = $1 AND date >= $2 AND date <= $3`,
        [userId, startDate, endDate]
      ),
    ])

    const settings = settingsResult.rows[0] ?? null
    const transactions = txResult.rows

    const totalSpent = transactions
      .filter((t) => parseFloat(t.amount) < 0)
      .reduce((sum, t) => sum + Math.abs(parseFloat(t.amount)), 0)

    const totalIncome = transactions
      .filter((t) => parseFloat(t.amount) > 0)
      .reduce((sum, t) => sum + parseFloat(t.amount), 0)

    const biggestPurchase = transactions
      .filter((t) => parseFloat(t.amount) < 0)
      .sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount))[0]

    let grade: string | null = null
    if (settings?.monthly_income && settings?.savings_goal && settings?.goal_deadline) {
      const weeklyAllowance = calculateWeeklyAllowance({
        monthlyIncome: parseFloat(settings.monthly_income),
        goalAmount: parseFloat(settings.savings_goal),
        deadline: new Date(settings.goal_deadline),
        currentSaved: parseFloat(settings.current_saved ?? 0),
      })
      grade = calculateGrade(totalSpent, weeklyAllowance).grade
    }

    const summaryData = {
      user_id: userId,
      week_start: startDate,
      week_end: endDate,
      total_spent: Math.round(totalSpent * 100) / 100,
      total_income: Math.round(totalIncome * 100) / 100,
      biggest_purchase_name: biggestPurchase?.merchant_name ?? biggestPurchase?.name ?? null,
      biggest_purchase_amount: biggestPurchase ? Math.round(Math.abs(parseFloat(biggestPurchase.amount)) * 100) / 100 : null,
      grade,
    }

    const existing = await query(
      'SELECT id FROM weekly_summaries WHERE user_id = $1 AND week_start = $2',
      [userId, startDate]
    )

    let summary
    let isNew = false

    if (existing.rows.length > 0) {
      const result = await query(
        `UPDATE weekly_summaries
         SET total_spent = $1, total_income = $2, biggest_purchase_name = $3,
             biggest_purchase_amount = $4, grade = $5
         WHERE id = $6 RETURNING *`,
        [summaryData.total_spent, summaryData.total_income, summaryData.biggest_purchase_name,
         summaryData.biggest_purchase_amount, summaryData.grade, existing.rows[0].id]
      )
      summary = result.rows[0]
    } else {
      const result = await query(
        `INSERT INTO weekly_summaries
           (user_id, week_start, week_end, total_spent, total_income,
            biggest_purchase_name, biggest_purchase_amount, grade)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [userId, startDate, endDate, summaryData.total_spent, summaryData.total_income,
         summaryData.biggest_purchase_name, summaryData.biggest_purchase_amount, summaryData.grade]
      )
      summary = result.rows[0]
      isNew = true
    }

    res.status(isNew ? 201 : 200).json({
      summary,
      isNew,
      message: isNew ? 'Weekly summary created' : 'Weekly summary updated',
    })
  } catch (err) {
    console.error('Failed to generate weekly summary:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const limit = parseInt((req.query.limit as string) || '12')

  try {
    const result = await query(
      `SELECT * FROM weekly_summaries WHERE user_id = $1
       ORDER BY week_start DESC LIMIT $2`,
      [userId, limit]
    )
    res.json({ summaries: result.rows, count: result.rows.length })
  } catch (err) {
    console.error('Failed to fetch weekly summaries:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
