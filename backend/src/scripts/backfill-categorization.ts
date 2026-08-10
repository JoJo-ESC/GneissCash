import dotenv from 'dotenv'
import { Pool } from 'pg'
import { withTransaction } from '../db'
import { categorizeWithLLM } from '../lib/llmCategorize'

dotenv.config()

const CHUNK_SIZE = 300

interface Row {
  id: string
  merchant_name: string | null
  name: string | null
  amount: string
  category: string | null
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const { rows } = await pool.query<Row>(`SELECT id, merchant_name, name, amount, category FROM transactions ORDER BY created_at`)
  await pool.end()

  if (rows.length === 0) {
    console.log('No transactions to backfill.')
    return
  }

  console.log(`Backfilling categories for ${rows.length} transactions via LLM...\n`)

  const llmResults = await categorizeWithLLM(
    rows.map((row) => ({ merchant_name: row.merchant_name, name: row.name, amount: parseFloat(row.amount) }))
  )

  const updates: { id: string; category: string }[] = []
  let unchanged = 0
  let skipped = 0

  rows.forEach((row, i) => {
    const newCategory = llmResults[i]
    if (newCategory === null) {
      skipped++
      return
    }
    if (newCategory === row.category) {
      unchanged++
      return
    }
    const merchant = row.merchant_name ?? row.name ?? 'Unknown'
    console.log(`"${merchant}"  ${row.category ?? '(none)'} -> ${newCategory}`)
    updates.push({ id: row.id, category: newCategory })
  })

  console.log(`\n${updates.length} will change, ${unchanged} already match, ${skipped} had invalid LLM responses and were left as-is.`)

  if (updates.length === 0) {
    console.log('Nothing to update.')
    return
  }

  await withTransaction(async (client) => {
    for (let offset = 0; offset < updates.length; offset += CHUNK_SIZE) {
      const chunk = updates.slice(offset, offset + CHUNK_SIZE)
      const values: unknown[] = []
      const placeholders: string[] = []
      chunk.forEach((u, i) => {
        placeholders.push(`($${i * 2 + 1}::uuid, $${i * 2 + 2}::text)`)
        values.push(u.id, u.category)
      })
      await client.query(
        `UPDATE transactions AS t SET category = v.category
         FROM (VALUES ${placeholders.join(', ')}) AS v(id, category)
         WHERE t.id = v.id`,
        values
      )
    }
  })

  console.log(`\nUpdated ${updates.length} transactions.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
