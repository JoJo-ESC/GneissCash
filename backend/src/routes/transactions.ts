import { Router, Response } from 'express'
import { query } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'

const router = Router()

router.use(requireAuth)

router.get('/', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { start_date, end_date, bank_account_id, category, limit = '50', offset = '0', sort = 'desc' } = req.query

  const conditions: string[] = ['t.user_id = $1']
  const params: unknown[] = [userId]
  let i = 2

  if (start_date) { conditions.push(`t.date >= $${i++}`); params.push(start_date) }
  if (end_date) { conditions.push(`t.date <= $${i++}`); params.push(end_date) }
  if (bank_account_id) { conditions.push(`t.bank_account_id = $${i++}`); params.push(bank_account_id) }
  if (category) { conditions.push(`t.category = $${i++}`); params.push(category) }

  const order = sort === 'asc' ? 'ASC' : 'DESC'
  const limitNum = parseInt(limit as string)
  const offsetNum = parseInt(offset as string)

  try {
    const countResult = await query(
      `SELECT COUNT(*) FROM transactions t WHERE ${conditions.join(' AND ')}`,
      params
    )

    const result = await query(
      `SELECT t.*,
        json_build_object('id', b.id, 'name', b.name, 'type', b.type) AS bank_account
       FROM transactions t
       JOIN bank_accounts b ON t.bank_account_id = b.id
       WHERE ${conditions.join(' AND ')}
       ORDER BY t.date ${order}, t.created_at ${order}
       LIMIT $${i} OFFSET $${i + 1}`,
      [...params, limitNum, offsetNum]
    )

    res.json({
      transactions: result.rows,
      total: parseInt(countResult.rows[0].count),
      limit: limitNum,
      offset: offsetNum,
    })
  } catch (err) {
    console.error('Failed to fetch transactions:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.patch('/:id', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { id } = req.params
  const { category, merchant_name, name } = req.body

  try {
    const existing = await query(
      'SELECT id FROM transactions WHERE id = $1 AND user_id = $2',
      [id, userId]
    )

    if (existing.rows.length === 0) {
      res.status(404).json({ error: 'Transaction not found' })
      return
    }

    const fields: string[] = []
    const params: unknown[] = []
    let i = 1

    if (category !== undefined) { fields.push(`category = $${i++}`); params.push(category) }
    if (merchant_name !== undefined) { fields.push(`merchant_name = $${i++}`); params.push(merchant_name) }
    if (name !== undefined) { fields.push(`name = $${i++}`); params.push(name) }

    if (fields.length === 0) {
      res.status(400).json({ error: 'No fields to update' })
      return
    }

    params.push(id)
    const result = await query(
      `UPDATE transactions SET ${fields.join(', ')} WHERE id = $${i} RETURNING *`,
      params
    )

    res.json({ transaction: result.rows[0] })
  } catch (err) {
    console.error('Failed to update transaction:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { id } = req.params

  try {
    const existing = await query(
      'SELECT id, import_id FROM transactions WHERE id = $1 AND user_id = $2',
      [id, userId]
    )

    if (existing.rows.length === 0) {
      res.status(404).json({ error: 'Transaction not found' })
      return
    }

    const { import_id } = existing.rows[0]

    await query('DELETE FROM transactions WHERE id = $1', [id])

    if (import_id) {
      await query(
        'UPDATE imports SET transaction_count = GREATEST(transaction_count - 1, 0) WHERE id = $1',
        [import_id]
      )
    }

    res.json({ success: true })
  } catch (err) {
    console.error('Failed to delete transaction:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
