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
  const highlights = [
    { label: 'Private Swimming Pool', icon: Waves },
    { label: 'Air-Conditioned Videoke Lounge', icon: Mic },
    { label: 'Kangaroo Billiards Table', icon: CircleDot },
    { label: 'Retro Arcade Machines', icon: Gamepad2 },
    { label: '8 Full Bathrooms (Zero Queues)', icon: Droplets },
    { label: 'Sunken Outdoor Bonfire Pit', icon: Flame },
    { label: 'Basketball Half-Court', icon: Dribbble },
    { label: 'Full Kitchen & Zero Corkage', icon: ChefHat },
    { label: 'Alfonso Mountain Breeze (18°C)', icon: Mountain },
  ]

  // Double list for smooth infinite scroll
  const marqueeItems = [...highlights, ...highlights]

  return (
    <div className="relative w-full overflow-hidden bg-ink-soft py-4 border-y border-sand/20">
      <div className="flex w-max animate-marquee space-x-8 text-cream">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide font-sans text-sand-light"
            >
              <div className="w-6 h-6 rounded-full bg-terra/20 flex items-center justify-center text-gold shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="whitespace-nowrap">{item.label}</span>
              <span className="text-gold/40 text-xs pl-2">•</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
