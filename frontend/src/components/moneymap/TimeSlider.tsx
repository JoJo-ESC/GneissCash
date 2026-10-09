import { ChevronLeft, ChevronRight } from "lucide-react"

interface TimeSliderProps {
  availableMonths: string[] // ascending "YYYY-MM"
  selectedMonth: string | null // null = all time
  onSelectMonth: (month: string | null) => void
}

function formatMonthLabel(month: string): string {
  const [year, monthNum] = month.split("-").map(Number)
  return new Date(year, monthNum - 1, 1).toLocaleDateString("en-US", { month: "short", year: "2-digit" })
}

export function TimeSlider({ availableMonths, selectedMonth, onSelectMonth }: TimeSliderProps) {
  if (availableMonths.length === 0) return null

  const positions: (string | null)[] = [null, ...availableMonths]
  const currentIndex = selectedMonth === null ? 0 : positions.indexOf(selectedMonth)
  // Thin out tick labels once there are many months, so they don't overlap —
  // always keep the current position labeled regardless of stride.
  const labelStride = Math.max(1, Math.ceil(positions.length / 8))

  const step = (delta: number) => {
    const nextIndex = Math.min(positions.length - 1, Math.max(0, currentIndex + delta))
    onSelectMonth(positions[nextIndex])
  }

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 border-t border-border bg-bg/90 px-6 py-3 backdrop-blur">
      <button
        type="button"
        onClick={() => step(-1)}
        disabled={currentIndex === 0}
        aria-label="Previous period"
        className="text-text-muted transition-colors hover:text-text disabled:opacity-30"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex flex-1 flex-col gap-1">
        <input
          type="range"
          min={0}
          max={positions.length - 1}
          step={1}
          value={currentIndex}
          onChange={(event) => onSelectMonth(positions[Number(event.target.value)])}
          className="w-full accent-accent"
          aria-label="Time period"
        />
        <div className="flex justify-between text-[10px] text-text-muted">
          {positions.map((position, index) => {
            const isCurrent = index === currentIndex
            if (index % labelStride !== 0 && !isCurrent) return <span key={position ?? "all"} />
            return (
              <span key={position ?? "all"} className={isCurrent ? "font-semibold text-accent" : ""}>
                {position === null ? "All" : formatMonthLabel(position)}
              </span>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => step(1)}
        disabled={currentIndex === positions.length - 1}
        aria-label="Next period"
        className="text-text-muted transition-colors hover:text-text disabled:opacity-30"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
