'use client'

import { useEffect, useState, useCallback } from 'react'
import { formatCurrency } from '@/lib/calculations'
import styles from './TransactionList.module.css'

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

interface BankAccount {
  id: string
  name: string
  type: string
}

interface TransactionListProps {
  bankAccounts: BankAccount[]
  onTransactionDeleted?: () => void
}

// Category options for filter
const CATEGORIES = [
  'Food & Drink',
  'Shopping',
  'Transportation',
  'Entertainment',
  'Bills & Utilities',
  'Health',
  'Travel',
  'Income',
  'Transfer',
  'Other',
]

export default function TransactionList({
  bankAccounts,
  onTransactionDeleted,
}: TransactionListProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAccount, setSelectedAccount] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc')

  // Pagination
  const [page, setPage] = useState(0)
  const limit = 20

  const loadTransactions = useCallback(async (resetPage = false) => {
    setLoading(true)
    setError(null)

    const currentPage = resetPage ? 0 : page
    if (resetPage) setPage(0)

    try {
      const params = new URLSearchParams()
      params.set('limit', limit.toString())
      params.set('offset', (currentPage * limit).toString())
      params.set('sort', sortOrder)

      if (selectedAccount) params.set('bank_account_id', selectedAccount)
      if (selectedCategory) params.set('category', selectedCategory)
      if (startDate) params.set('start_date', startDate)
      if (endDate) params.set('end_date', endDate)

      const response = await fetch(`/api/transactions?${params}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load transactions')
      }

      let filtered = data.transactions || []

      // Client-side search filter (API doesn't support text search)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        filtered = filtered.filter((t: Transaction) => {
          const merchant = (t.merchant_name || '').toLowerCase()
          const name = (t.name || '').toLowerCase()
          return merchant.includes(query) || name.includes(query)
        })
      }

      setTransactions(filtered)
      setTotal(data.total || 0)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load transactions')
    } finally {
      setLoading(false)
    }
  }, [page, sortOrder, selectedAccount, selectedCategory, startDate, endDate, searchQuery])

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  // Reset to first page when filters change
  useEffect(() => {
    setPage(0)
  }, [selectedAccount, selectedCategory, startDate, endDate, sortOrder])

  async function handleDelete(transactionId: string) {
    if (!confirm('Delete this transaction?')) return

    try {
      const response = await fetch(`/api/transactions?id=${transactionId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to delete')
      }

      // Refresh list
      loadTransactions()
      onTransactionDeleted?.()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete transaction')
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  function getDisplayName(tx: Transaction) {
    return tx.merchant_name || tx.name || 'Unknown'
  }

  function clearFilters() {
    setSearchQuery('')
    setSelectedAccount('')
    setSelectedCategory('')
    setStartDate('')
    setEndDate('')
    setSortOrder('desc')
  }

  const hasFilters = searchQuery || selectedAccount || selectedCategory || startDate || endDate

  const totalPages = Math.ceil(total / limit)
  const showPagination = totalPages > 1

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>All Transactions</h2>
        <span className={styles.count}>{total} total</span>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.searchRow}>
          <input
            type="text"
            placeholder="Search merchant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {hasFilters && (
            <button onClick={clearFilters} className={styles.clearButton}>
              Clear filters
            </button>
          )}
        </div>

        <div className={styles.filterRow}>
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Accounts</option>
            {bankAccounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'desc' | 'asc')}
            className={styles.filterSelect}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>

        <div className={styles.dateRow}>
          <div className={styles.dateInput}>
            <label className={styles.dateLabel}>From</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.dateField}
            />
          </div>
          <div className={styles.dateInput}>
            <label className={styles.dateLabel}>To</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={styles.dateField}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      {loading && transactions.length === 0 ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading transactions...</p>
        </div>
      ) : error ? (
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={() => loadTransactions()} className={styles.retryButton}>
            Retry
          </button>
        </div>
      ) : transactions.length === 0 ? (
        <div className={styles.empty}>
          <p>No transactions found</p>
          {hasFilters && (
            <p className={styles.emptyHint}>Try adjusting your filters</p>
          )}
        </div>
      ) : (
        <>
          <ul className={styles.list}>
            {transactions.map((tx) => {
              const isIncome = tx.amount > 0
              return (
                <li key={tx.id} className={styles.item}>
                  <div className={styles.itemMain}>
                    <div className={styles.itemInfo}>
                      <span className={styles.merchant}>{getDisplayName(tx)}</span>
                      <span className={styles.meta}>
                        {tx.category || 'Uncategorized'}
                        {tx.bank_accounts && ` • ${tx.bank_accounts.name}`}
                      </span>
                    </div>
                    <div className={styles.itemRight}>
                      <span className={`${styles.amount} ${isIncome ? styles.income : styles.expense}`}>
                        {isIncome ? '+' : ''}{formatCurrency(tx.amount)}
                      </span>
                      <span className={styles.date}>{formatDate(tx.date)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(tx.id)}
                    className={styles.deleteButton}
                    title="Delete transaction"
                  >
                    &times;
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Pagination */}
          {showPagination && (
            <div className={styles.pagination}>
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className={styles.pageButton}
              >
                Previous
              </button>
              <span className={styles.pageInfo}>
                Page {page + 1} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className={styles.pageButton}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
