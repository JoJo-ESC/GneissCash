import { useEffect, useRef } from "react"
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force"
import { select } from "d3-selection"
import { drag } from "d3-drag"
import { zoom } from "d3-zoom"
import { scaleSqrt } from "d3-scale"
import type { MoneyLink, MoneyNode, MoneyNodeType } from "../../lib/moneyMap"

interface SimNode extends MoneyNode, SimulationNodeDatum {}
interface SimLink extends SimulationLinkDatum<SimNode> {
  value: number
}

const NODE_COLOR: Record<MoneyNodeType, string> = {
  income: "var(--color-sun-core)",
  account: "var(--color-rust)",
  category: "var(--color-gold)",
  merchant: "var(--color-sun-outer)",
}

interface MoneyMapGraphProps {
  nodes: MoneyNode[]
  links: MoneyLink[]
  expandableIds: Set<string>
  onNodeClick: (id: string) => void
}

export function MoneyMapGraph({ nodes, links, expandableIds, onNodeClick }: MoneyMapGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const positionsRef = useRef(new Map<string, { x: number; y: number }>())
  const onNodeClickRef = useRef(onNodeClick)
  onNodeClickRef.current = onNodeClick

  useEffect(() => {
    const container = containerRef.current
    const svgEl = svgRef.current
    if (!container || !svgEl) return

    const width = container.clientWidth
    const height = container.clientHeight

    const maxValue = Math.max(1, ...nodes.map((node) => node.value))
    const radiusScale = scaleSqrt().domain([0, maxValue]).range([8, 56])
    const maxLinkValue = Math.max(1, ...links.map((link) => link.value))

    const simNodes: SimNode[] = nodes.map((node) => {
      const saved = positionsRef.current.get(node.id) ?? (node.parentId ? positionsRef.current.get(node.parentId) : undefined)
      return {
        ...node,
        x: saved ? saved.x + (Math.random() - 0.5) * 20 : width / 2 + (Math.random() - 0.5) * 40,
        y: saved ? saved.y + (Math.random() - 0.5) * 20 : height / 2 + (Math.random() - 0.5) * 40,
      }
    })

    const nodeById = new Map(simNodes.map((node) => [node.id, node]))
    const simLinks: SimLink[] = links
      .filter((link) => nodeById.has(link.source) && nodeById.has(link.target))
      .map((link) => ({ source: nodeById.get(link.source)!, target: nodeById.get(link.target)!, value: link.value }))

    const simulation = forceSimulation(simNodes)
      .force(
        "link",
        forceLink<SimNode, SimLink>(simLinks)
          .id((node) => node.id)
          .distance((link) => 130 - 80 * (link.value / maxLinkValue))
          .strength(0.5)
      )
      .force(
        "charge",
        forceManyBody<SimNode>().strength((node) => -60 - radiusScale(node.value) * 4)
      )
      .force("center", forceCenter(width / 2, height / 2))
      .force(
        "collide",
        forceCollide<SimNode>((node) => radiusScale(node.value) + 14)
      )

    const svg = select(svgEl)
    svg.selectAll("*").remove()

    const root = svg.append("g")

    svg.call(
      zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.3, 3])
        .on("zoom", (event) => {
          root.attr("transform", event.transform.toString())
        })
    )

    const link = root
      .append("g")
      .attr("stroke", "var(--color-gold)")
      .attr("stroke-opacity", 0.35)
      .selectAll("line")
      .data(simLinks)
      .join("line")
      .attr("stroke-width", (d) => Math.max(1, Math.sqrt(d.value) / 6))

    const nodeGroup = root
      .append("g")
      .selectAll<SVGGElement, SimNode>("g")
      .data(simNodes, (d) => d.id)
      .join("g")
      .attr("cursor", (d) => (expandableIds.has(d.id) ? "pointer" : "default"))
      .on("click", (_event, d) => {
        if (expandableIds.has(d.id)) onNodeClickRef.current(d.id)
      })
      .call(
        drag<SVGGElement, SimNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on("drag", (event, d) => {
            d.fx = event.x
            d.fy = event.y
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
          })
      )

    nodeGroup
      .append("circle")
      .attr("r", (d) => radiusScale(d.value))
      .attr("fill", (d) => NODE_COLOR[d.type])
      .attr("fill-opacity", (d) => (expandableIds.has(d.id) ? 1 : 0.85))
      .attr("stroke", "var(--color-ink)")
      .attr("stroke-opacity", 0.15)

    nodeGroup
      .append("text")
      .text((d) => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", (d) => radiusScale(d.value) + 14)
      .attr("font-size", 11)
      .attr("font-family", "var(--font-display)")
      .attr("fill", "var(--color-ink)")
      .attr("pointer-events", "none")

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as SimNode).x!)
        .attr("y1", (d) => (d.source as SimNode).y!)
        .attr("x2", (d) => (d.target as SimNode).x!)
        .attr("y2", (d) => (d.target as SimNode).y!)

      nodeGroup.attr("transform", (d) => `translate(${d.x},${d.y})`)
    })

    return () => {
      simulation.on("tick", null)
      simulation.stop()
      for (const node of simNodes) {
        positionsRef.current.set(node.id, { x: node.x!, y: node.y! })
      }
    }
  }, [nodes, links, expandableIds])

  return (
    <div ref={containerRef} className="h-[600px] w-full rounded-2xl border-2 border-gold bg-cream-soft shadow-[var(--shadow-field)]">
      <svg ref={svgRef} className="h-full w-full" />
    </div>
  )
}
