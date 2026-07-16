import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth'
import bankAccountsRouter from './routes/bank-accounts'

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
