import { useMemo, useState } from "react"
import type { MoneyMapData, MoneyNode } from "../../lib/moneyMap"
import { MoneyMapGraph } from "./MoneyMapGraph"
import { NodeStatsCard } from "./NodeStatsCard"
import { MoneyMapLegend } from "./MoneyMapLegend"

interface MoneyMapProps {
  data: MoneyMapData
}

const ROOT = "root"

export function MoneyMap({ data }: MoneyMapProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [selectedId, setSelectedId] = useState<string | null>(null)

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
    setSelectedId((current) => (current === id ? null : id))

    if (!expandableIds.has(id)) return

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
    return <p className="p-8 text-sm text-text-muted">No transaction data yet to map.</p>
  }

  const selectedNode = selectedId ? data.nodes.find((node) => node.id === selectedId) ?? null : null

  return (
    <div className="relative h-full w-full">
      <MoneyMapGraph
        nodes={visibleNodes}
        links={visibleLinks}
        expandableIds={expandableIds}
        selectedId={selectedId}
        onNodeClick={handleNodeClick}
      />
      <MoneyMapLegend />
      {selectedNode && (
        <NodeStatsCard node={selectedNode} allNodes={data.nodes} allLinks={data.links} onClose={() => setSelectedId(null)} />
      )}
    </div>
  )
}
