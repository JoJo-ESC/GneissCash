import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { DEMO_USER_ID } from '../lib/demoUser'

// Loose generics so `req as AuthRequest` casts cleanly regardless of a
// route's inferred params type (e.g. `Request<{ id: string }, ...>` on a
// `:id` route) — nothing reads req.params through this type, so nothing is
// lost by not narrowing it.
export interface AuthRequest extends Request<any, any, any, any, any> {
  userId: string
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing token' })
    return
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
    ;(req as AuthRequest).userId = payload.userId
    next()
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

/**
 * Protects the shared public demo account from being vandalized by one
 * visitor for every other visitor — blocks every non-GET request made as
 * the demo user. Must run after requireAuth, which sets req.userId.
 */
export function blockDemoWrites(req: Request, res: Response, next: NextFunction) {
  if ((req as AuthRequest).userId === DEMO_USER_ID && req.method !== 'GET') {
    res.status(403).json({ error: 'The demo account is read-only' })
    return
  }
  next()
}
