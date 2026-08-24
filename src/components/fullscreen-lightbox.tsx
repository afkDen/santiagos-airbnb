'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface FullscreenLightboxProps {
  isOpen: boolean
  onClose: () => void
  src: string | null
  title?: string
  subtitle?: string
  category?: string
  index?: number
  total?: number
  onPrev?: () => void
  onNext?: () => void
  actionButton?: React.ReactNode
  caption?: string
}

export function FullscreenLightbox({
  isOpen,
  onClose,
  src,
  title,
  subtitle,
  category,
  index,
  total,
  onPrev,
  onNext,
  actionButton,
  caption,
}: FullscreenLightboxProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll and listen for Escape and Arrow keys
  useEffect(() => {
    if (!isOpen || !src) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow || 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, src, onClose, onNext, onPrev])

  if (!mounted || !isOpen || !src) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in-0 duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full h-full flex flex-col justify-between bg-ink-soft rounded-2xl sm:rounded-3xl overflow-hidden border border-sand/30 shadow-2xl p-3 sm:p-5 space-y-2 animate-in zoom-in-95 ease-[cubic-bezier(0.23,1,0.32,1)] duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between text-cream px-2 shrink-0">
          <div className="space-y-0.5">
            {(category || (index !== undefined && total !== undefined)) && (
              <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider block">
                {category ? category : 'HD Photo'}
                {index !== undefined && total !== undefined && ` • Photo ${index + 1} of ${total}`}
              </span>
            )}
            {title && (
              <h3 className="text-sm sm:text-base font-semibold truncate max-w-[240px] sm:max-w-none">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-sand-light/80 line-clamp-1">{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-sand-light hover:text-white rounded-full bg-cream/10 hover:bg-cream/20 transition-colors active:scale-95 shrink-0"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Viewport */}
        <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-black/80 flex items-center justify-center min-h-0">
          <Image
            src={src}
            alt={title || 'Santiago Resort HD Photography'}
            fill
            sizes="95vw"
            className="object-contain"
            priority
          />

          {/* Previous Arrow */}
          {onPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="absolute left-2 sm:left-4 p-2.5 sm:p-3 rounded-full bg-ink/75 hover:bg-ink text-white backdrop-blur-md border border-sand/30 shadow-lg active:scale-95 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Arrow */}
          {onNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-2 sm:right-4 p-2.5 sm:p-3 rounded-full bg-ink/75 hover:bg-ink text-white backdrop-blur-md border border-sand/30 shadow-lg active:scale-95 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-sand-light/70 font-sans shrink-0 border-t border-sand/15 pt-2">
          <span>{caption || (onPrev || onNext ? 'Swipe or use Arrow keys to navigate' : 'Tap outside or press Escape to close')}</span>
          {actionButton ? (
            actionButton
          ) : (
            <span className="text-gold-light">Press Escape to close</span>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
