import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth'
import bankAccountsRouter from './routes/bank-accounts'
import transactionsRouter from './routes/transactions'
import importRouter from './routes/import'
import goalsRouter from './routes/goals'
import userSettingsRouter from './routes/user-settings'
import cashFlowRouter from './routes/cash-flow'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/auth', authRouter)
app.use('/bank-accounts', bankAccountsRouter)
app.use('/transactions', transactionsRouter)
app.use('/import', importRouter)
app.use('/goals', goalsRouter)
app.use('/user-settings', userSettingsRouter)
app.use('/cash-flow', cashFlowRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
