import { Pool } from 'pg'

let _pool: Pool | null = null

function getPool(): Pool {
  if (!_pool) {
    _pool = new Pool({ connectionString: process.env.DATABASE_URL })
    _pool.on('error', (err) => {
      console.error('Unexpected database error', err)
      process.exit(1)
    })
  }
  return _pool
}

export const query = (text: string, params?: unknown[]) => {
  return getPool().query(text, params)
}

export default { query }
