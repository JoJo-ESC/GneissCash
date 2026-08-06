interface PillFieldProps {
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  autoComplete?: string
}

export function PillField({ type = "text", value, onChange, placeholder, autoComplete }: PillFieldProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
      className="w-full rounded-full border-2 border-gold bg-cream-soft py-3 pr-7 pl-9 text-sm text-ink-soft shadow-[var(--shadow-field)] placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-gold focus:shadow-[var(--shadow-field-focus)]"
    />
  )
}
