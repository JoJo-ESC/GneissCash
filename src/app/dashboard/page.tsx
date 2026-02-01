'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getDashboardData, DashboardData } from '@/lib/dashboard'
import { formatCurrency } from '@/lib/calculations'
import ImportButton from '@/components/ImportButton'
import RecentTransactions from '@/components/RecentTransactions'
import AllowanceTracker from '@/components/AllowanceTracker'
import SpendingChart from '@/components/SpendingChart'
import GoalProgress from '@/components/GoalProgress'
import TransactionList from '@/components/TransactionList'
import styles from './dashboard.module.css'

interface BankAccount {
  id: string
  name: string
  type: string
  current_balance: number | null
}

interface Import {
  id: string
  filename: string
  import_type: string
  transaction_count: number
  created_at: string
  bank_accounts: {
    id: string
    name: string
  }
}

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([])
  const [imports, setImports] = useState<Import[]>([])
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [showAddAccount, setShowAddAccount] = useState(false)
  const [newAccountName, setNewAccountName] = useState('')
  const [newAccountType, setNewAccountType] = useState<'checking' | 'savings' | 'credit'>('checking')
  const [addingAccount, setAddingAccount] = useState(false)
  const [transactionsKey, setTransactionsKey] = useState(0)

  const supabase = createClient()

  async function loadDashboardData() {
    try {
      const data = await getDashboardData(supabase)
      setDashboardData(data)
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    }
  }

  async function loadBankAccounts() {
    const { data, error } = await supabase
      .from('bank_accounts')
      .select('id, name, type, current_balance')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setBankAccounts(data)
    }
  }

  async function loadImports() {
    const { data, error } = await supabase
      .from('imports')
      .select(`
        id,
        filename,
        import_type,
        transaction_count,
        created_at,
        bank_accounts (
          id,
          name
        )
      `)
      .order('created_at', { ascending: false })
      .limit(10)

    if (!error && data) {
      setImports(data as unknown as Import[])
    }
  }

  useEffect(() => {
    async function checkAuthAndLoadData() {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      await Promise.all([loadBankAccounts(), loadImports(), loadDashboardData()])
      setLoading(false)
    }

    checkAuthAndLoadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleAddAccount(e: React.FormEvent) {
    e.preventDefault()
    if (!newAccountName.trim()) return

    setAddingAccount(true)

    const { error } = await supabase
      .from('bank_accounts')
      .insert({
        name: newAccountName.trim(),
        type: newAccountType,
      })

    if (!error) {
      setNewAccountName('')
      setShowAddAccount(false)
      await loadBankAccounts()
    }

    setAddingAccount(false)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  function handleImportComplete() {
    loadImports()
    loadDashboardData() // Refresh allowance data
    setTransactionsKey(prev => prev + 1) // Refresh transactions
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.loading}>Loading...</div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>GC</span>
        <div className={styles.headerActions}>
          <Link href="/dashboard/settings" className={styles.settingsLink}>
            Settings
          </Link>
          <button onClick={handleSignOut} className={styles.signOutButton}>
            Sign Out
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Dashboard</h1>

          {/* Settings Warning */}
          {dashboardData && !dashboardData.hasSettings && (
            <div className={styles.warningBanner}>
              <span className={styles.warningIcon}>!</span>
              <span className={styles.warningText}>
                Set up your income and savings goal to track your weekly allowance.
              </span>
              <Link href="/dashboard/settings" className={styles.warningLink}>
                Configure Settings
              </Link>
            </div>
          )}

          {/* Allowance & Stats Row */}
          {dashboardData && (
            <div className={styles.statsRow}>
              <AllowanceTracker
                spent={dashboardData.totalSpent}
                allowance={dashboardData.weeklyAllowance}
                remaining={dashboardData.remainingAllowance}
              />

              {/* Grade Card */}
              <div className={styles.gradeCard}>
                <div
                  className={styles.gradeCircle}
                  style={{ backgroundColor: dashboardData.grade.color }}
                >
                  <span className={styles.gradeLetter}>{dashboardData.grade.grade}</span>
                </div>
                <div className={styles.gradeInfo}>
                  <span className={styles.gradeLabel}>Weekly Grade</span>
                  <span className={styles.gradeMessage}>{dashboardData.grade.message}</span>
                </div>
              </div>

              {/* Pulse Status Card */}
              <div className={styles.pulseCard}>
                <span className={styles.pulseEmoji}>{dashboardData.pulseStatus.emoji}</span>
                <div className={styles.pulseInfo}>
                  <span className={styles.pulseLabel}>Spending Pace</span>
                  <span
                    className={styles.pulseMessage}
                    style={{ color: dashboardData.pulseStatus.color }}
                  >
                    {dashboardData.pulseStatus.message}
                  </span>
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className={styles.quickStatsCard}>
                <div className={styles.quickStat}>
                  <span className={styles.quickStatLabel}>This Week</span>
                  <span className={styles.quickStatValue}>
                    {formatCurrency(dashboardData.totalSpent)} spent
                  </span>
                </div>
                <div className={styles.quickStat}>
                  <span className={styles.quickStatLabel}>Daily Budget</span>
                  <span className={styles.quickStatValue}>
                    {formatCurrency(dashboardData.dailyAllowance)}/day
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className={styles.layout}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              {/* Import Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Import Transactions</h2>

                {bankAccounts.length === 0 ? (
                  <div className={styles.emptyState}>
                    <p>Add a bank account first to start importing.</p>
                  </div>
                ) : (
                  <ImportButton
                    bankAccounts={bankAccounts}
                    onImportComplete={handleImportComplete}
                  />
                )}
              </section>

              <div className={styles.grid}>
                {/* Bank Accounts Section */}
                <section className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Bank Accounts</h2>
                    <button
                      onClick={() => setShowAddAccount(!showAddAccount)}
                      className={styles.addButton}
                    >
                      {showAddAccount ? 'Cancel' : '+ Add'}
                    </button>
                  </div>

                  {showAddAccount && (
                    <form onSubmit={handleAddAccount} className={styles.addAccountForm}>
                      <input
                        type="text"
                        placeholder="Account name (e.g., Chase Checking)"
                        value={newAccountName}
                        onChange={(e) => setNewAccountName(e.target.value)}
                        className={styles.input}
                        disabled={addingAccount}
                      />
                      <select
                        value={newAccountType}
                        onChange={(e) => setNewAccountType(e.target.value as 'checking' | 'savings' | 'credit')}
                        className={styles.select}
                        disabled={addingAccount}
                      >
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                        <option value="credit">Credit Card</option>
                      </select>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={addingAccount || !newAccountName.trim()}
                      >
                        {addingAccount ? 'Adding...' : 'Add Account'}
                      </button>
                    </form>
                  )}

                  {bankAccounts.length === 0 ? (
                    <div className={styles.emptyState}>
                      <p>No accounts yet. Add one to get started.</p>
                    </div>
                  ) : (
                    <ul className={styles.accountList}>
                      {bankAccounts.map((account) => (
                        <li key={account.id} className={styles.accountItem}>
                          <div className={styles.accountInfo}>
                            <span className={styles.accountName}>{account.name}</span>
                            <span className={styles.accountType}>{account.type}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>

                {/* Recent Imports Section */}
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Recent Imports</h2>

                  {imports.length === 0 ? (
                    <div className={styles.emptyState}>
                      <p>No imports yet.</p>
                    </div>
                  ) : (
                    <ul className={styles.importList}>
                      {imports.map((imp) => (
                        <li key={imp.id} className={styles.importItem}>
                          <div className={styles.importInfo}>
                            <span className={styles.importFilename}>{imp.filename}</span>
                            <span className={styles.importMeta}>
                              {imp.transaction_count} transactions
                              {imp.bank_accounts && ` to ${imp.bank_accounts.name}`}
                            </span>
                          </div>
                          <span className={styles.importDate}>
                            {new Date(imp.created_at).toLocaleDateString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </div>

              {/* Full Transaction List */}
              <TransactionList
                bankAccounts={bankAccounts}
                onTransactionDeleted={() => {
                  loadDashboardData()
                  setTransactionsKey(prev => prev + 1)
                }}
              />
            </div>

            {/* Right Column - Charts & Transactions */}
            <div className={styles.rightColumn}>
              {dashboardData && (
                <>
                  <GoalProgress
                    goalAmount={dashboardData.settings?.savings_goal ?? null}
                    currentSaved={dashboardData.settings?.current_saved ?? null}
                    deadline={dashboardData.settings?.goal_deadline ?? null}
                  />
                  <SpendingChart
                    data={dashboardData.spendingByCategory}
                    totalSpent={dashboardData.totalSpent}
                  />
                </>
              )}
              <RecentTransactions key={transactionsKey} limit={15} />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>♥</span> by Josiah
      </footer>
    </div>
  )
}
