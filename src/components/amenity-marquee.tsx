'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Waves,
  Mic,
  CircleDot,
  Gamepad2,
  Flame,
  Droplets,
  Dribbble,
  ChefHat,
  Mountain,
} from 'lucide-react'

export function AmenityMarquee() {
  const [isHovered, setIsHovered] = useState(false)

  const highlights = [
    { label: 'Private Swimming Pool & Waterfall', icon: Waves, tag: 'Included' },
    { label: 'Aircon Videoke Lounge & Microphones', icon: Mic, tag: 'Unlimited' },
    { label: 'Kangaroo Billiards Table', icon: CircleDot, tag: 'Free Play' },
    { label: 'Retro Arcade Machines', icon: Gamepad2, tag: 'No Coins' },
    { label: '8 Full Bathrooms', icon: Droplets, tag: 'Zero Queues' },
    { label: 'Sunken Bonfire Gathering Pit', icon: Flame, tag: 'Highland Night' },
    { label: 'Basketball Half-Court', icon: Dribbble, tag: 'On-Site' },
    { label: 'Full Kitchen & Cookware', icon: ChefHat, tag: '₱0 Corkage' },
    { label: 'Alfonso Mountain Breeze (18–24°C)', icon: Mountain, tag: '600m Elevation' },
  ]

  // Double list for seamless mathematical infinite loop
  const marqueeItems = [...highlights, ...highlights]

  return (
    <section className="relative w-full overflow-hidden bg-cream py-3 sm:py-4 border-y border-sand/30 shadow-xs">
      {/* Left and Right Cinematic Gradient Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-cream via-cream/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-cream via-cream/90 to-transparent z-10" />

      {/* Hardware-Accelerated 60fps Framer Motion Infinite Loop */}
      <div
        className="flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 32,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{
            display: 'flex',
            width: 'max-content',
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
          className="flex w-max space-x-4 sm:space-x-6 px-4"
        >
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.label}-${idx}`}
                className="flex items-center space-x-2.5 sm:space-x-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-ink/90 backdrop-blur-xl border border-sand/30 hover:border-gold/60 shadow-warm-sm text-cream text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 group cursor-default shrink-0"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-terra/25 border border-terra/40 flex items-center justify-center text-gold-light group-hover:scale-110 group-hover:bg-terra/35 transition-transform shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="whitespace-nowrap font-medium text-cream group-hover:text-gold-light transition-colors">
                  {item.label}
                </span>
                <span className="text-[10px] text-forest-light bg-forest/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-forest/30 whitespace-nowrap">
                  {item.tag}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
