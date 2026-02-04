import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CashFlowResponse } from '@/types/analytics'

export type RangeOption = '3m' | '6m' | '12m'

type UseCashFlowHistoryOptions = {
  enabled?: boolean
  ttlMs?: number
}

type CachedPayload = {
  payload: CashFlowResponse
  storedAt: number
}

const DEFAULT_TTL = 1000 * 60 * 10 // 10 minutes
const STORAGE_PREFIX = 'gneisscash.cashFlow'

function makeStorageKey(range: RangeOption) {
  return `${STORAGE_PREFIX}.${range}`
}

function readCache(range: RangeOption, ttl: number): CashFlowResponse | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(makeStorageKey(range))
    if (!raw) return null
    const parsed = JSON.parse(raw) as CachedPayload
    if (!parsed?.payload || !parsed?.storedAt) return null
    const isStale = Date.now() - parsed.storedAt > ttl
    if (isStale) return null
    return parsed.payload
  } catch {
    return null
  }
}

function writeCache(range: RangeOption, payload: CashFlowResponse) {
  if (typeof window === 'undefined') return
  try {
    const cached: CachedPayload = {
      payload,
      storedAt: Date.now(),
    }
    window.localStorage.setItem(makeStorageKey(range), JSON.stringify(cached))
  } catch {
    // Ignore storage errors (quota, private mode, etc.)
  }
}

export function useCashFlowHistory(
  initialRange: RangeOption = '6m',
  options: UseCashFlowHistoryOptions = {}
) {
  const { enabled = true, ttlMs = DEFAULT_TTL } = options
  const [range, setRange] = useState<RangeOption>(initialRange)
  const [data, setData] = useState<CashFlowResponse | null>(() => readCache(initialRange, ttlMs))
  const [loading, setLoading] = useState<boolean>(!readCache(initialRange, ttlMs))
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const fetchData = useCallback(
    async (selectedRange: RangeOption, { bypassCache = false } = {}) => {
      if (!enabled) return

      if (!bypassCache) {
        const cached = readCache(selectedRange, ttlMs)
        if (cached) {
          setData(cached)
          setLoading(false)
          setError(null)
          return
        }
      }

      if (abortRef.current) {
        abortRef.current.abort()
      }

      const controller = new AbortController()
      abortRef.current = controller

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/cash-flow?range=${selectedRange}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          const message = await response.text()
          throw new Error(message || 'Failed to load cash flow history')
        }

        const payload = (await response.json()) as CashFlowResponse
        setData(payload)
        writeCache(selectedRange, payload)
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return
        }
        console.error('Failed to fetch cash flow history', err)
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    },
    [enabled, ttlMs]
  )

  useEffect(() => {
    if (!enabled) {
      setLoading(false)
      return
    }
    fetchData(range)

    return () => {
      abortRef.current?.abort()
    }
  }, [enabled, fetchData, range])

  const refresh = useCallback(() => {
    fetchData(range, { bypassCache: true })
  }, [fetchData, range])

  const lastPoint = useMemo(() => data?.points[data.points.length - 1], [data])
  const previousPoint = useMemo(() => data?.points[data.points.length - 2], [data])

  const netDelta = useMemo(() => {
    if (!lastPoint || !previousPoint) return null
    return Math.round((lastPoint.net - previousPoint.net) * 100) / 100
  }, [lastPoint, previousPoint])

  return {
    data,
    loading,
    error,
    range,
    setRange,
    refresh,
    lastPoint,
    previousPoint,
    netDelta,
  }
}

export type UseCashFlowHistoryReturn = ReturnType<typeof useCashFlowHistory>
