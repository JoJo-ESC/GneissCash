'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Sidebar from '@/components/Sidebar'
import IncomeExpenseChart from '@/components/IncomeExpenseChart'
import { eachMonthOfInterval, format, startOfMonth, subMonths } from 'date-fns'
import styles from './dashboard.module.css'

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
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
    }
  } catch {
    return DEFAULT_PROFILE
  }
}

interface ChartSeries {
  labels: string[]
  income: number[]
  expenses: number[]
}

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<UserProfile>(getStoredProfile)
  const [chartData, setChartData] = useState<ChartSeries>({ labels: [], income: [], expenses: [] })

  const supabase = createClient()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('gneisscash.userProfile', JSON.stringify(userProfile))
    }
  }, [userProfile])

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

  async function loadIncomeExpenseHistory(userId: string) {
    const end = startOfMonth(new Date())
    const start = startOfMonth(subMonths(end, 5))

    const { data, error } = await supabase
      .from('transactions')
      .select('amount, date')
      .eq('user_id', userId)
      .gte('date', format(start, 'yyyy-MM-dd'))
      .lte('date', format(new Date(), 'yyyy-MM-dd'))
      .order('date', { ascending: true })

    if (error) {
      console.error('Failed to load income/expense history:', error)
      setChartData({ labels: [], income: [], expenses: [] })
      return
    }

    const months = eachMonthOfInterval({ start, end })
    const aggregates = new Map<string, { income: number; expenses: number }>()

    data?.forEach((transaction) => {
      const monthKey = format(new Date(transaction.date), 'yyyy-MM')
      const current = aggregates.get(monthKey) || { income: 0, expenses: 0 }

      if (transaction.amount >= 0) {
        current.income += transaction.amount
      } else {
        current.expenses += Math.abs(transaction.amount)
      }

      aggregates.set(monthKey, current)
    })

    const labels: string[] = []
    const income: number[] = []
    const expenses: number[] = []

    months.forEach((month) => {
      const key = format(month, 'yyyy-MM')
      const aggregate = aggregates.get(key) || { income: 0, expenses: 0 }

      labels.push(format(month, 'MMMM'))
      income.push(Math.round(aggregate.income * 100) / 100)
      expenses.push(Math.round(aggregate.expenses * 100) / 100)
    })

    setChartData({ labels, income, expenses })
  }

  useEffect(() => {
    async function checkAuthAndLoadData() {
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
          loadIncomeExpenseHistory(user.id),
        ])
      } catch (error) {
        console.error('Failed to initialize dashboard:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthAndLoadData()
  }, [])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
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
            <h1 className={styles.title}>
              {userProfile.displayName
                ? `Welcome back, ${userProfile.displayName.split(' ')[0]} 👋`
                : 'Dashboard'}
            </h1>
            <p className={styles.subtitle}>Track how income and spending trend over time.</p>
          </div>

          <section className={styles.chartSection}>
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <h2 className={styles.chartTitle}>Income vs Expenses</h2>
                <span className={styles.chartRange}>Last 6 months</span>
              </div>
              <div className={styles.chartContainer}>
                {chartData.labels.length > 0 ? (
                  <IncomeExpenseChart
                    labels={chartData.labels}
                    income={chartData.income}
                    expenses={chartData.expenses}
                  />
                ) : (
                  <div className={styles.emptyState}>
                    Not enough data yet. Try adding transactions to see the trend.
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
