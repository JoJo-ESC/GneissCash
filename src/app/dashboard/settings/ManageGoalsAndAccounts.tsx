'use client'

import { useEffect, useState } from 'react'
import dashboardStyles from '@/app/dashboard/dashboard.module.css'
import styles from './ManageGoalsAndAccounts.module.css'

interface Goal {
  id: string
  name: string
  goal_amount: number | null
  current_amount: number | null
}

interface Account {
  id: string
  name: string
  type: string
}

function formatCurrency(value: number | null | undefined) {
  const numericValue = Number(value ?? 0)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(numericValue)
}

export default function ManageGoalsAndAccounts() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  async function fetchGoalsAndAccounts() {
    setError(null)
    setSuccess(null)
    try {
      const [goalsResponse, accountsResponse] = await Promise.all([
        fetch('/api/goals'),
        fetch('/api/bank-accounts'),
      ])

      const goalsData = await goalsResponse.json()
      const accountsData = await accountsResponse.json()

      if (goalsResponse.ok) {
        setGoals(goalsData.goals)
      } else {
        setError(goalsData.error || 'Failed to fetch goals')
      }

      if (accountsResponse.ok) {
        setAccounts(accountsData.accounts)
      } else {
        setError(accountsData.error || 'Failed to fetch accounts')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGoalsAndAccounts()
  }, [])

  async function handleDeleteGoal(goalId: string) {
    if (!confirm('Are you sure you want to delete this goal?')) return

    try {
      const response = await fetch(`/api/goals?id=${goalId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setGoals(goals.filter((g) => g.id !== goalId))
        setSuccess('Goal deleted successfully')
        setError(null)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to delete goal')
        setSuccess(null)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      setSuccess(null)
    }
  }

  async function handleDeleteAccount(accountId: string) {
    if (!confirm('Are you sure you want to delete this account?')) return

    try {
      const response = await fetch(`/api/bank-accounts?id=${accountId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setAccounts(accounts.filter((a) => a.id !== accountId))
        setSuccess('Account deleted successfully')
        setError(null)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to delete account')
        setSuccess(null)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      setSuccess(null)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Manage Goals &amp; Accounts</h2>

      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}

      <div className={styles.cardGrid}>
        <div className={`${dashboardStyles.section} ${styles.card}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Goals</h3>
            <p className={styles.cardSubtitle}>Review and remove savings goals as needed.</p>
          </div>
          {goals.length > 0 ? (
            <ul className={styles.goalList}>
              {goals.map((goal) => (
                <li key={goal.id} className={styles.goalItem}>
                  <div className={styles.goalInfo}>
                    <span className={styles.goalName}>{goal.name}</span>
                    <span className={styles.goalProgress}>
                      {formatCurrency(goal.current_amount)} / {formatCurrency(goal.goal_amount)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteGoal(goal.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyState}>You have no goals set.</div>
          )}
        </div>

        <div className={`${dashboardStyles.section} ${styles.card}`}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Accounts</h3>
            <p className={styles.cardSubtitle}>Linked accounts appear here. Add new ones from the dashboard.</p>
          </div>
          {accounts.length > 0 ? (
            <ul className={`${dashboardStyles.accountList} ${styles.accountList}`}>
              {accounts.map((account) => (
                <li key={account.id} className={`${dashboardStyles.accountItem} ${styles.accountItem}`}>
                  <div className={dashboardStyles.accountInfo}>
                    <span className={dashboardStyles.accountName}>{account.name}</span>
                    <span className={dashboardStyles.accountType}>{account.type}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteAccount(account.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyState}>You have no accounts linked.</div>
          )}
        </div>
      </div>
    </section>
  )
}
