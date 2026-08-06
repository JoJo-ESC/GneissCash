import { Router, Response } from 'express'
import multer from 'multer'
import { createHash } from 'crypto'
import { query, withTransaction } from '../db'
import { requireAuth, AuthRequest } from '../middleware/auth'
import { parseCSV, parsePDF } from '../lib/parsers'
import type { ParsedTransaction } from '../lib/parsers/types'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } })
const INSERT_CHUNK_SIZE = 500

router.use(requireAuth)

router.post('/', upload.single('file'), async (req, res: Response) => {
  const { userId } = req as AuthRequest
  const { bank_account_id } = req.body

  if (!req.file) {
    res.status(400).json({ error: 'File is required' })
    return
  }

  if (!bank_account_id) {
    res.status(400).json({ error: 'bank_account_id is required' })
    return
  }

  const filename = req.file.originalname.toLowerCase()
  const importType = filename.endsWith('.pdf') ? 'pdf' : filename.endsWith('.csv') ? 'csv' : null

  if (!importType) {
    res.status(400).json({ error: 'Only PDF and CSV files are supported' })
    return
  }

  try {
    const accountCheck = await query(
      'SELECT id FROM bank_accounts WHERE id = $1 AND user_id = $2',
      [bank_account_id, userId]
    )
    if (accountCheck.rows.length === 0) {
      res.status(404).json({ error: 'Bank account not found' })
      return
    }

    const fileHash = createHash('sha256').update(req.file.buffer).digest('hex')

    const dupCheck = await query(
      'SELECT id FROM imports WHERE file_hash = $1 AND user_id = $2',
      [fileHash, userId]
    )
    if (dupCheck.rows.length > 0) {
      res.status(409).json({ error: 'This file has already been imported' })
      return
    }

    const parseResult = importType === 'csv'
      ? parseCSV(req.file.buffer.toString('utf-8'))
      : await parsePDF(req.file.buffer)

    if (parseResult.transactions.length === 0) {
      res.status(422).json({ error: 'No transactions found in file', parse_errors: parseResult.errors })
      return
    }

    const importRow = await withTransaction(async (client) => {
      const importRecord = await client.query(
        `INSERT INTO imports (user_id, bank_account_id, filename, file_hash, import_type, transaction_count)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [userId, bank_account_id, req.file!.originalname, fileHash, importType, parseResult.transactions.length]
      )
      const importId = importRecord.rows[0].id

      for (let offset = 0; offset < parseResult.transactions.length; offset += INSERT_CHUNK_SIZE) {
        const chunk = parseResult.transactions.slice(offset, offset + INSERT_CHUNK_SIZE)
        const { text, values } = buildTransactionsInsert(userId, bank_account_id, importId, chunk)
        await client.query(text, values)
      }

      return importRecord.rows[0]
    })

    res.status(201).json({
      import: importRow,
      transactions_imported: parseResult.transactions.length,
      parse_errors: parseResult.errors,
    })
  } catch (err) {
    console.error('Import error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

function buildTransactionsInsert(
  userId: string,
  bankAccountId: string,
  importId: string,
  chunk: ParsedTransaction[]
): { text: string; values: unknown[] } {
  const values: unknown[] = []
  const placeholders: string[] = []

  chunk.forEach((tx, i) => {
    const base = i * 8
    placeholders.push(
      `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8})`
    )
    values.push(userId, bankAccountId, importId, tx.amount, tx.date, tx.name, tx.merchant_name, tx.category)
  })

  return {
    text: `INSERT INTO transactions (user_id, bank_account_id, import_id, amount, date, name, merchant_name, category)
           VALUES ${placeholders.join(', ')}`,
    values,
  }
}

export default router
