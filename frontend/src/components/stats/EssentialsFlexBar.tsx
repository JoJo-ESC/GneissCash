import { formatCurrency } from "../../lib/format"
import type { SpendMixResponse } from "../../types/api"

// Neutral gray, not a competing hue — matches the money map's DEFAULT_CATEGORY_COLOR,
// since "everything else" isn't a single identity worth its own color.
const FLEX_COLOR = "#c7c7cc"

interface EssentialsFlexBarProps {
  totals: SpendMixResponse["totals"]
}

export function EssentialsFlexBar({ totals }: EssentialsFlexBarProps) {
  const essentialPct = totals.total > 0 ? (totals.essential / totals.total) * 100 : 0
  const flexPct = totals.total > 0 ? (totals.flex / totals.total) * 100 : 0

  return (
    <section>
      <h2 className="text-sm font-semibold text-text-muted">Essentials vs. everything else</h2>

      <div className="mt-3 flex h-6 w-full overflow-hidden rounded-full bg-surface">
        {essentialPct > 0 && <div className="h-full bg-accent" style={{ width: `${essentialPct}%` }} />}
        {essentialPct > 0 && flexPct > 0 && <div className="h-full w-0.5 bg-bg" />}
        {flexPct > 0 && <div className="h-full" style={{ width: `${flexPct}%`, backgroundColor: FLEX_COLOR }} />}
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
          <span className="text-sm text-text">Essentials</span>
          <span className="text-sm font-semibold text-text">{formatCurrency(totals.essential)}</span>
          <span className="text-xs text-text-muted">{essentialPct.toFixed(0)}%</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: FLEX_COLOR }} />
          <span className="text-sm text-text">Everything else</span>
          <span className="text-sm font-semibold text-text">{formatCurrency(totals.flex)}</span>
          <span className="text-xs text-text-muted">{flexPct.toFixed(0)}%</span>
        </li>
      </ul>
    </section>
  )
}
