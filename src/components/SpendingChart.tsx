'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { formatCurrency } from '@/lib/calculations'
import styles from './SpendingChart.module.css'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

export interface CategorySpending {
  category: string
  amount: number
  percentage: number
  transactionCount: number
}

interface SpendingChartProps {
  data: CategorySpending[]
  totalSpent: number
}

// Category color mapping
const categoryColors: Record<string, string> = {
  'Food & Drink': '#f97316',
  'Shopping': '#8b5cf6',
  'Transportation': '#3b82f6',
  'Entertainment': '#ec4899',
  'Bills & Utilities': '#eab308',
  'Health': '#22c55e',
  'Travel': '#06b6d4',
  'Income': '#10b981',
  'Transfer': '#6b7280',
  'Other': '#94a3b8',
}

// Default colors for unknown categories
const defaultColors = [
  '#f97316', '#8b5cf6', '#3b82f6', '#ec4899', '#eab308',
  '#22c55e', '#06b6d4', '#f43f5e', '#a855f7', '#14b8a6',
]

function getCategoryColor(category: string, index: number): string {
  return categoryColors[category] || defaultColors[index % defaultColors.length]
}

export default function SpendingChart({ data, totalSpent }: SpendingChartProps) {
  if (data.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Spending by Category</h2>
        <div className={styles.empty}>
          <p>No spending data this week</p>
          <p className={styles.emptyHint}>Import transactions to see your breakdown</p>
        </div>
      </div>
    )
  }

  const chartData = {
    labels: data.map(d => d.category),
    datasets: [
      {
        data: data.map(d => d.amount),
        backgroundColor: data.map((d, i) => getCategoryColor(d.category, i)),
        borderColor: '#000000',
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverBorderColor: '#ffffff',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: { parsed: number; label: string }) {
            const value = context.parsed
            const percentage = totalSpent > 0 ? ((value / totalSpent) * 100).toFixed(1) : 0
            return ` ${formatCurrency(value)} (${percentage}%)`
          },
        },
      },
    },
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Spending by Category</h2>

      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer}>
          <Doughnut data={chartData} options={options} />
          <div className={styles.chartCenter}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>{formatCurrency(totalSpent)}</span>
          </div>
        </div>

        <ul className={styles.legend}>
          {data.map((item, index) => (
            <li key={item.category} className={styles.legendItem}>
              <span
                className={styles.legendColor}
                style={{ backgroundColor: getCategoryColor(item.category, index) }}
              />
              <div className={styles.legendInfo}>
                <span className={styles.legendCategory}>{item.category}</span>
                <span className={styles.legendMeta}>
                  {item.transactionCount} transaction{item.transactionCount !== 1 ? 's' : ''}
                </span>
              </div>
              <div className={styles.legendValues}>
                <span className={styles.legendAmount}>{formatCurrency(item.amount)}</span>
                <span className={styles.legendPercent}>{item.percentage}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
