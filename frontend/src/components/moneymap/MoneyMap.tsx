import { useMemo, useState } from "react"
import type { MoneyMapData, MoneyNode } from "../../lib/moneyMap"
import { MoneyMapGraph } from "./MoneyMapGraph"

interface MoneyMapProps {
  data: MoneyMapData
}

const ROOT = "root"

export function MoneyMap({ data }: MoneyMapProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const childrenByParent = useMemo(() => {
    const map = new Map<string, MoneyNode[]>()
    for (const node of data.nodes) {
      const key = node.parentId ?? ROOT
      const siblings = map.get(key) ?? []
      siblings.push(node)
      map.set(key, siblings)
    }
    return map
  }, [data.nodes])

  const expandableIds = useMemo(
    () => new Set(Array.from(childrenByParent.keys()).filter((key) => key !== ROOT)),
    [childrenByParent]
  )

  const visibleNodes = useMemo(() => {
    const result: MoneyNode[] = []
    const queue = [...(childrenByParent.get(ROOT) ?? [])]
    while (queue.length > 0) {
      const node = queue.shift()!
      result.push(node)
      if (expanded.has(node.id)) queue.push(...(childrenByParent.get(node.id) ?? []))
    }
    return result
  }, [childrenByParent, expanded])

  const visibleLinks = useMemo(() => {
    const visibleIds = new Set(visibleNodes.map((node) => node.id))
    return data.links.filter((link) => visibleIds.has(link.source) && visibleIds.has(link.target))
  }, [data.links, visibleNodes])

  const handleNodeClick = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
        const stack = [...(childrenByParent.get(id) ?? [])]
        while (stack.length > 0) {
          const descendant = stack.pop()!
          next.delete(descendant.id)
          stack.push(...(childrenByParent.get(descendant.id) ?? []))
        }
      } else {
        next.add(id)
      }
      return next
    })
  }

  if (data.nodes.length === 0) {
    return <p className="font-display text-sm text-ink-soft">No transaction data yet to map.</p>
  }

  return (
    <div>
      <MoneyMapGraph
        nodes={visibleNodes}
        links={visibleLinks}
        expandableIds={expandableIds}
        onNodeClick={handleNodeClick}
      />
      <p className="mt-3 text-center font-display text-xs text-ink-soft">
        Click an account or category to expand it — click again to collapse. Drag to reposition, scroll to zoom.
      </p>
    </div>
  )
}
