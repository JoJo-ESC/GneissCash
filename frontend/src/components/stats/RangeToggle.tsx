export type StatsRange = "3m" | "6m" | "12m"

interface RangeToggleProps {
  value: StatsRange
  onChange: (value: StatsRange) => void
}

const OPTIONS: { value: StatsRange; label: string }[] = [
  { value: "3m", label: "3M" },
  { value: "6m", label: "6M" },
  { value: "12m", label: "12M" },
]

export function RangeToggle({ value, onChange }: RangeToggleProps) {
  return (
    <div className="flex gap-1 rounded-xl bg-surface p-1">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
            value === option.value
              ? "bg-bg text-text shadow-[var(--shadow-button)]"
              : "text-text-muted hover:text-text"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
