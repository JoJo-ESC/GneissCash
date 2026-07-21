import { Router, Response } from 'express'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'

const router = Router()

router.use(requireAuth)

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest

  try {
    const result = await query(
      'SELECT * FROM goals WHERE user_id = $1 ORDER BY created_at ASC',
      [userId]
    )
    res.json({ goals: result.rows })
  } catch (err) {
    console.error('Failed to fetch goals:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { name, goal_amount, current_amount } = req.body

  if (!name || goal_amount === undefined) {
    res.status(400).json({ error: 'Name and goal_amount are required' })
    return
  }

  if (isNaN(Number(goal_amount)) || Number(goal_amount) <= 0) {
    res.status(400).json({ error: 'goal_amount must be a positive number' })
    return
  }

  try {
    const result = await query(
      `INSERT INTO goals (user_id, name, goal_amount, current_amount)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [userId, name, goal_amount, current_amount ?? 0]
    )
    res.status(201).json({ goal: result.rows[0] })
  } catch (err) {
    console.error('Failed to create goal:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { id } = req.params

  try {
    const existing = await query(
      'SELECT id FROM goals WHERE id = $1 AND user_id = $2',
      [id, userId]
    )

    if (existing.rows.length === 0) {
      res.status(404).json({ error: 'Goal not found' })
      return
    }

    await query('DELETE FROM goals WHERE id = $1', [id])
    res.json({ success: true })
  } catch (err) {
    console.error('Failed to delete goal:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
