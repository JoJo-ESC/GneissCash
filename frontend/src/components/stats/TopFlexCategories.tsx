import { formatCurrency } from "../../lib/format"
import type { SpendMixCategoryHighlight } from "../../types/api"

interface TopFlexCategoriesProps {
  categories: SpendMixCategoryHighlight[]
}

export function TopFlexCategories({ categories }: TopFlexCategoriesProps) {
  if (categories.length === 0) return null

  const maxAmount = Math.max(...categories.map((category) => category.amount))

  return (
    <section>
      <h2 className="text-sm font-semibold text-text-muted">Top discretionary categories</h2>
      <ul className="mt-3 space-y-3">
        {categories.map((category) => (
          <li key={category.category}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-text">{category.category}</span>
              <span className="text-sm font-semibold text-text">
                {formatCurrency(category.amount)}
                <span className="ml-1.5 font-normal text-text-muted">{category.percentage.toFixed(0)}%</span>
              </span>
            </div>
            <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${maxAmount > 0 ? (category.amount / maxAmount) * 100 : 0}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
