'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@/lib/supabase/client'
import { formatCurrency } from '@/lib/calculations'
import styles from '../dashboard.module.css'
import pageStyles from './transactions.module.css'

interface UserProfile {
  displayName: string | null
  avatarUrl: string | null
  fallbackName: string | null
}

interface ApiTransaction {
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

interface Transaction extends ApiTransaction {
  categoryKey: string
  categoryLabel: string
}

interface CategoryOption {
  key: string
  label: string
  count: number
}

const DEFAULT_PROFILE: UserProfile = {
  displayName: null,
  avatarUrl: null,
  fallbackName: null,
}

const ALL_KEY = '__all__'

function getStoredProfile(): UserProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE
  try {
    const stored = window.localStorage.getItem('gneisscash.userProfile')
    if (!stored) return DEFAULT_PROFILE
    const parsed = JSON.parse(stored) as Partial<UserProfile>
    return { ...DEFAULT_PROFILE, ...parsed }
  } catch {
    return DEFAULT_PROFILE
  }
}

function normalizeCategory(raw: string | null): { key: string; label: string } {
  if (!raw) {
    return { key: 'uncategorized', label: 'Uncategorized' }
  }

  const cleaned = raw.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!cleaned) {
    return { key: 'uncategorized', label: 'Uncategorized' }
  }

  const words = cleaned.split(' ').map((word) => {
    if (word.length === 0) return ''
    if (word === '&') return word
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  })

  return {
    key: cleaned.toLowerCase(),
    label: words.join(' '),
  }
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default function TransactionsPage() {
  const router = useRouter()
  const supabase = createClient()

  const [authLoading, setAuthLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<UserProfile>(getStoredProfile)

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loadingTransactions, setLoadingTransactions] = useState(true)
  const [transactionsError, setTransactionsError] = useState<string | null>(null)

  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set([ALL_KEY]))

  const allSelected = selectedCategories.has(ALL_KEY)
  const filtersActive = !allSelected && selectedCategories.size > 0

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('gneisscash.userProfile', JSON.stringify(userProfile))
    }
  }, [userProfile])

  const loadTransactions = useCallback(async () => {
    try {
      setLoadingTransactions(true)
      setTransactionsError(null)

      const params = new URLSearchParams()
      params.set('limit', '200')
      params.set('sort', 'desc')

      const response = await fetch(`/api/transactions?${params.toString()}`)
      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Failed to load transactions')
      }

      const mapped: Transaction[] = (payload.transactions as ApiTransaction[] | undefined)?.map((tx) => {
        const { key, label } = normalizeCategory(tx.category)
        return {
          ...tx,
          categoryKey: key,
          categoryLabel: label,
        }
      }) ?? []

      setTransactions(mapped)
    } catch (error) {
      console.error('Failed to load transactions', error)
      setTransactionsError(error instanceof Error ? error.message : 'Failed to load transactions')
    } finally {
      setLoadingTransactions(false)
    }
  }, [])

  async function loadUserSettings(userId: string) {
    const { data, error } = await supabase
      .from('user_settings')
      .select('display_name, avatar_url')
      .eq('user_id', userId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Failed to load user settings:', error)
      return
    }

    if (data) {
      setUserProfile((prev) => ({
        displayName: data.display_name ?? prev.displayName,
        avatarUrl: data.avatar_url ?? prev.avatarUrl,
        fallbackName: prev.fallbackName,
      }))
    }
  }

  useEffect(() => {
    async function checkAuthAndLoad() {
      try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          router.push('/login')
          return
        }

        const emailName = user.email ? user.email.split('@')[0] : null
        setUserProfile((prev) => ({
          ...prev,
          fallbackName: prev.fallbackName ?? user.user_metadata?.full_name ?? emailName ?? prev.fallbackName,
        }))

        await Promise.all([
          loadUserSettings(user.id),
          loadTransactions(),
        ])
      } catch (error) {
        console.error('Failed to initialize transactions page', error)
      } finally {
        setAuthLoading(false)
      }
    }

    checkAuthAndLoad()
  }, [loadTransactions, router, supabase])

  const categoryOptions: CategoryOption[] = useMemo(() => {
    const counts = new Map<string, CategoryOption>()

    transactions.forEach((tx) => {
      const existing = counts.get(tx.categoryKey)
      if (existing) {
        existing.count += 1
      } else {
        counts.set(tx.categoryKey, {
          key: tx.categoryKey,
          label: tx.categoryLabel,
          count: 1,
        })
      }
    })

    return Array.from(counts.values()).sort((a, b) => {
      if (b.count === a.count) {
        return a.label.localeCompare(b.label)
      }
      return b.count - a.count
    })
  }, [transactions])

  const visibleTransactions = useMemo(() => {
    if (allSelected || selectedCategories.size === 0) {
      return transactions
    }
    return transactions.filter((tx) => selectedCategories.has(tx.categoryKey))
  }, [allSelected, selectedCategories, transactions])

  const visibleCount = visibleTransactions.length
  const totalCount = transactions.length

  const handleToggleCategory = (categoryKey: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev)

      if (categoryKey === ALL_KEY) {
        if (next.has(ALL_KEY)) {
          next.delete(ALL_KEY)
        } else {
          return new Set([ALL_KEY])
        }
      } else {
        next.delete(ALL_KEY)
        if (next.has(categoryKey)) {
          next.delete(categoryKey)
        } else {
          next.add(categoryKey)
        }
      }

      return next
    })
  }

  const handleSelectAll = () => {
    setSelectedCategories(new Set([ALL_KEY]))
  }

  const selectionEmpty = !allSelected && selectedCategories.size === 0

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (authLoading) {
    return (
      <div className={styles.page}>
        <Sidebar onSignOut={handleSignOut} userProfile={userProfile} />
        <main className={styles.main}>
          <div className={styles.loading}>Loading…</div>
        </main>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Sidebar onSignOut={handleSignOut} userProfile={userProfile} />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.pageHeader}>
            <h1 className={styles.title}>Transactions</h1>
            <p className={styles.subtitle}>Review your recent activity and focus on what matters.</p>
          </div>

          <div className={pageStyles.layout}>
            <aside className={pageStyles.filtersPanel}>
              <div className={pageStyles.filterHeader}>
                <span className={pageStyles.filterTitle}>Filter</span>
                <span className={pageStyles.filterSubtitle}>{totalCount} total</span>
              </div>

              <div className={pageStyles.filterList}>
                <label
                  className={`${pageStyles.filterOption} ${allSelected ? '' : pageStyles.filterOptionDisabled}`.trim()}
                >
                  <span className={pageStyles.filterOptionLeft}>
                    <input
                      type="checkbox"
                      className={pageStyles.checkbox}
                      checked={allSelected}
                      onChange={() => handleToggleCategory(ALL_KEY)}
                    />
                    <span className={pageStyles.categoryLabel}>All</span>
                  </span>
                  <span className={pageStyles.countBadge}>{totalCount}</span>
                </label>

                {categoryOptions.map((option) => {
                  const checked = selectedCategories.has(option.key)
                  return (
                    <label
                      key={option.key}
                      className={`${pageStyles.filterOption} ${allSelected ? pageStyles.filterOptionDisabled : ''}`.trim()}
                    >
                      <span className={pageStyles.filterOptionLeft}>
                        <input
                          type="checkbox"
                          className={pageStyles.checkbox}
                          checked={checked}
                          disabled={allSelected}
                          onChange={() => handleToggleCategory(option.key)}
                        />
                        <span className={pageStyles.categoryLabel}>{option.label}</span>
                      </span>
                      <span className={pageStyles.countBadge}>{option.count}</span>
                    </label>
                  )
                })}
              </div>

              <div className={pageStyles.filterActions}>
                <button type="button" className={pageStyles.clearButton} onClick={handleSelectAll}>
                  Reset filters
                </button>
              </div>

              {selectionEmpty && (
                <div className={pageStyles.selectionHint}>
                  Select at least one category to see matching transactions.
                </div>
              )}
            </aside>

            <section className={pageStyles.listCard}>
              <div className={pageStyles.listHeader}>
                <div className={pageStyles.listHeading}>
                  <h2 className={pageStyles.listTitle}>Transaction history</h2>
                  <span className={pageStyles.listSubtitle}>
                    {filtersActive ? `Showing ${visibleCount} of ${totalCount}` : `Showing latest ${visibleCount}`}
                  </span>
                </div>
                <button type="button" className={pageStyles.refreshButton} onClick={loadTransactions}>
                  Refresh
                </button>
              </div>

              {loadingTransactions ? (
                <div className={pageStyles.listMessage}>Loading transactions…</div>
              ) : transactionsError ? (
                <div className={pageStyles.listError}>
                  <span>{transactionsError}</span>
                  <button type="button" className={pageStyles.retryButton} onClick={loadTransactions}>
                    Try again
                  </button>
                </div>
              ) : visibleTransactions.length === 0 ? (
                <div className={pageStyles.listMessage}>
                  {selectionEmpty
                    ? 'Choose one or more categories to display matching transactions.'
                    : 'No transactions found for the selected filters.'}
                </div>
              ) : (
                <ul className={pageStyles.txList}>
                  {visibleTransactions.map((tx) => {
                    const displayName = tx.merchant_name || tx.name || 'Unnamed transaction'
                    const displayAmount = tx.amount >= 0
                      ? `+${formatCurrency(tx.amount)}`
                      : formatCurrency(tx.amount)
                    const amountClass = tx.amount >= 0 ? pageStyles.amountIncome : pageStyles.amountExpense
                    return (
                      <li key={tx.id} className={pageStyles.txItem}>
                        <div className={pageStyles.txMain}>
                          <div className={pageStyles.txMeta}>
                            <span className={pageStyles.txMerchant}>{displayName}</span>
                            <div className={pageStyles.txDetails}>
                              <span className={pageStyles.categoryChip}>{tx.categoryLabel}</span>
                              {tx.bank_accounts?.name && (
                                <span className={pageStyles.accountLabel}>{tx.bank_accounts.name}</span>
                              )}
                              <span className={pageStyles.dateLabel}>{formatDate(tx.date)}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`${pageStyles.txAmount} ${amountClass}`}>{displayAmount}</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
