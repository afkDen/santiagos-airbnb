import type { ReactNode } from 'react'

interface PageIntroProps {
  title: ReactNode
  description: string
  meta?: string
}

export function PageIntro({ title, description, meta }: PageIntroProps) {
  return (
    <header className="border-b border-sand-dark/70 pb-8 sm:pb-10">
      <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-10">
        <h1 className="max-w-[13ch] font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink lg:col-span-7">
          {title}
        </h1>
        <div className="max-w-[65ch] space-y-4 lg:col-span-5 lg:border-l lg:border-sand-dark/70 lg:pl-7">
          <p className="text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
            {description}
          </p>
          {meta ? (
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-terra-dark">
              <span className="h-px w-8 bg-terra/55" aria-hidden="true" />
              {meta}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  )
}
