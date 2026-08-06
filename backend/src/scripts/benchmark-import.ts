import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

interface Row {
  user_id: string
  bank_account_id: string
  amount: string
  date: string
  name: string | null
  merchant_name: string | null
  category: string | null
}

const CHUNK_SIZE = 500

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const client = await pool.connect()

  try {
    const { rows } = await client.query<Row>(
      `SELECT user_id, bank_account_id, amount, date, name, merchant_name, category
       FROM transactions
       ORDER BY created_at DESC`
    )

    if (rows.length === 0) {
      console.log('No transactions in the database yet — import a real statement first, then re-run this.')
      return
    }

    console.log(`Benchmarking with ${rows.length} real transaction rows from your database.\n`)

    await client.query(`
      CREATE TEMP TABLE benchmark_transactions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL,
        bank_account_id UUID NOT NULL,
        import_id UUID,
        amount NUMERIC NOT NULL,
        date DATE NOT NULL,
        name TEXT,
        merchant_name TEXT,
        category TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `)

    // Strategy A: current behavior — one INSERT per row, sequential.
    const startRowByRow = performance.now()
    for (const row of rows) {
      await client.query(
        `INSERT INTO benchmark_transactions (user_id, bank_account_id, amount, date, name, merchant_name, category)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [row.user_id, row.bank_account_id, row.amount, row.date, row.name, row.merchant_name, row.category]
      )
    }
    const rowByRowMs = performance.now() - startRowByRow

    await client.query('TRUNCATE benchmark_transactions')

    // Strategy B: chunked multi-row INSERT within a single transaction.
    const startBatched = performance.now()
    await client.query('BEGIN')
    for (let offset = 0; offset < rows.length; offset += CHUNK_SIZE) {
      const chunk = rows.slice(offset, offset + CHUNK_SIZE)
      const values: unknown[] = []
      const placeholders: string[] = []

      chunk.forEach((row, i) => {
        const base = i * 7
        placeholders.push(
          `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7})`
        )
        values.push(row.user_id, row.bank_account_id, row.amount, row.date, row.name, row.merchant_name, row.category)
      })

      await client.query(
        `INSERT INTO benchmark_transactions (user_id, bank_account_id, amount, date, name, merchant_name, category)
         VALUES ${placeholders.join(', ')}`,
        values
      )
    }
    await client.query('COMMIT')
    const batchedMs = performance.now() - startBatched

    await client.query('DROP TABLE benchmark_transactions')

    console.log(`Row-by-row (current):        ${rowByRowMs.toFixed(1)}ms  (${rows.length} round-trips)`)
    console.log(
      `Batched, chunks of ${CHUNK_SIZE} (new): ${batchedMs.toFixed(1)}ms  (${Math.ceil(rows.length / CHUNK_SIZE) + 2} round-trips)`
    )
    console.log(`Speedup: ${(rowByRowMs / batchedMs).toFixed(1)}x`)
  } finally {
    client.release()
    await pool.end()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
