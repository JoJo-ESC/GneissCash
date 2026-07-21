import { Router, Response } from 'express'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'

const router = Router()

router.use(requireAuth)

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest

  try {
    const result = await query(
      'SELECT * FROM user_settings WHERE user_id = $1',
      [userId]
    )
    res.json({ settings: result.rows[0] ?? null })
  } catch (err) {
    console.error('Failed to fetch user settings:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.put('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { monthly_income, savings_goal, goal_deadline, current_saved, display_name, avatar_url } = req.body

  const fields: string[] = []
  const params: unknown[] = []
  let i = 1

  if (monthly_income !== undefined) { fields.push(`monthly_income = $${i++}`); params.push(monthly_income) }
  if (savings_goal !== undefined) { fields.push(`savings_goal = $${i++}`); params.push(savings_goal) }
  if (goal_deadline !== undefined) { fields.push(`goal_deadline = $${i++}`); params.push(goal_deadline) }
  if (current_saved !== undefined) { fields.push(`current_saved = $${i++}`); params.push(current_saved) }
  if (display_name !== undefined) { fields.push(`display_name = $${i++}`); params.push(display_name) }
  if (avatar_url !== undefined) { fields.push(`avatar_url = $${i++}`); params.push(avatar_url) }

  if (fields.length === 0) {
    res.status(400).json({ error: 'No fields to update' })
    return
  }

  try {
    const result = await query(
      `INSERT INTO user_settings (user_id, ${fields.map((f) => f.split(' = ')[0]).join(', ')})
       VALUES ($${i}, ${params.map((_, idx) => `$${idx + 1}`).join(', ')})
       ON CONFLICT (user_id) DO UPDATE SET ${fields.join(', ')}, updated_at = now()
       RETURNING *`,
      [...params, userId]
    )
    res.json({ settings: result.rows[0] })
  } catch (err) {
    console.error('Failed to update user settings:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
