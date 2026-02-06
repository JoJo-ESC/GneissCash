"use client"

import { useMemo } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import type { ChartOptions } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import type { SpendMixBreakdownItem } from '@/types/analytics'

ChartJS.register(ArcElement, Tooltip, Legend)

interface EssentialSpendingChartProps {
  breakdown: SpendMixBreakdownItem[]
}

const COLORS: Record<string, { background: string; border: string }> = {
  essential: {
    background: 'rgba(22, 163, 74, 0.65)',
    border: '#16a34a',
  },
  flex: {
    background: 'rgba(249, 115, 22, 0.65)',
    border: '#f97316',
  },
}

export default function EssentialSpendingChart({ breakdown }: EssentialSpendingChartProps) {
  const labels = breakdown.map((item) => item.label)
  const options: ChartOptions<'doughnut'> = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(context) {
            const label = context.label || ''
            const value = typeof context.parsed === 'number' ? context.parsed : 0
            const breakdownItem = breakdown[context.dataIndex]
            const formattedValue = value.toLocaleString(undefined, {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            })
            const pct = breakdownItem?.percentage ?? 0
            return `${label}: ${formattedValue} (${pct}%)`
          },
        },
      },
    },
  }), [breakdown])
  const data = {
    labels,
    datasets: [
      {
        data: breakdown.map((item) => item.amount),
        backgroundColor: breakdown.map((item) => COLORS[item.classification].background),
        borderColor: breakdown.map((item) => COLORS[item.classification].border),
        borderWidth: 2,
      },
    ],
  }

  return <Doughnut data={data} options={options} />
}
