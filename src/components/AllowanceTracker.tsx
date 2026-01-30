'use client'

import { formatCurrency } from '@/lib/calculations'
import styles from './AllowanceTracker.module.css'

interface AllowanceTrackerProps {
  spent: number
  allowance: number
  remaining: number
}

export default function AllowanceTracker({
  spent,
  allowance,
  remaining,
}: AllowanceTrackerProps) {
  // Calculate percentage spent (cap at 100 for visual purposes)
  const percentageSpent = allowance > 0 ? Math.min((spent / allowance) * 100, 100) : 0
  const isOverBudget = spent > allowance

  // Determine color based on spending level
  function getProgressColor(): string {
    if (allowance <= 0) return '#6b7280' // gray
    const percentage = (spent / allowance) * 100
    if (percentage <= 50) return '#22c55e' // green
    if (percentage <= 80) return '#84cc16' // lime
    if (percentage <= 100) return '#eab308' // yellow
    return '#ef4444' // red
  }

  const progressColor = getProgressColor()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Weekly Allowance</h2>
        {isOverBudget && (
          <span className={styles.overBudgetBadge}>Over Budget</span>
        )}
      </div>

      <div className={styles.amounts}>
        <div className={styles.remaining}>
          <span className={styles.remainingLabel}>Remaining</span>
          <span
            className={styles.remainingValue}
            style={{ color: isOverBudget ? '#ef4444' : '#00fd5d' }}
          >
            {formatCurrency(remaining)}
          </span>
        </div>
        <div className={styles.total}>
          <span className={styles.totalLabel}>of {formatCurrency(allowance)}</span>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{
              width: `${percentageSpent}%`,
              backgroundColor: progressColor,
            }}
          />
        </div>
        <div className={styles.progressLabels}>
          <span className={styles.spentLabel}>
            {formatCurrency(spent)} spent
          </span>
          <span className={styles.percentLabel}>
            {Math.round((spent / allowance) * 100 || 0)}%
          </span>
        </div>
      </div>

      {allowance <= 0 && (
        <p className={styles.noAllowance}>
          Set up your income and savings goal to see your weekly allowance
        </p>
      )}
    </div>
  )
}
