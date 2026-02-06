import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { SpendMixResponse } from '@/types/analytics'
import type { RangeOption } from './useCashFlowHistory'

type UseSpendMixOptions = {
  enabled?: boolean
  ttlMs?: number
}

type CachedPayload = {
  payload: SpendMixResponse
  storedAt: number
}

const DEFAULT_TTL = 1000 * 60 * 10 // 10 minutes
const STORAGE_PREFIX = 'gneisscash.spendMix'

function makeStorageKey(range: RangeOption) {
  return `${STORAGE_PREFIX}.${range}`
}

function readCache(range: RangeOption, ttl: number): SpendMixResponse | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(makeStorageKey(range))
    if (!raw) return null
    const parsed = JSON.parse(raw) as CachedPayload
    if (!parsed?.payload || !parsed?.storedAt) return null
    if (Date.now() - parsed.storedAt > ttl) return null
    return parsed.payload
  } catch (error) {
    console.warn('Failed to read spend mix cache', error)
    return null
  }
}

function writeCache(range: RangeOption, payload: SpendMixResponse) {
  if (typeof window === 'undefined') return
  try {
    const cached: CachedPayload = {
      payload,
      storedAt: Date.now(),
    }
    window.localStorage.setItem(makeStorageKey(range), JSON.stringify(cached))
  } catch (error) {
    console.warn('Failed to persist spend mix cache', error)
  }
}

export function useSpendMix(initialRange: RangeOption = '6m', options: UseSpendMixOptions = {}) {
  const { enabled = true, ttlMs = DEFAULT_TTL } = options
  const [range, setRange] = useState<RangeOption>(initialRange)
  const [data, setData] = useState<SpendMixResponse | null>(() => readCache(initialRange, ttlMs))
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
        const response = await fetch(`/api/spend-mix?range=${selectedRange}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          const message = await response.text()
          throw new Error(message || 'Failed to load spend mix')
        }

        const payload = (await response.json()) as SpendMixResponse
        setData(payload)
        writeCache(selectedRange, payload)
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return
        }
        console.error('Failed to fetch spend mix', err)
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

  const essentialShare = useMemo(() => (data ? data.totals.essentialPct : null), [data])
  const flexShare = useMemo(() => (data ? data.totals.flexPct : null), [data])

  return {
    data,
    loading,
    error,
    range,
    setRange,
    refresh,
    essentialShare,
    flexShare,
  }
}

export type UseSpendMixReturn = ReturnType<typeof useSpendMix>
