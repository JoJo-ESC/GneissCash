import type { MoneyLink, MoneyNode } from "../../lib/moneyMap"
import { describeCadence, getNodeColor } from "../../lib/moneyMap"
import { formatCurrency, formatDate } from "../../lib/format"

interface NodeStatsCardProps {
  node: MoneyNode
  allNodes: MoneyNode[]
  allLinks: MoneyLink[]
  onClose: () => void
}

const TYPE_LABEL: Record<MoneyNode["type"], string> = {
  income: "Income source",
  account: "Account",
  category: "Category",
  merchant: "Merchant",
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-xs text-text-muted">{label}</span>
      <span className="text-sm font-semibold text-text">{value}</span>
    </div>
  )
}

export function NodeStatsCard({ node, allNodes, allLinks, onClose }: NodeStatsCardProps) {
  const parent = node.parentId ? allNodes.find((n) => n.id === node.parentId) : undefined
  const percentOfParent = parent && parent.value > 0 ? (node.value / parent.value) * 100 : null
  const avgPerTransaction = node.count > 0 ? node.value / node.count : 0
  const dateRange = node.firstDate === node.lastDate ? formatDate(node.firstDate) : `${formatDate(node.firstDate)} – ${formatDate(node.lastDate)}`

  const inflow = allLinks.filter((link) => link.target === node.id).reduce((sum, link) => sum + link.value, 0)
  const outflow = allLinks.filter((link) => link.source === node.id).reduce((sum, link) => sum + link.value, 0)

  const topChild = allNodes
    .filter((n) => n.parentId === node.id)
    .sort((a, b) => b.value - a.value)[0]

  const nodesById = new Map(allNodes.map((n) => [n.id, n]))
  const color = getNodeColor(node, nodesById)

  return (
    <div className="absolute top-4 right-4 w-64 rounded-2xl border border-border bg-bg p-4 shadow-[var(--shadow-button)]">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
          <div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">{TYPE_LABEL[node.type]}</p>
            <p className="text-lg font-semibold leading-tight text-text">{node.label}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="shrink-0 rounded-full px-1.5 py-0.5 text-sm text-text-muted hover:text-text"
        >
          ✕
        </button>
      </div>

      <div className="mt-3 space-y-1.5">
        <Stat label="Total" value={formatCurrency(node.value)} />
        <Stat label="Transactions" value={String(node.count)} />
        <Stat label="Avg. per transaction" value={formatCurrency(avgPerTransaction)} />
        <Stat label="Date range" value={dateRange} />
        {percentOfParent !== null && <Stat label={`Share of ${parent!.label}`} value={`${percentOfParent.toFixed(0)}%`} />}

        {node.type === "account" && (
          <>
            {node.balance !== undefined && <Stat label="Current balance" value={formatCurrency(node.balance)} />}
            <Stat label="Total in" value={formatCurrency(inflow)} />
            <Stat label="Total out" value={formatCurrency(outflow)} />
          </>
        )}

        {node.type === "income" && <Stat label="Frequency" value={describeCadence(node.count, node.firstDate, node.lastDate)} />}

        {node.type === "category" && topChild && <Stat label="Top merchant" value={topChild.label} />}
      </div>
    </div>
  )
}
