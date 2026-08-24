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
      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text shadow-[var(--shadow-field)] placeholder:text-text-muted focus:border-accent focus:outline-none focus:shadow-[var(--shadow-field-focus)]"
    />
  )
}
