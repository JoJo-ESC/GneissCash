"use client"

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface IncomeExpenseChartProps {
  labels: string[]
  income: number[]
  expenses: number[]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: 'index' as const,
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        boxHeight: 10,
      },
    },
    tooltip: {
      callbacks: {
        label(context: any) {
          const label = context.dataset.label || ''
          const value = typeof context.parsed.y === 'number' ? context.parsed.y : 0
          return `${label}: $${value.toLocaleString()}`
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        font: {
          size: 12,
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback(value: number | string) {
          const numeric = typeof value === 'string' ? parseFloat(value) : value
          return `$${numeric}`
        },
      },
    },
  },
}

export default function IncomeExpenseChart({ labels, income, expenses }: IncomeExpenseChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: income,
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.15)',
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Expenses',
        data: expenses,
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.15)',
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: false,
      },
    ],
  }

  return <Line options={chartOptions} data={data} />
}
