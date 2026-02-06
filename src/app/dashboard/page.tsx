'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Sidebar from '@/components/Sidebar'
import CashFlowChart from '@/components/CashFlowChart'
import { RangeOption, useCashFlowHistory } from '@/hooks/useCashFlowHistory'
import EssentialSpendingChart from '@/components/EssentialSpendingChart'
import { useSpendMix } from '@/hooks/useSpendMix'
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

export default function Dashboard() {
  const router = useRouter()
  const [authLoading, setAuthLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<UserProfile>(getStoredProfile)

  const supabase = createClient()
  const rangeOptions: RangeOption[] = ['3m', '6m', '12m']
  const rangeDescriptors: Record<RangeOption, string> = {
    '3m': 'Last 3 months',
    '6m': 'Last 6 months',
    '12m': 'Last 12 months',
  }
  const rangeButtonLabels: Record<RangeOption, string> = {
    '3m': '3M',
    '6m': '6M',
    '12m': '12M',
  }

  const {
    data: cashFlowData,
    loading: cashFlowLoading,
    error: cashFlowError,
    range,
    setRange,
    refresh,
    lastPoint,
    previousPoint,
    netDelta,
  } = useCashFlowHistory('6m', { enabled: !authLoading })

  const {
    data: spendMixData,
    loading: spendMixLoading,
    error: spendMixError,
    range: spendMixRange,
    setRange: setSpendMixRange,
    refresh: refreshSpendMix,
    essentialShare,
    flexShare,
  } = useSpendMix('3m', { enabled: !authLoading })

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }),
    []
  )

  const formatCurrency = (value: number | null | undefined) => {
    if (value === null || value === undefined) return '--'
    return currencyFormatter.format(Math.round(value))
  }

  const formatDelta = (value: number | null) => {
    if (value === null) return null
    const absolute = Math.abs(Math.round(value))
    const formatted = currencyFormatter.format(absolute)
    return value >= 0 ? `+${formatted}` : `-${formatted}`
  }

  const rangeLabel = useMemo(() => {
    if (!cashFlowData) return 'Track inflow versus outflow at a glance.'
    const start = new Date(cashFlowData.range.start)
    const end = new Date(cashFlowData.range.end)
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    })
    return `${formatter.format(start)} – ${formatter.format(end)}`
  }, [cashFlowData])

  const netDeltaFormatted = formatDelta(netDelta)
  const netDeltaValueClass = netDelta === null
    ? styles.metricValue
    : `${styles.metricValue} ${netDelta >= 0 ? styles.metricChangePositive : styles.metricChangeNegative}`

  const deficitMessage = useMemo(() => {
    if (!lastPoint || !lastPoint.deficit) return null
    const shortfall = formatCurrency(Math.abs(lastPoint.net))
    return `Spent ${shortfall} more than earned in ${lastPoint.label}.`
  }, [lastPoint])

  const formatPercent = (value: number | null | undefined) => {
    if (value === null || value === undefined) return '--'
    return `${value.toFixed(1)}%`
  }

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

        await loadUserSettings(user.id)
      } catch (error) {
        console.error('Failed to initialize dashboard:', error)
      } finally {
        setAuthLoading(false)
      }
    }

    checkAuthAndLoadData()
  }, [])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (authLoading) {
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
            <p className={styles.subtitle}>{rangeLabel}</p>
          </div>

          <section className={styles.chartSection}>
            <div className={styles.chartCard}>
              <div className={styles.chartControls}>
                <div className={styles.chartHeader}>
                  <h2 className={styles.chartTitle}>Cash Flow Snapshot</h2>
                  <span className={styles.chartRange}>{rangeDescriptors[range]}</span>
                </div>
                <div className={styles.rangeToggle} role="tablist" aria-label="Cash flow range">
                  {rangeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="tab"
                      aria-selected={option === range}
                      className={`${styles.rangeButton} ${option === range ? styles.rangeButtonActive : ''}`.trim()}
                      onClick={() => setRange(option)}
                      disabled={cashFlowLoading && option === range}
                    >
                      {rangeButtonLabels[option]}
                    </button>
                  ))}
                </div>
              </div>

              {deficitMessage && (
                <div className={styles.deficitIndicator}>
                  <span role="img" aria-hidden="true">⚠️</span>
                  {deficitMessage}
                </div>
              )}

              {cashFlowData && (
                <div className={styles.chartSummary}>
                  <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Latest Net</span>
                    <span className={styles.metricValue}>{formatCurrency(lastPoint?.net)}</span>
                    <span className={styles.metricChange}>{lastPoint?.label ?? '--'}</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Change vs Prior</span>
                    <span className={netDeltaValueClass}>{netDeltaFormatted ?? '--'}</span>
                    <span className={styles.metricChange}>
                      {previousPoint?.label ? `vs ${previousPoint.label}` : 'vs prior period'}
                    </span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Total Income</span>
                    <span className={styles.metricValue}>{formatCurrency(cashFlowData.totals.income)}</span>
                    <span className={styles.metricChange}>Across selected range</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Deficit Months</span>
                    <span className={styles.metricValue}>{cashFlowData.totals.deficitMonths}</span>
                    <span className={styles.metricChange}>Net below zero</span>
                  </div>
                </div>
              )}

              <div className={styles.chartContainer}>
                {cashFlowData ? (
                  <CashFlowChart points={cashFlowData.points} />
                ) : cashFlowLoading ? (
                  <div className={styles.chartMessage}>Loading cash flow…</div>
                ) : cashFlowError ? (
                  <div className={styles.chartError}>
                    <span>{cashFlowError}</span>
                    <button type="button" className={styles.chartErrorButton} onClick={refresh}>
                      Try again
                    </button>
                  </div>
                ) : (
                  <div className={styles.emptyState}>
                    Not enough data yet. Try adding transactions to see the trend.
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className={styles.chartSection}>
            <div className={styles.mixCard}>
              <div className={styles.chartControls}>
                <div className={styles.chartHeader}>
                  <h2 className={styles.chartTitle}>Needs vs. Wants</h2>
                  <span className={styles.chartRange}>{rangeDescriptors[spendMixRange]}</span>
                </div>
                <div className={styles.rangeToggle} role="tablist" aria-label="Spending mix range">
                  {rangeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="tab"
                      aria-selected={option === spendMixRange}
                      className={`${styles.rangeButton} ${option === spendMixRange ? styles.rangeButtonActive : ''}`.trim()}
                      onClick={() => setSpendMixRange(option)}
                      disabled={spendMixLoading && option === spendMixRange}
                    >
                      {rangeButtonLabels[option]}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.mixContent}>
                <div className={styles.mixChart}>
                  {spendMixData ? (
                    <EssentialSpendingChart breakdown={spendMixData.breakdown} />
                  ) : spendMixLoading ? (
                    <div className={styles.chartMessage}>Crunching your categories…</div>
                  ) : spendMixError ? (
                    <div className={styles.chartError}>
                      <span>{spendMixError}</span>
                      <button type="button" className={styles.chartErrorButton} onClick={refreshSpendMix}>
                        Try again
                      </button>
                    </div>
                  ) : (
                    <div className={styles.emptyStateCompact}>
                      Categorize a few expenses to see how needs compare to wants.
                    </div>
                  )}
                </div>

                <div className={styles.mixLegend}>
                  <div className={styles.legendList}>
                    <div className={styles.legendItem}>
                      <div className={styles.legendMeta}>
                        <span className={styles.legendLabel}>Essentials</span>
                        <span className={styles.legendPercent}>{formatPercent(essentialShare)}</span>
                        <div className={styles.legendDotRow}>
                          <span className={styles.legendDot} style={{ background: 'rgba(22, 163, 74, 0.65)' }} />
                          Housing, utilities, transit, groceries
                        </div>
                      </div>
                      <span className={styles.legendValue}>{formatCurrency(spendMixData?.totals.essential)}</span>
                    </div>
                    <div className={styles.legendItem}>
                      <div className={styles.legendMeta}>
                        <span className={styles.legendLabel}>Everything Else</span>
                        <span className={styles.legendPercent}>{formatPercent(flexShare)}</span>
                        <div className={styles.legendDotRow}>
                          <span className={styles.legendDot} style={{ background: 'rgba(249, 115, 22, 0.65)' }} />
                          Dining out, shopping, subscriptions
                        </div>
                      </div>
                      <span className={styles.legendValue}>{formatCurrency(spendMixData?.totals.flex)}</span>
                    </div>
                  </div>

                  <div className={styles.mixTopCategories}>
                    <div className={styles.mixTopTitle}>Top flex spend</div>
                    {spendMixData && spendMixData.topFlexCategories.length > 0 ? (
                      <div className={styles.mixTopList}>
                        {spendMixData.topFlexCategories.map((item) => (
                          <div key={item.category} className={styles.mixTopItem}>
                            <span>{item.category}</span>
                            <span>
                              <span className={styles.mixTopAmount}>{formatCurrency(item.amount)}</span>
                              <span className={styles.mixTopPercent}> · {formatPercent(item.percentage)}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : spendMixLoading ? (
                      <div className={styles.chartMessage}>Loading highlights…</div>
                    ) : (
                      <div className={styles.emptyStateCompact}>
                        Once you log a few discretionary purchases, we will highlight the biggest levers here.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
