'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getDashboardData, DashboardData } from '@/lib/dashboard'
import { formatCurrency } from '@/lib/calculations'
import Sidebar from '@/components/Sidebar'
import RecentTransactions from '@/components/RecentTransactions'
import AllowanceTracker from '@/components/AllowanceTracker'
import SpendingChart from '@/components/SpendingChart'
import GoalProgress from '@/components/GoalProgress'
import styles from './dashboard.module.css'

interface UserProfile {
  displayName: string | null
  avatarUrl: string | null
}

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile>({ displayName: null, avatarUrl: null })

  const supabase = createClient()

  async function loadDashboardData() {
    try {
      const data = await getDashboardData(supabase)
      setDashboardData(data)

      // Extract profile from settings
      if (data.settings) {
        setUserProfile({
          displayName: data.settings.display_name ?? null,
          avatarUrl: data.settings.avatar_url ?? null,
        })
      }
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    }
  }

  useEffect(() => {
    async function checkAuthAndLoadData() {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      await loadDashboardData()
      setLoading(false)
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
              {userProfile.displayName ? `Welcome back, ${userProfile.displayName.split(' ')[0]}` : 'Dashboard'}
            </h1>
            <p className={styles.subtitle}>Your financial overview at a glance</p>
          </div>

          {/* Settings Warning */}
          {dashboardData && !dashboardData.hasSettings && (
            <div className={styles.warningBanner}>
              <span className={styles.warningIcon}>!</span>
              <span className={styles.warningText}>
                Set up your income and savings goal to unlock budget tracking.
              </span>
              <Link href="/dashboard/settings" className={styles.warningLink}>
                Configure Settings
              </Link>
            </div>
          )}

          {/* Stats Row */}
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
            {/* Left Column - Charts */}
            <div className={styles.leftColumn}>
              {dashboardData && (
                <>
                  <SpendingChart
                    data={dashboardData.spendingByCategory}
                    totalSpent={dashboardData.totalSpent}
                  />
                  <GoalProgress
                    goalAmount={dashboardData.settings?.savings_goal ?? null}
                    currentSaved={dashboardData.settings?.current_saved ?? null}
                    deadline={dashboardData.settings?.goal_deadline ?? null}
                  />
                </>
              )}
            </div>

            {/* Right Column - Transactions */}
            <div className={styles.rightColumn}>
              <RecentTransactions limit={20} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
