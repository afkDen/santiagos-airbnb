import type { ReactNode } from 'react'

interface PageIntroProps {
  title: ReactNode
  description: string
  meta?: string
}

export function PageIntro({ title, description, meta }: PageIntroProps) {
  return (
    <header className="border-b border-sand-dark/70 pb-10 sm:pb-12">
      <div className="max-w-4xl space-y-5">
        {meta ? <p className="text-sm font-bold text-terra-dark">{meta}</p> : null}
        <h1 className="max-w-[15ch] font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
          {title}
        </h1>
        <p className="max-w-[65ch] text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </header>
  )
}
