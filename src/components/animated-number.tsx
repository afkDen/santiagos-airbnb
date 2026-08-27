'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView } from 'motion/react'

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
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, { duration: 0.7, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (isInView) {
      motionVal.set(value)
    }
  }, [isInView, motionVal, value])

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`
      }
    })
  }, [springVal, prefix, suffix])

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-live="polite">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}
