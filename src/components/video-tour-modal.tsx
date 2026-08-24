'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Play, X, Film } from 'lucide-react'

export function VideoTourModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow || 'unset'
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

      {mounted && isOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in-0 duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full h-full flex flex-col justify-between bg-ink-soft rounded-2xl sm:rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-3 sm:p-5 space-y-2 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between text-cream px-2 shrink-0">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-base sm:text-lg font-bold">
                  Santiagos Resort Video Walkthrough
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors active:scale-95"
                aria-label="Close Video Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-black shadow-inner min-h-0">
              <iframe
                src="https://drive.google.com/file/d/1f1u_JuPgRRNEjmTNMZfvg9KpugSRYgEO/preview"
                title="Santiagos Resort Full Video Tour"
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-xs text-sand-light/70 px-2 font-sans shrink-0 border-t border-sand/15 pt-2">
              <span className="truncate">
                Full compound overview: pool deck, videoke lounge, dining hall, and rooms.
              </span>
              <span className="text-gold-light shrink-0">Press Escape to close</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
