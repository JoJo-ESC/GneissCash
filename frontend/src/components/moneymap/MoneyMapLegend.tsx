import { ACCOUNT_NODE_COLOR, CATEGORY_COLORS, DEFAULT_CATEGORY_COLOR, INCOME_NODE_COLOR } from "../../lib/moneyMap"

// Mirrors the color story in frontend/README.md — only the 3 hero
// categories get their own hue, so this is the full legend (not a sample).
const ENTRIES: { label: string; color: string }[] = [
  { label: "Account", color: ACCOUNT_NODE_COLOR },
  { label: "Income", color: INCOME_NODE_COLOR },
  { label: "Food & Drink", color: CATEGORY_COLORS["Food & Drink"] },
  { label: "Transportation", color: CATEGORY_COLORS.Transportation },
  { label: "Bills & Utilities", color: CATEGORY_COLORS["Bills & Utilities"] },
  { label: "Other spending", color: DEFAULT_CATEGORY_COLOR },
]

export function MoneyMapLegend() {
  return (
    <div className="absolute bottom-20 left-4 z-10 rounded-2xl border border-border bg-bg p-3 shadow-[var(--shadow-button)]">
      <ul className="space-y-1.5">
        {ENTRIES.map(({ label, color }) => (
          <li key={label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs text-text-muted">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
