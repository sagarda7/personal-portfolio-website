import type { ReactNode } from 'react'

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tinted = false,
}: {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: string
  children: ReactNode
  tinted?: boolean
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${tinted ? 'bg-slate-50/80' : ''}`}>
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-secondary">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
