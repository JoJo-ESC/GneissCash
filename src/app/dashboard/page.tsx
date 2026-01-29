'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import ImportButton from '@/components/ImportButton'
import RecentTransactions from '@/components/RecentTransactions'
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
  const [showAddAccount, setShowAddAccount] = useState(false)
  const [newAccountName, setNewAccountName] = useState('')
  const [newAccountType, setNewAccountType] = useState<'checking' | 'savings' | 'credit'>('checking')
  const [addingAccount, setAddingAccount] = useState(false)
  const [transactionsKey, setTransactionsKey] = useState(0)

  const supabase = createClient()

  useEffect(() => {
    checkAuthAndLoadData()
  }, [])

  async function checkAuthAndLoadData() {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/login')
      return
    }

    await Promise.all([loadBankAccounts(), loadImports()])
    setLoading(false)
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
      setImports(data as Import[])
    }
  }

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
        <button onClick={handleSignOut} className={styles.signOutButton}>
          Sign Out
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Dashboard</h1>

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
            </div>

            {/* Right Column - Transactions */}
            <div className={styles.rightColumn}>
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
