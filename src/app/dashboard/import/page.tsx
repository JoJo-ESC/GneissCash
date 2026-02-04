'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Sidebar from '@/components/Sidebar'
import ImportButton from '@/components/ImportButton'
import styles from './import.module.css'

interface UserProfile {
  displayName: string | null
  avatarUrl: string | null
  fallbackName: string | null
}

const DEFAULT_PROFILE: UserProfile = {
  displayName: null,
  avatarUrl: null,
  fallbackName: null,
}

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

interface BankAccount {
  id: string
  name: string
  type: string
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

export default function ImportPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<UserProfile>(getStoredProfile)
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([])
  const [imports, setImports] = useState<Import[]>([])
  const [showAddAccount, setShowAddAccount] = useState(false)
  const [newAccountName, setNewAccountName] = useState('')
  const [newAccountType, setNewAccountType] = useState<'checking' | 'savings' | 'credit'>('checking')
  const [addingAccount, setAddingAccount] = useState(false)

  const supabase = createClient()

  async function loadUserProfile() {
    try {
      const response = await fetch('/api/user-settings')
      if (!response.ok) return

      const data = await response.json()
      if (data.settings) {
        setUserProfile((prev) => ({
          displayName: data.settings.display_name ?? prev.displayName,
          avatarUrl: data.settings.avatar_url ?? prev.avatarUrl,
          fallbackName: prev.fallbackName,
        }))
      }
    } catch (error) {
      console.error('Failed to load user profile settings:', error)
    }
  }

  async function loadBankAccounts() {
    const { data, error } = await supabase
      .from('bank_accounts')
      .select('id, name, type')
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
      .limit(20)

    if (!error && data) {
      setImports(data as unknown as Import[])
    }
  }

  useEffect(() => {
    async function checkAuthAndLoad() {
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
      await Promise.all([loadBankAccounts(), loadImports(), loadUserProfile()])
      setLoading(false)
    }
    checkAuthAndLoad()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('gneisscash.userProfile', JSON.stringify(userProfile))
    }
  }, [userProfile])

  async function handleAddAccount(e: React.FormEvent) {
    e.preventDefault()
    if (!newAccountName.trim()) return

    setAddingAccount(true)
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setAddingAccount(false)
      return
    }

    const { error } = await supabase
      .from('bank_accounts')
      .insert({
        user_id: user.id,
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
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <Sidebar onSignOut={handleSignOut} userProfile={userProfile} />
        <main className={styles.main}>
          <div className={styles.loading}>Loading...</div>
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
            <h1 className={styles.title}>Import Transactions</h1>
            <p className={styles.subtitle}>Upload your bank statements to import transactions</p>
          </div>

          <div className={styles.layout}>
            {/* Import Section */}
            <section className={styles.importSection}>
              {bankAccounts.length === 0 ? (
                <div className={styles.noAccounts}>
                  <h3>Add a Bank Account First</h3>
                  <p>You need at least one bank account to import transactions.</p>
                </div>
              ) : (
                <ImportButton
                  bankAccounts={bankAccounts}
                  onImportComplete={handleImportComplete}
                />
              )}
            </section>

            <div className={styles.sidebar}>
              {/* Bank Accounts */}
              <section className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>Bank Accounts</h2>
                  <button
                    onClick={() => setShowAddAccount(!showAddAccount)}
                    className={styles.addButton}
                  >
                    {showAddAccount ? 'Cancel' : '+ Add'}
                  </button>
                </div>

                {showAddAccount && (
                  <form onSubmit={handleAddAccount} className={styles.addForm}>
                    <input
                      type="text"
                      placeholder="Account name"
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
                  <p className={styles.empty}>No accounts yet</p>
                ) : (
                  <ul className={styles.accountList}>
                    {bankAccounts.map((account) => (
                      <li key={account.id} className={styles.accountItem}>
                        <span className={styles.accountName}>{account.name}</span>
                        <span className={styles.accountType}>{account.type}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Recent Imports */}
              <section className={styles.card}>
                <h2 className={styles.cardTitle}>Import History</h2>

                {imports.length === 0 ? (
                  <p className={styles.empty}>No imports yet</p>
                ) : (
                  <ul className={styles.importList}>
                    {imports.map((imp) => (
                      <li key={imp.id} className={styles.importItem}>
                        <div className={styles.importInfo}>
                          <span className={styles.importFilename}>{imp.filename}</span>
                          <span className={styles.importMeta}>
                            {imp.transaction_count} transactions
                            {imp.bank_accounts && ` • ${imp.bank_accounts.name}`}
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
        </div>
      </main>
    </div>
  )
}
