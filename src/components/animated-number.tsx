interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedNumberProps) {
  return (
    <span className={`tabular-nums ${className}`} aria-live="polite">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}
