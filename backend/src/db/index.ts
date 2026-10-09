import { Pool, PoolClient } from 'pg'

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

/**
 * Runs `fn` against a single dedicated client wrapped in BEGIN/COMMIT, rolling
 * back on any error. Use this instead of `query` when multiple statements
 * need to be atomic (e.g. bulk inserts that must all succeed or all fail).
 */
export async function withTransaction<T>(fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect()
  try {
    await client.query('BEGIN')
    const result = await fn(client)
    await client.query('COMMIT')
    return result
  } catch (err) {
    await client.query('ROLLBACK')
    throw err
  } finally {
    client.release()
  }
}

export default { query, withTransaction }
