import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { addDays, addMonths, format, getDaysInMonth, setDate, startOfMonth } from 'date-fns'
import { Pool } from 'pg'
import { withTransaction } from '../db'
import { categorizeByMerchant } from '../lib/parsers/categorize'
import { calculateWeeklyAllowance, calculateGrade, getWeekBounds } from '../lib/calculations'
import { DEMO_USER_ID, DEMO_EMAIL } from '../lib/demoUser'

dotenv.config()

const DEMO_PASSWORD = 'GneissDemo123'
const INSERT_CHUNK_SIZE = 500
const HISTORY_DAYS = 365
const WEEKLY_SUMMARY_WEEKS = 12

// Deterministic PRNG (mulberry32) so re-running the seed produces the same
// data every time — makes demo screenshots and QA reproducible.
function mulberry32(seed: number) {
  return function random() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rand = mulberry32(42)
const pick = <T,>(arr: T[]): T => arr[Math.floor(rand() * arr.length)]
const jitter = (base: number, pct: number) => Math.round(base * (1 + (rand() * 2 - 1) * pct) * 100) / 100

type Account = 'checking' | 'savings' | 'credit'

interface SeedTx {
  account: Account
  date: Date
  amount: number
  merchant: string
}

const VARIABLE_SPEND: Record<Account, [string, number][]> = {
  checking: [
    ['Starbucks', 6], ['Chipotle Mexican Grill', 11], ['Whole Foods Market', 68],
    ["Trader Joe's", 52], ['Chick-fil-A', 9], ['Panera Bread', 13], ['Five Guys Burgers', 14],
    ['Shell Gas Station', 42], ['Chevron', 38], ['Uber', 15], ['CVS Pharmacy', 18], ['Walgreens', 15],
  ],
  credit: [
    ['Amazon', 42], ['Target', 55], ['Best Buy', 120], ['Old Navy', 38], ['Nike', 85],
    ['AMC Theatres', 16], ['Steam', 25], ['DoorDash', 28],
  ],
  savings: [],
}

const RARE_SPEND: [Account, string, number][] = [
  ['credit', 'Delta Air Lines', 310],
  ['credit', 'Marriott Hotels', 220],
  ['checking', "O'Reilly Auto Parts", 95],
]

interface MonthlyBill {
  account: Account
  day: number
  merchant: string
  amount: number
}

const MONTHLY_BILLS: MonthlyBill[] = [
  { account: 'checking', day: 1, merchant: 'Parkview Apartments', amount: -1450 },
  { account: 'checking', day: 3, merchant: 'City Power & Light', amount: -95 },
  { account: 'checking', day: 5, merchant: 'Comcast', amount: -70 },
  { account: 'checking', day: 7, merchant: 'Verizon Wireless', amount: -95 },
  { account: 'checking', day: 10, merchant: 'Geico Auto Insurance', amount: -130 },
  { account: 'checking', day: 18, merchant: 'Planet Fitness', amount: -24.99 },
  { account: 'credit', day: 12, merchant: 'Netflix', amount: -15.99 },
  { account: 'credit', day: 12, merchant: 'Spotify', amount: -11.99 },
  { account: 'credit', day: 15, merchant: 'Amazon Prime', amount: -14.99 },
]

function buildTransactions(startDate: Date, today: Date): SeedTx[] {
  const txs: SeedTx[] = []

  // Biweekly payroll into checking.
  for (let d = addDays(startDate, 3); d <= today; d = addDays(d, 14)) {
    txs.push({ account: 'checking', date: d, amount: jitter(2750, 0.02), merchant: 'Acme Corporation Payroll' })
  }

  // Monthly recurring bills + savings auto-transfer + credit card payment.
  let monthCursor = startOfMonth(startDate)
  while (monthCursor <= today) {
    for (const bill of MONTHLY_BILLS) {
      const day = Math.min(bill.day, getDaysInMonth(monthCursor))
      const date = setDate(monthCursor, day)
      if (date >= startDate && date <= today) {
        txs.push({ account: bill.account, date, amount: jitter(bill.amount, 0.05), merchant: bill.merchant })
      }
    }

    // Split the monthly savings transfer into 4 weekly chunks instead of one
    // lump sum — weekly-summary.ts sums all negative amounts with no
    // exclusion for Transfer-category rows, so a single $2900 transfer
    // landing in one ISO week was blowing that week's grade to an F and
    // drowning out every other category in spend-mix's flex breakdown.
    for (let w = 0; w < 4; w++) {
      const transferDay = addDays(setDate(monthCursor, Math.min(2, getDaysInMonth(monthCursor))), w * 7)
      if (transferDay >= startDate && transferDay <= today) {
        txs.push({ account: 'checking', date: transferDay, amount: -725, merchant: 'Transfer to Savings' })
        txs.push({ account: 'savings', date: transferDay, amount: 725, merchant: 'Transfer from Checking' })
      }
    }

    const paymentDay = setDate(monthCursor, Math.min(20, getDaysInMonth(monthCursor)))
    if (paymentDay >= startDate && paymentDay <= today) {
      txs.push({ account: 'checking', date: paymentDay, amount: -450, merchant: 'Credit Card Payment' })
      txs.push({ account: 'credit', date: paymentDay, amount: 450, merchant: 'Payment Received' })
    }

    const interestDay = setDate(monthCursor, Math.min(28, getDaysInMonth(monthCursor)))
    if (interestDay >= startDate && interestDay <= today) {
      txs.push({ account: 'savings', date: interestDay, amount: jitter(3.5, 0.3), merchant: 'Interest Payment' })
    }

    monthCursor = addMonths(monthCursor, 1)
  }

  // Day-by-day variable discretionary spending.
  for (let d = startDate; d <= today; d = addDays(d, 1)) {
    const count = rand() < 0.55 ? (rand() < 0.75 ? 1 : 2) : 0
    for (let i = 0; i < count; i++) {
      const account: Account = rand() < 0.65 ? 'checking' : 'credit'
      const pool = VARIABLE_SPEND[account]
      const [merchant, base] = pick(pool)
      txs.push({ account, date: d, amount: -jitter(base, 0.3), merchant })
    }
    if (rand() < 0.015) {
      const [account, merchant, base] = pick(RARE_SPEND)
      txs.push({ account, date: d, amount: -jitter(base, 0.15), merchant })
    }
  }

  return txs.sort((a, b) => a.date.getTime() - b.date.getTime())
}

function buildTransactionsInsert(
  userId: string,
  accountIds: Record<Account, string>,
  chunk: SeedTx[]
): { text: string; values: unknown[] } {
  const values: unknown[] = []
  const placeholders: string[] = []

  chunk.forEach((tx, i) => {
    const base = i * 7
    placeholders.push(
      `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7})`
    )
    const category = categorizeByMerchant(tx.merchant, tx.amount)
    values.push(userId, accountIds[tx.account], tx.amount, format(tx.date, 'yyyy-MM-dd'), tx.merchant, tx.merchant, category)
  })

  return {
    text: `INSERT INTO transactions (user_id, bank_account_id, amount, date, name, merchant_name, category)
           VALUES ${placeholders.join(', ')}`,
    values,
  }
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })

  const existing = await pool.query('SELECT id FROM users WHERE id = $1 OR email = $2', [DEMO_USER_ID, DEMO_EMAIL])
  if (existing.rows.length > 0) {
    console.log('Removing existing demo user and cascaded data...')
    await pool.query('DELETE FROM users WHERE id = $1 OR email = $2', [DEMO_USER_ID, DEMO_EMAIL])
  }

  const passwordHash = await bcrypt.hash(DEMO_PASSWORD, 12)
  const userResult = await pool.query(
    'INSERT INTO users (id, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
    [DEMO_USER_ID, DEMO_EMAIL, passwordHash]
  )
  const userId: string = userResult.rows[0].id
  console.log(`Created demo user ${DEMO_EMAIL} (${userId})`)

  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const startDate = addDays(todayMidnight, -HISTORY_DAYS)

  const accountIds: Record<Account, string> = { checking: '', savings: '', credit: '' }
  const accountDefs: { key: Account; name: string; type: Account; startBalance: number }[] = [
    { key: 'checking', name: 'Everyday Checking', type: 'checking', startBalance: 2500 },
    { key: 'savings', name: 'Emergency Fund Savings', type: 'savings', startBalance: 1800 },
    { key: 'credit', name: 'Rewards Credit Card', type: 'credit', startBalance: 0 },
  ]

  for (const def of accountDefs) {
    const result = await pool.query(
      `INSERT INTO bank_accounts (user_id, name, type, current_balance) VALUES ($1, $2, $3, $4) RETURNING id`,
      [userId, def.name, def.type, def.startBalance]
    )
    accountIds[def.key] = result.rows[0].id
  }

  const transactions = buildTransactions(startDate, todayMidnight)
  console.log(`Generated ${transactions.length} transactions, inserting...`)

  await withTransaction(async (client) => {
    for (let offset = 0; offset < transactions.length; offset += INSERT_CHUNK_SIZE) {
      const chunk = transactions.slice(offset, offset + INSERT_CHUNK_SIZE)
      const { text, values } = buildTransactionsInsert(userId, accountIds, chunk)
      await client.query(text, values)
    }
  })

  const balances: Record<Account, number> = {
    checking: accountDefs[0].startBalance,
    savings: accountDefs[1].startBalance,
    credit: accountDefs[2].startBalance,
  }
  for (const tx of transactions) balances[tx.account] += tx.amount
  for (const def of accountDefs) {
    await pool.query('UPDATE bank_accounts SET current_balance = $1 WHERE id = $2', [
      Math.round(balances[def.key] * 100) / 100,
      accountIds[def.key],
    ])
  }

  // Derive the savings goal from the actual seeded savings balance so the
  // Goals page and Accounts page agree with each other instead of a
  // hardcoded number drifting out of sync with generated transaction totals.
  const savingsBalance = Math.round(balances.savings * 100) / 100
  const emergencyGoalAmount = Math.max(10000, Math.ceil((savingsBalance * 1.15) / 500) * 500)
  const emergencyCurrentAmount = savingsBalance

  const goalDeadline = addMonths(todayMidnight, 10)
  await pool.query(
    `INSERT INTO user_settings (user_id, monthly_income, savings_goal, goal_deadline, current_saved, display_name)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [userId, 5500, emergencyGoalAmount, format(goalDeadline, 'yyyy-MM-dd'), emergencyCurrentAmount, 'Taylor Reed']
  )

  await pool.query(
    `INSERT INTO goals (user_id, name, goal_amount, current_amount) VALUES
       ($1, 'Emergency Fund', $2, $3),
       ($1, 'Hawaii Trip', 3500, 1150)`,
    [userId, emergencyGoalAmount, emergencyCurrentAmount]
  )
  console.log('Seeded user settings and goals.')

  console.log(`Generating ${WEEKLY_SUMMARY_WEEKS} weeks of weekly summaries...`)
  for (let i = WEEKLY_SUMMARY_WEEKS - 1; i >= 0; i--) {
    const weekAnchor = addDays(todayMidnight, -7 * i)
    const { start: weekStart, end: weekEnd } = getWeekBounds(weekAnchor)
    const startStr = format(weekStart, 'yyyy-MM-dd')
    const endStr = format(weekEnd, 'yyyy-MM-dd')

    const weekTxs = transactions.filter((tx) => tx.date >= weekStart && tx.date <= weekEnd)
    const totalSpent = weekTxs.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + Math.abs(tx.amount), 0)
    const totalIncome = weekTxs.filter((tx) => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0)
    const biggest = weekTxs.filter((tx) => tx.amount < 0).sort((a, b) => a.amount - b.amount)[0]

    const allowance = calculateWeeklyAllowance({
      monthlyIncome: 5500,
      goalAmount: emergencyGoalAmount,
      deadline: goalDeadline,
      currentSaved: emergencyCurrentAmount,
    })
    const grade = calculateGrade(totalSpent, allowance).grade

    await pool.query(
      `INSERT INTO weekly_summaries
         (user_id, week_start, week_end, total_spent, total_income, biggest_purchase_name, biggest_purchase_amount, grade)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        userId, startStr, endStr,
        Math.round(totalSpent * 100) / 100,
        Math.round(totalIncome * 100) / 100,
        biggest?.merchant ?? null,
        biggest ? Math.round(Math.abs(biggest.amount) * 100) / 100 : null,
        grade,
      ]
    )
  }

  console.log(`\nDone. Demo login: ${DEMO_EMAIL} / ${DEMO_PASSWORD}`)
  await pool.end()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
