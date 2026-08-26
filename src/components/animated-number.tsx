'use client'

import { motion, useSpring, useTransform } from 'motion/react'
import { useEffect } from 'react'

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
  const spring = useSpring(value, {
    mass: 0.8,
    stiffness: 240,
    damping: 22,
  })

  const display = useTransform(spring, (current) =>
    `${prefix}${Math.round(current).toLocaleString()}${suffix}`
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span className={`tabular-nums ${className}`}>{display}</motion.span>
}
