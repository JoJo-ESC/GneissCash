import { Router, Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { query } from '../db'
import { DEMO_USER_ID } from '../lib/demoUser'

const router = Router()

// The public demo deployment sets DEMO_ONLY=true to take real account
// creation/login off the internet entirely — the demo account is the only
// way in. Unset (e.g. local dev) leaves register/login working as normal.
function blockIfDemoOnly(_req: Request, res: Response, next: NextFunction) {
  if (process.env.DEMO_ONLY === 'true') {
    res.status(404).json({ error: 'Not found' })
    return
  }
  next()
}

router.post('/demo', async (_req: Request, res: Response) => {
  try {
    const result = await query('SELECT id, email FROM users WHERE id = $1', [DEMO_USER_ID])
    if (result.rows.length === 0) {
      res.status(503).json({ error: 'Demo account is not available right now' })
      return
    }

    const user = result.rows[0]
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' })

    res.json({ token, user: { id: user.id, email: user.email }, isDemo: true })
  } catch (err) {
    console.error('Demo login error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/register', blockIfDemoOnly, async (req: Request, res: Response) => {
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

router.post('/login', blockIfDemoOnly, async (req: Request, res: Response) => {
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
