'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { formatCurrency } from '@/lib/calculations'
import styles from './RecentTransactions.module.css'

interface Transaction {
  id: string
  amount: number
  date: string
  name: string | null
  merchant_name: string | null
  category: string | null
  bank_accounts: {
    id: string
    name: string
    type: string
  } | null
}

interface RecentTransactionsProps {
  limit?: number
  bankAccountId?: string
}

// Category icons/colors mapping
const categoryStyles: Record<string, { icon: string; color: string }> = {
  'Food & Drink': { icon: '🍔', color: '#f97316' },
  'Shopping': { icon: '🛍️', color: '#8b5cf6' },
  'Transportation': { icon: '🚗', color: '#3b82f6' },
  'Entertainment': { icon: '🎬', color: '#ec4899' },
  'Bills & Utilities': { icon: '💡', color: '#eab308' },
  'Health': { icon: '💊', color: '#22c55e' },
  'Travel': { icon: '✈️', color: '#06b6d4' },
  'Income': { icon: '💰', color: '#22c55e' },
  'Transfer': { icon: '↔️', color: '#6b7280' },
  'Other': { icon: '📦', color: '#6b7280' },
}

function getCategoryStyle(category: string | null) {
  if (!category) return categoryStyles['Other']
  return categoryStyles[category] || categoryStyles['Other']
}

export default function RecentTransactions({ limit = 10, bankAccountId }: RecentTransactionsProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  useEffect(() => {
    loadTransactions()
  }, [bankAccountId])

  async function loadTransactions() {
    setLoading(true)
    setError(null)

    try {
      let query = supabase
        .from('transactions')
        .select(`
          id,
          amount,
          date,
          name,
          merchant_name,
          category,
          bank_accounts (
            id,
            name,
            type
          )
        `)
        .order('date', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(limit)

      if (bankAccountId) {
        query = query.eq('bank_account_id', bankAccountId)
      }

      const { data, error: fetchError } = await query

      if (fetchError) {
        throw fetchError
      }

      setTransactions(data as Transaction[] || [])
    } catch (err) {
      console.error('Failed to load transactions:', err)
      setError('Failed to load transactions')
    } finally {
      setLoading(false)
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
  }

  function getDisplayName(tx: Transaction) {
    return tx.merchant_name || tx.name || 'Unknown'
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Transactions</h2>
        </div>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Transactions</h2>
        </div>
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={loadTransactions} className={styles.retryButton}>
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Recent Transactions</h2>
        {transactions.length > 0 && (
          <span className={styles.count}>{transactions.length}</span>
        )}
      </div>

      {transactions.length === 0 ? (
        <div className={styles.empty}>
          <p>No transactions yet</p>
          <p className={styles.emptyHint}>Import a CSV or PDF to get started</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {transactions.map((tx) => {
            const categoryStyle = getCategoryStyle(tx.category)
            const isIncome = tx.amount > 0

            return (
              <li key={tx.id} className={styles.item}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: `${categoryStyle.color}20` }}
                >
                  <span>{categoryStyle.icon}</span>
                </div>

                <div className={styles.details}>
                  <span className={styles.merchant}>
                    {getDisplayName(tx)}
                  </span>
                  <span className={styles.meta}>
                    {tx.category || 'Uncategorized'} • {formatDate(tx.date)}
                  </span>
                </div>

                <div className={styles.amountWrapper}>
                  <span className={`${styles.amount} ${isIncome ? styles.income : styles.expense}`}>
                    {isIncome ? '+' : ''}{formatCurrency(tx.amount)}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
