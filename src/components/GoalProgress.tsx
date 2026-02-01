'use client'

import { differenceInDays, differenceInWeeks, format } from 'date-fns'
import { formatCurrency } from '@/lib/calculations'
import styles from './GoalProgress.module.css'

interface GoalProgressProps {
  goalAmount: number | null
  currentSaved: number | null
  deadline: string | null
}

export default function GoalProgress({
  goalAmount,
  currentSaved,
  deadline,
}: GoalProgressProps) {
  // Check if goal is configured
  const hasGoal = goalAmount && goalAmount > 0

  if (!hasGoal) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Savings Goal</h2>
        <div className={styles.empty}>
          <p>No savings goal set</p>
          <p className={styles.emptyHint}>Configure your goal in Settings</p>
        </div>
      </div>
    )
  }

  const saved = currentSaved || 0
  const goal = goalAmount
  const remaining = Math.max(0, goal - saved)
  const percentage = Math.min(100, (saved / goal) * 100)
  const isComplete = saved >= goal

  // Calculate time remaining
  let timeRemaining = ''
  let daysLeft = 0
  let isOverdue = false

  if (deadline) {
    const deadlineDate = new Date(deadline)
    const now = new Date()
    daysLeft = differenceInDays(deadlineDate, now)
    const weeksLeft = differenceInWeeks(deadlineDate, now)

    if (daysLeft < 0) {
      isOverdue = true
      timeRemaining = `${Math.abs(daysLeft)} days overdue`
    } else if (daysLeft === 0) {
      timeRemaining = 'Due today'
    } else if (daysLeft === 1) {
      timeRemaining = '1 day left'
    } else if (daysLeft < 14) {
      timeRemaining = `${daysLeft} days left`
    } else if (weeksLeft < 8) {
      timeRemaining = `${weeksLeft} weeks left`
    } else {
      timeRemaining = `Due ${format(deadlineDate, 'MMM d, yyyy')}`
    }
  }

  // Calculate weekly savings needed
  let weeklySavingsNeeded = 0
  if (deadline && !isComplete && daysLeft > 0) {
    const weeksRemaining = Math.max(1, daysLeft / 7)
    weeklySavingsNeeded = remaining / weeksRemaining
  }

  // Determine progress color
  function getProgressColor(): string {
    if (isComplete) return '#22c55e' // green - complete
    if (percentage >= 75) return '#22c55e' // green
    if (percentage >= 50) return '#84cc16' // lime
    if (percentage >= 25) return '#eab308' // yellow
    return '#f97316' // orange
  }

  // Determine status
  function getStatus(): { emoji: string; message: string; color: string } {
    if (isComplete) {
      return { emoji: '🎉', message: 'Goal reached!', color: '#22c55e' }
    }
    if (isOverdue) {
      return { emoji: '⚠️', message: 'Past deadline', color: '#ef4444' }
    }
    if (percentage >= 75) {
      return { emoji: '🔥', message: 'Almost there!', color: '#22c55e' }
    }
    if (percentage >= 50) {
      return { emoji: '💪', message: 'Halfway there', color: '#84cc16' }
    }
    if (percentage >= 25) {
      return { emoji: '📈', message: 'Making progress', color: '#eab308' }
    }
    return { emoji: '🚀', message: 'Just getting started', color: '#f97316' }
  }

  const progressColor = getProgressColor()
  const status = getStatus()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Savings Goal</h2>
        {deadline && (
          <span className={`${styles.deadline} ${isOverdue ? styles.overdue : ''}`}>
            {timeRemaining}
          </span>
        )}
      </div>

      {/* Main Progress */}
      <div className={styles.progressSection}>
        <div className={styles.amounts}>
          <span className={styles.savedAmount}>{formatCurrency(saved)}</span>
          <span className={styles.goalAmount}>of {formatCurrency(goal)}</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${percentage}%`,
              backgroundColor: progressColor,
            }}
          />
        </div>

        <div className={styles.progressMeta}>
          <span className={styles.percentage}>{percentage.toFixed(1)}% complete</span>
          {!isComplete && (
            <span className={styles.remaining}>{formatCurrency(remaining)} to go</span>
          )}
        </div>
      </div>

      {/* Status & Weekly Target */}
      <div className={styles.footer}>
        <div className={styles.status}>
          <span className={styles.statusEmoji}>{status.emoji}</span>
          <span className={styles.statusMessage} style={{ color: status.color }}>
            {status.message}
          </span>
        </div>

        {!isComplete && weeklySavingsNeeded > 0 && (
          <div className={styles.weeklyTarget}>
            <span className={styles.weeklyLabel}>Save</span>
            <span className={styles.weeklyAmount}>{formatCurrency(weeklySavingsNeeded)}/week</span>
          </div>
        )}
      </div>
    </div>
  )
}
