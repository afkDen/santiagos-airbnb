'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

interface StatCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function StatCounter({ value, suffix = '', duration = 1.6 }: StatCounterProps) {
  const [count, setCount] = useState<number>(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value)
      return
    }

    if (!isInView) return

    let start = 0
    const end = value
    const totalFrames = Math.round(duration * 60)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      // Ease-out cubic progression
      const progress = frame / totalFrames
      const easeOutProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(easeOutProgress * end)

      setCount(current)

      if (frame >= totalFrames) {
        clearInterval(counter)
        setCount(end)
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [isInView, value, duration, shouldReduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}
