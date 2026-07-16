import { Router, Response } from 'express'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'

const router = Router()

router.use(requireAuth)

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest

  try {
    const result = await query(
      'SELECT * FROM bank_accounts WHERE user_id = $1 ORDER BY created_at ASC',
      [userId]
    )
    res.json({ bank_accounts: result.rows })
  } catch (err) {
    console.error('Failed to fetch bank accounts:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { name, type, current_balance } = req.body

  if (!name || !type) {
    res.status(400).json({ error: 'Name and type are required' })
    return
  }

  const validTypes = ['checking', 'savings', 'credit']
  if (!validTypes.includes(type)) {
    res.status(400).json({ error: 'Type must be checking, savings, or credit' })
    return
  }

  try {
    const result = await query(
      `INSERT INTO bank_accounts (user_id, name, type, current_balance)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [userId, name, type, current_balance ?? null]
    )
    res.status(201).json({ bank_account: result.rows[0] })
  } catch (err) {
    console.error('Failed to create bank account:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { id } = req.params

  try {
    const existing = await query(
      'SELECT id FROM bank_accounts WHERE id = $1 AND user_id = $2',
      [id, userId]
    )

    if (existing.rows.length === 0) {
      res.status(404).json({ error: 'Bank account not found' })
      return
    }

    await query('DELETE FROM bank_accounts WHERE id = $1', [id])
    res.json({ success: true })
  } catch (err) {
    console.error('Failed to delete bank account:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
