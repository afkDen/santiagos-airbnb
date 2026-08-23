'use client'

import { useState, useEffect } from 'react'
import { Play, X, Film } from 'lucide-react'

export function VideoTourModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-cream/15 hover:bg-cream/25 border border-sand/40 text-cream font-semibold text-sm rounded-full backdrop-blur-md transition-all duration-200 active:scale-95 shadow-sm group"
      >
        <Play className="w-4 h-4 text-gold fill-gold group-hover:scale-110 transition-transform" />
        <span>Watch 60s Video Tour</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in-0 duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-ink-soft rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-4 sm:p-6 space-y-4 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-cream px-2">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-lg font-bold">Santiagos Resort Video Walkthrough</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors"
                aria-label="Close Video Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src="https://drive.google.com/file/d/1f1u_JuPgRRNEjmTNMZfvg9KpugSRYgEO/preview"
                title="Santiagos Resort Full Video Tour"
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-sand-light/70 px-2 font-sans">
              <span>Full compound overview: pool deck, videoke lounge, dining hall, and rooms.</span>
              <span className="text-gold-light">Press Escape to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
