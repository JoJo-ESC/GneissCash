import { useEffect, useState } from "react"
import { spendMixApi } from "../lib/api"
import { EssentialsFlexBar } from "../components/stats/EssentialsFlexBar"
import { TopFlexCategories } from "../components/stats/TopFlexCategories"
import { RangeToggle, type StatsRange } from "../components/stats/RangeToggle"
import type { SpendMixResponse } from "../types/api"

export function Stats() {
  const [range, setRange] = useState<StatsRange>("6m")
  const [data, setData] = useState<SpendMixResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)
    setError(null)

    spendMixApi
      .get(range)
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Something went wrong")
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [range])

  return (
    <div className="mx-auto max-w-2xl px-8 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-text">Spend mix</h1>
        <RangeToggle value={range} onChange={setRange} />
      </div>

      {isLoading && <p className="mt-8 text-sm text-text-muted">Loading…</p>}
      {error && <p className="mt-8 text-sm text-danger">{error}</p>}

      {data && !isLoading && !error && (
        data.totals.total === 0 ? (
          <p className="mt-8 text-sm text-text-muted">No spending in this period yet.</p>
        ) : (
          <div className="mt-8 space-y-10">
            <EssentialsFlexBar totals={data.totals} />
            <TopFlexCategories categories={data.topFlexCategories} />
          </div>
        )
      )}
    </div>
  )
}
