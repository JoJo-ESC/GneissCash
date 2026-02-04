"use client"

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import type { ChartOptions } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import type { CashFlowPoint } from '@/types/analytics'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
)

interface CashFlowChartProps {
  points: CashFlowPoint[]
}

const chartOptions: ChartOptions<'bar' | 'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        boxHeight: 10,
      },
    },
    tooltip: {
      callbacks: {
        label(context) {
          const label = context.dataset.label || ''
          const value = typeof context.parsed.y === 'number' ? context.parsed.y : 0
          const formatted = value.toLocaleString(undefined, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          })
          return `${label}: ${formatted}`
        },
      },
    },
  },
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
      },
    },
    y: {
      stacked: false,
      beginAtZero: true,
      ticks: {
        callback(value) {
          const numeric = typeof value === 'string' ? Number(value) : value
          if (Number.isNaN(numeric)) return '$0'
          const formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
          return formatter.format(numeric as number)
        },
      },
    },
  },
}

export default function CashFlowChart({ points }: CashFlowChartProps) {
  const labels = points.map((point) => point.label)
  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Income',
        data: points.map((point) => point.income),
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
        borderColor: '#2563eb',
        borderWidth: 1,
        borderRadius: 8,
        order: 2,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        type: 'bar' as const,
        label: 'Expenses',
        data: points.map((point) => point.expenses),
        backgroundColor: 'rgba(249, 115, 22, 0.45)',
        borderColor: '#f97316',
        borderWidth: 1,
        borderRadius: 8,
        order: 2,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        type: 'line' as const,
        label: 'Net',
        data: points.map((point) => point.net),
        borderColor: '#16a34a',
        backgroundColor: 'rgba(22, 163, 74, 0.1)',
        pointBackgroundColor: points.map((point) => (point.deficit ? '#dc2626' : '#16a34a')),
        pointBorderColor: points.map((point) => (point.deficit ? '#dc2626' : '#16a34a')),
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        order: 1,
      },
      {
        type: 'line' as const,
        label: '3-mo Avg Net',
        data: points.map((point) => point.rollingNet),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        pointRadius: 0,
        borderWidth: 2,
        borderDash: [6, 6],
        spanGaps: true,
        tension: 0.3,
        order: 0,
      },
    ],
  }

  return <Chart type="bar" options={chartOptions} data={data} />
}
