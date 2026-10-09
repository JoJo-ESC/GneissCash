import { startOfWeek, endOfWeek, differenceInWeeks, getDay } from 'date-fns'

// Types
export interface WeekBounds {
  start: Date
  end: Date
}

export interface AllowanceInput {
  monthlyIncome: number
  goalAmount: number
  deadline: Date
  currentSaved: number
}

export type Grade = 'A' | 'B' | 'C' | 'D' | 'F'

export interface GradeResult {
  grade: Grade
  percentage: number
  message: string
  color: string
}

export interface PulseStatus {
  emoji: string
  message: string
  color: string
  status: 'under' | 'on_track' | 'ahead' | 'over'
}

/**
 * Calculate weekly spending allowance based on income and savings goal
 * Formula: (monthly income - required monthly savings) / 4.33 weeks per month
 */
export function calculateWeeklyAllowance(input: AllowanceInput): number {
  const { monthlyIncome, goalAmount, deadline, currentSaved } = input

  const now = new Date()
  const weeksUntilDeadline = differenceInWeeks(deadline, now)

  // If deadline has passed or is now, return 0 (no allowance)
  if (weeksUntilDeadline <= 0) {
    return 0
  }

  const remainingToSave = Math.max(0, goalAmount - currentSaved)
  const requiredWeeklySavings = remainingToSave / weeksUntilDeadline

  // Convert monthly income to weekly (4.33 weeks per month)
  const weeklyIncome = monthlyIncome / 4.33

  // Weekly allowance = weekly income - required weekly savings
  const allowance = weeklyIncome - requiredWeeklySavings

  // Don't return negative allowance
  return Math.max(0, Math.round(allowance * 100) / 100)
}

/**
 * Get the start (Monday) and end (Sunday) of the current week
 */
export function getWeekBounds(date: Date = new Date()): WeekBounds {
  // week starts on Monday (1)
  const start = startOfWeek(date, { weekStartsOn: 1 })
  const end = endOfWeek(date, { weekStartsOn: 1 })

  return { start, end }
}

/**
 * Calculate grade based on spending vs allowance
 * A: spent <= 80% of allowance
 * B: spent <= 100% of allowance
 * C: spent <= 120% of allowance
 * D: spent <= 150% of allowance
 * F: spent > 150% of allowance
 */
export function calculateGrade(spent: number, allowance: number): GradeResult {
  // Handle edge case where allowance is 0
  if (allowance <= 0) {
    if (spent === 0) {
      return {
        grade: 'A',
        percentage: 0,
        message: 'No spending, no allowance',
        color: '#22c55e'
      }
    }
    return {
      grade: 'F',
      percentage: 100,
      message: 'Over budget with no allowance',
      color: '#ef4444'
    }
  }

  const percentage = (spent / allowance) * 100

  if (percentage <= 80) {
    return {
      grade: 'A',
      percentage,
      message: 'Excellent! Well under budget',
      color: '#22c55e' // green
    }
  } else if (percentage <= 100) {
    return {
      grade: 'B',
      percentage,
      message: 'Good job staying within budget',
      color: '#84cc16' // lime
    }
  } else if (percentage <= 120) {
    return {
      grade: 'C',
      percentage,
      message: 'Slightly over budget',
      color: '#eab308' // yellow
    }
  } else if (percentage <= 150) {
    return {
      grade: 'D',
      percentage,
      message: 'Significantly over budget',
      color: '#f97316' // orange
    }
  } else {
    return {
      grade: 'F',
      percentage,
      message: 'Way over budget',
      color: '#ef4444' // red
    }
  }
}

/**
 * Get pulse status comparing spending pace to day of week
 * If it's Wednesday (day 3 of 7), you should have spent ~43% of allowance
 */
export function getPulseStatus(spent: number, allowance: number, date: Date = new Date()): PulseStatus {
  // Handle edge case
  if (allowance <= 0) {
    if (spent === 0) {
      return {
        emoji: '✓',
        message: 'No spending today',
        color: '#22c55e',
        status: 'on_track'
      }
    }
    return {
      emoji: '🚨',
      message: 'Over budget!',
      color: '#ef4444',
      status: 'over'
    }
  }

  // Get day of week (0 = Sunday, 1 = Monday, etc.)
  // Convert to days into the week (Monday = 1, Sunday = 7)
  const dayOfWeek = getDay(date)
  const daysIntoWeek = dayOfWeek === 0 ? 7 : dayOfWeek

  // Expected spending at this point (proportional to days elapsed)
  const expectedPercentage = (daysIntoWeek / 7) * 100
  const actualPercentage = (spent / allowance) * 100

  // How far ahead or behind are we?
  const diff = actualPercentage - expectedPercentage

  if (actualPercentage > 100) {
    // Already over budget for the week
    return {
      emoji: '🚨',
      message: 'Over budget for the week!',
      color: '#ef4444',
      status: 'over'
    }
  } else if (diff > 20) {
    // Spending too fast (more than 20% ahead of pace)
    return {
      emoji: '⚠️',
      message: 'Ahead of pace - slow down!',
      color: '#f97316',
      status: 'ahead'
    }
  } else if (diff > 10) {
    // Slightly ahead
    return {
      emoji: '📈',
      message: 'Slightly ahead of pace',
      color: '#eab308',
      status: 'ahead'
    }
  } else if (diff >= -10) {
    // On track (within 10% either way)
    return {
      emoji: '✅',
      message: 'On track!',
      color: '#22c55e',
      status: 'on_track'
    }
  } else {
    // Under budget (more than 10% behind pace)
    return {
      emoji: '💰',
      message: 'Under budget - great job!',
      color: '#22c55e',
      status: 'under'
    }
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

/**
 * Calculate how much is remaining in the weekly allowance
 */
export function getRemainingAllowance(spent: number, allowance: number): number {
  return Math.max(0, allowance - spent)
}

/**
 * Calculate daily allowance from weekly
 */
export function getDailyAllowance(weeklyAllowance: number): number {
  return Math.round((weeklyAllowance / 7) * 100) / 100
}
