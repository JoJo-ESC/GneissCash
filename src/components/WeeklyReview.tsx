'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { formatCurrency } from '@/lib/calculations'
import { WeeklySummary } from '@/types/database'
import styles from './WeeklyReview.module.css'

interface WeeklyReviewProps {
  // Current week data from dashboard
  currentGrade: string
  currentGradeColor: string
  currentSpent: number
  currentAllowance: number
  currentGoalAmount: number | null
  currentSaved: number | null
  // Optional: trigger refresh
  refreshKey?: number
}

interface WeekComparison {
  spentDiff: number
  spentDiffPercent: number
  direction: 'better' | 'worse' | 'same'
}

export default function WeeklyReview({
  currentGrade,
  currentGradeColor,
  currentSpent,
  currentAllowance,
  currentGoalAmount,
  currentSaved,
  refreshKey,
}: WeeklyReviewProps) {
  const [loading, setLoading] = useState(true)
  const [lastWeekSummary, setLastWeekSummary] = useState<WeeklySummary | null>(null)
  const [biggestPurchase, setBiggestPurchase] = useState<{ name: string; amount: number } | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [generating, setGenerating] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey])

  async function loadData() {
    setLoading(true)

    try {
      // Load last week's summary for comparison
      const { data: summaries } = await supabase
        .from('weekly_summaries')
        .select('*')
        .order('week_start', { ascending: false })
        .limit(2)

      // The first one might be current week, so check dates
      const now = new Date()
      const currentWeekStart = getMonday(now)

      const lastWeek = summaries?.find(
        (s) => new Date(s.week_start) < currentWeekStart
      )

      if (lastWeek) {
        setLastWeekSummary(lastWeek as WeeklySummary)
      }

      // Load biggest purchase for current week
      const weekStart = formatDate(currentWeekStart)
      const weekEnd = formatDate(getSunday(now))

      const { data: transactions } = await supabase
        .from('transactions')
        .select('amount, name, merchant_name')
        .gte('date', weekStart)
        .lte('date', weekEnd)
        .lt('amount', 0)
        .order('amount', { ascending: true })
        .limit(1)

      if (transactions && transactions.length > 0) {
        const tx = transactions[0]
        setBiggestPurchase({
          name: tx.merchant_name || tx.name || 'Unknown',
          amount: Math.abs(tx.amount),
        })
      }
    } catch (error) {
      console.error('Failed to load weekly review data:', error)
    }

    setLoading(false)
  }

  async function handleGenerateSummary() {
    setGenerating(true)

    try {
      const response = await fetch('/api/weekly-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })

      if (response.ok) {
        await loadData()
      }
    } catch (error) {
      console.error('Failed to generate summary:', error)
    }

    setGenerating(false)
  }

  function getMonday(date: Date): Date {
    const d = new Date(date)
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1)
    d.setDate(diff)
    d.setHours(0, 0, 0, 0)
    return d
  }

  function getSunday(date: Date): Date {
    const monday = getMonday(date)
    const sunday = new Date(monday)
    sunday.setDate(monday.getDate() + 6)
    return sunday
  }

  function formatDate(date: Date): string {
    return date.toISOString().split('T')[0]
  }

  function getComparison(): WeekComparison | null {
    if (!lastWeekSummary || lastWeekSummary.total_spent === null) return null

    const lastSpent = lastWeekSummary.total_spent
    const diff = currentSpent - lastSpent
    const diffPercent = lastSpent > 0 ? (diff / lastSpent) * 100 : 0

    return {
      spentDiff: diff,
      spentDiffPercent: Math.abs(diffPercent),
      direction: diff < 0 ? 'better' : diff > 0 ? 'worse' : 'same',
    }
  }

  function getGoalProgress(): number {
    if (!currentGoalAmount || currentGoalAmount === 0) return 0
    const saved = currentSaved || 0
    return Math.min(100, (saved / currentGoalAmount) * 100)
  }

  const comparison = getComparison()
  const goalProgress = getGoalProgress()
  const spentPercentage = currentAllowance > 0 ? (currentSpent / currentAllowance) * 100 : 0

  return (
    <>
      <div className={styles.container} onClick={() => setShowModal(true)}>
        <div className={styles.header}>
          <h2 className={styles.title}>Weekly Review</h2>
          <span className={styles.expandHint}>Click to expand</span>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <span className={styles.spinner}></span>
          </div>
        ) : (
          <div className={styles.preview}>
            {/* Grade Circle */}
            <div className={styles.gradeSection}>
              <div
                className={styles.gradeCircle}
                style={{ backgroundColor: currentGradeColor }}
              >
                <span className={styles.gradeLetter}>{currentGrade}</span>
              </div>
              <span className={styles.gradeSubtext}>This Week</span>
            </div>

            {/* Quick Stats */}
            <div className={styles.quickStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{formatCurrency(currentSpent)}</span>
                <span className={styles.statLabel}>of {formatCurrency(currentAllowance)}</span>
              </div>
              {comparison && comparison.direction !== 'same' && (
                <div
                  className={`${styles.comparison} ${
                    comparison.direction === 'better' ? styles.better : styles.worse
                  }`}
                >
                  {comparison.direction === 'better' ? '-' : '+'}
                  {formatCurrency(Math.abs(comparison.spentDiff))} vs last week
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Weekly Review</h2>
              <button
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>

            <div className={styles.modalContent}>
              {/* Large Grade Display */}
              <div className={styles.gradeDisplay}>
                <div
                  className={styles.largeGradeCircle}
                  style={{ backgroundColor: currentGradeColor }}
                >
                  <span className={styles.largeGradeLetter}>{currentGrade}</span>
                </div>
                <div className={styles.gradeDetails}>
                  <span className={styles.gradeTitle}>Weekly Grade</span>
                  <span className={styles.gradePercentage}>
                    {spentPercentage.toFixed(0)}% of allowance used
                  </span>
                </div>
              </div>

              {/* Spent vs Allowance */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Spending</h3>
                <div className={styles.spendingBar}>
                  <div className={styles.barContainer}>
                    <div
                      className={styles.barFill}
                      style={{
                        width: `${Math.min(100, spentPercentage)}%`,
                        backgroundColor: currentGradeColor,
                      }}
                    />
                  </div>
                  <div className={styles.barLabels}>
                    <span className={styles.spentLabel}>
                      {formatCurrency(currentSpent)} spent
                    </span>
                    <span className={styles.allowanceLabel}>
                      {formatCurrency(currentAllowance)} budget
                    </span>
                  </div>
                </div>
              </div>

              {/* Biggest Purchase */}
              {biggestPurchase && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Biggest Purchase</h3>
                  <div className={styles.biggestPurchase}>
                    <span className={styles.purchaseIcon}>*</span>
                    <div className={styles.purchaseInfo}>
                      <span className={styles.purchaseName}>{biggestPurchase.name}</span>
                      <span className={styles.purchaseAmount}>
                        {formatCurrency(biggestPurchase.amount)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Goal Progress */}
              {currentGoalAmount && currentGoalAmount > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Savings Goal</h3>
                  <div className={styles.goalProgress}>
                    <div className={styles.goalBar}>
                      <div
                        className={styles.goalFill}
                        style={{ width: `${goalProgress}%` }}
                      />
                    </div>
                    <div className={styles.goalLabels}>
                      <span className={styles.goalCurrent}>
                        {formatCurrency(currentSaved || 0)} saved
                      </span>
                      <span className={styles.goalTarget}>
                        {formatCurrency(currentGoalAmount)} goal
                      </span>
                    </div>
                    <span className={styles.goalPercent}>
                      {goalProgress.toFixed(0)}% complete
                    </span>
                  </div>
                </div>
              )}

              {/* Week-over-Week Comparison */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Week-over-Week</h3>
                {comparison ? (
                  <div className={styles.comparisonSection}>
                    <div
                      className={`${styles.comparisonCard} ${
                        comparison.direction === 'better'
                          ? styles.comparisonBetter
                          : comparison.direction === 'worse'
                          ? styles.comparisonWorse
                          : styles.comparisonSame
                      }`}
                    >
                      <span className={styles.comparisonIcon}>
                        {comparison.direction === 'better'
                          ? '-'
                          : comparison.direction === 'worse'
                          ? '+'
                          : '='}
                      </span>
                      <div className={styles.comparisonDetails}>
                        <span className={styles.comparisonValue}>
                          {comparison.direction === 'same'
                            ? 'Same as last week'
                            : `${formatCurrency(Math.abs(comparison.spentDiff))} ${
                                comparison.direction === 'better' ? 'less' : 'more'
                              }`}
                        </span>
                        {comparison.direction !== 'same' && (
                          <span className={styles.comparisonPercent}>
                            {comparison.spentDiffPercent.toFixed(0)}%{' '}
                            {comparison.direction === 'better' ? 'decrease' : 'increase'}
                          </span>
                        )}
                      </div>
                    </div>
                    {lastWeekSummary && (
                      <div className={styles.lastWeekInfo}>
                        <span className={styles.lastWeekLabel}>Last week:</span>
                        <span className={styles.lastWeekValue}>
                          {formatCurrency(lastWeekSummary.total_spent || 0)} spent
                          {lastWeekSummary.grade && (
                            <span className={styles.lastWeekGrade}>
                              (Grade: {lastWeekSummary.grade})
                            </span>
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.noComparison}>
                    <p>No previous week data available.</p>
                    <button
                      className={styles.generateButton}
                      onClick={handleGenerateSummary}
                      disabled={generating}
                    >
                      {generating ? 'Generating...' : 'Generate Weekly Summary'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
