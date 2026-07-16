import { Router, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { query } from '../db'

const router = Router()

router.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' })
    return
  }

  if (password.length < 8) {
    res.status(400).json({ error: 'Password must be at least 8 characters' })
    return
  }

  try {
    const existing = await query('SELECT id FROM users WHERE email = $1', [email])
    if (existing.rows.length > 0) {
      res.status(409).json({ error: 'Email already in use' })
      return
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const result = await query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at',
      [email, passwordHash]
    )

    const user = result.rows[0]
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' })

    res.status(201).json({ token, user: { id: user.id, email: user.email } })
  } catch (err) {
    console.error('Register error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' })
    return
  }

  try {
    const result = await query('SELECT id, email, password_hash FROM users WHERE email = $1', [email])

    if (result.rows.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const user = result.rows[0]
    const match = await bcrypt.compare(password, user.password_hash)

    if (!match) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' })

    res.json({ token, user: { id: user.id, email: user.email } })
  } catch (err) {
    console.error('Login error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
