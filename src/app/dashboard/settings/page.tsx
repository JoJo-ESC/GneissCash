'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import styles from './settings.module.css'

interface BankAccount {
  id: string
  name: string
  type: 'checking' | 'savings' | 'credit'
  current_balance: number | null
}

export default function SettingsPage() {
  const router = useRouter()
  const supabase = createClient()

  // Loading states
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Settings form
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [savingsGoal, setSavingsGoal] = useState('')
  const [goalDeadline, setGoalDeadline] = useState('')
  const [currentSaved, setCurrentSaved] = useState('')

  // Bank accounts
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([])
  const [editingAccount, setEditingAccount] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editType, setEditType] = useState<'checking' | 'savings' | 'credit'>('checking')

  // Messages
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function loadSettings() {
    try {
      const response = await fetch('/api/user-settings')
      const data = await response.json()

      if (data.settings) {
        setMonthlyIncome(data.settings.monthly_income?.toString() || '')
        setSavingsGoal(data.settings.savings_goal?.toString() || '')
        setGoalDeadline(data.settings.goal_deadline || '')
        setCurrentSaved(data.settings.current_saved?.toString() || '')
      }
    } catch (error) {
      console.error('Failed to load settings:', error)
    }
  }

  async function loadBankAccounts() {
    try {
      const response = await fetch('/api/bank-accounts')
      const data = await response.json()

      if (data.accounts) {
        setBankAccounts(data.accounts)
      }
    } catch (error) {
      console.error('Failed to load bank accounts:', error)
    }
  }

  useEffect(() => {
    async function checkAuthAndLoadData() {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      await Promise.all([loadSettings(), loadBankAccounts()])
      setLoading(false)
    }

    checkAuthAndLoadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSaveSettings(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch('/api/user-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monthly_income: monthlyIncome ? parseFloat(monthlyIncome) : null,
          savings_goal: savingsGoal ? parseFloat(savingsGoal) : null,
          goal_deadline: goalDeadline || null,
          current_saved: currentSaved ? parseFloat(currentSaved) : null,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to save settings')
      }

      setSuccessMessage('Settings saved successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  function startEditingAccount(account: BankAccount) {
    setEditingAccount(account.id)
    setEditName(account.name)
    setEditType(account.type)
  }

  function cancelEditing() {
    setEditingAccount(null)
    setEditName('')
    setEditType('checking')
  }

  async function handleUpdateAccount(accountId: string) {
    if (!editName.trim()) return

    try {
      const response = await fetch('/api/bank-accounts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: accountId,
          name: editName.trim(),
          type: editType,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to update account')
      }

      await loadBankAccounts()
      cancelEditing()
      setSuccessMessage('Account updated!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to update account')
    }
  }

  async function handleDeleteAccount(accountId: string, accountName: string) {
    if (!confirm(`Delete "${accountName}"? This cannot be undone.`)) return

    try {
      const response = await fetch(`/api/bank-accounts?id=${accountId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to delete account')
      }

      await loadBankAccounts()
      setSuccessMessage('Account deleted!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to delete account')
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
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
        <Link href="/dashboard" className={styles.backLink}>
          <span className={styles.backArrow}>&larr;</span>
          <span className={styles.logo}>GC</span>
        </Link>
        <button onClick={handleSignOut} className={styles.signOutButton}>
          Sign Out
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Settings</h1>

          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}

          <div className={styles.grid}>
            {/* Financial Settings */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Financial Goals</h2>
              <p className={styles.sectionDescription}>
                Configure your income and savings goals to track your weekly spending allowance.
              </p>

              <form onSubmit={handleSaveSettings} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="monthlyIncome" className={styles.label}>
                    Monthly Income
                  </label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.inputPrefix}>$</span>
                    <input
                      id="monthlyIncome"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      className={styles.inputWithPrefix}
                      disabled={saving}
                    />
                  </div>
                  <p className={styles.hint}>Your total monthly income after taxes</p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="savingsGoal" className={styles.label}>
                    Savings Goal
                  </label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.inputPrefix}>$</span>
                    <input
                      id="savingsGoal"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={savingsGoal}
                      onChange={(e) => setSavingsGoal(e.target.value)}
                      className={styles.inputWithPrefix}
                      disabled={saving}
                    />
                  </div>
                  <p className={styles.hint}>Total amount you want to save</p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="goalDeadline" className={styles.label}>
                    Goal Deadline
                  </label>
                  <input
                    id="goalDeadline"
                    type="date"
                    value={goalDeadline}
                    onChange={(e) => setGoalDeadline(e.target.value)}
                    className={styles.input}
                    disabled={saving}
                  />
                  <p className={styles.hint}>When you want to reach your goal</p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="currentSaved" className={styles.label}>
                    Already Saved
                  </label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.inputPrefix}>$</span>
                    <input
                      id="currentSaved"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={currentSaved}
                      onChange={(e) => setCurrentSaved(e.target.value)}
                      className={styles.inputWithPrefix}
                      disabled={saving}
                    />
                  </div>
                  <p className={styles.hint}>How much you&apos;ve already saved toward your goal</p>
                </div>

                <button
                  type="submit"
                  className={styles.saveButton}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Settings'}
                </button>
              </form>
            </section>

            {/* Bank Accounts */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Bank Accounts</h2>
              <p className={styles.sectionDescription}>
                Manage your connected bank accounts. Add new accounts from the dashboard.
              </p>

              {bankAccounts.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>No bank accounts yet.</p>
                  <Link href="/dashboard" className={styles.linkButton}>
                    Add accounts on Dashboard
                  </Link>
                </div>
              ) : (
                <ul className={styles.accountList}>
                  {bankAccounts.map((account) => (
                    <li key={account.id} className={styles.accountItem}>
                      {editingAccount === account.id ? (
                        <div className={styles.editForm}>
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className={styles.editInput}
                            placeholder="Account name"
                          />
                          <select
                            value={editType}
                            onChange={(e) => setEditType(e.target.value as 'checking' | 'savings' | 'credit')}
                            className={styles.editSelect}
                          >
                            <option value="checking">Checking</option>
                            <option value="savings">Savings</option>
                            <option value="credit">Credit Card</option>
                          </select>
                          <div className={styles.editActions}>
                            <button
                              onClick={() => handleUpdateAccount(account.id)}
                              className={styles.saveSmallButton}
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className={styles.cancelButton}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className={styles.accountInfo}>
                            <span className={styles.accountName}>{account.name}</span>
                            <span className={styles.accountType}>{account.type}</span>
                          </div>
                          <div className={styles.accountActions}>
                            <button
                              onClick={() => startEditingAccount(account)}
                              className={styles.editButton}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteAccount(account.id, account.name)}
                              className={styles.deleteButton}
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>&#9829;</span> by Josiah
      </footer>
    </div>
  )
}
