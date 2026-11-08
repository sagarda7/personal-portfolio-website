import { ArrowRight, MapPin, Network, Star, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import { useLang } from '../i18n'

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* soft background */}
      <div className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 size-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/2 left-[-15%] -z-10 size-[420px] rounded-full bg-sky-100 blur-3xl" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50 px-3.5 py-1.5 text-sm font-medium text-primary-dark">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {h.badge}
          </div>

          <h1 className="text-4xl leading-[1.15] font-extrabold text-ink sm:text-5xl xl:text-6xl">
            {h.greeting}
            <span className={`block text-balance text-primary ${lang === 'np' ? 'xl:text-[3.2rem]' : ''}`}>
              {h.headline}
            </span>
            <span className="block text-balance text-3xl text-ink/90 sm:text-4xl xl:text-[2.6rem]">{h.headlineSub}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">{h.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {h.roles.map((r) => (
              <span
                key={r}
                className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-ink/80"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              {h.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              {h.ctaSecondary}
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-secondary sm:ml-2">
              <MapPin size={16} /> {h.location}
            </span>
          </div>
        </div>

        {/* Photo card: full desk photo at its natural (wide) aspect ratio */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-primary/25 to-sky-100" />
          <div className="overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-2xl shadow-slate-300/60">
            <img
              src="/images/hero-1400.jpg"
              srcSet="/images/hero-1400.jpg 1400w, /images/hero-2400.jpg 2400w"
              sizes="(min-width: 1024px) 560px, 100vw"
              alt={h.photoAlt}
              fetchPriority="high"
              className="aspect-[4273/3127] w-full object-cover"
            />
          </div>

          {/* <FloatBadge className="-top-6 left-4 sm:-left-8" icon={<Award size={18} />} text={h.badges.slc} /> */}
          <FloatBadge
            className="top-1/3 -right-3 sm:-right-8"
            icon={<Star size={18} className="fill-current" />}
            text={h.badges.rating}
            tone="success"
          />
          <FloatBadge className="bottom-10 -left-3 sm:-left-10" icon={<Users size={18} />} text={h.badges.fans} />
          <FloatBadge className="-bottom-6 right-4 sm:-right-6" icon={<Network size={18} />} text={h.badges.ccna} />
        </div>
      </div>

      {/* Stats */}
      <div className="container-page mt-16 lg:mt-20">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur sm:grid-cols-4">
          {t.stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-slate-200 px-4 py-6 text-center ${i < 2 ? 'border-b sm:border-b-0' : ''} ${
                i % 2 === 0 ? 'border-r' : ''
              } ${i < 3 ? 'sm:border-r' : 'sm:border-r-0'}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-primary">{s.value}</dd>
              <dd className="mt-1 text-sm text-secondary">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function FloatBadge({
  className,
  icon,
  text: [title, sub],
  tone = 'primary',
}: Readonly<{
  className: string
  icon: ReactNode
  text: string[]
  tone?: 'primary' | 'success'
}>) {
  return (
    <div
      className={`absolute hidden max-w-[20rem] items-center gap-3 rounded-xl border border-slate-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-200/70 backdrop-blur sm:flex ${className}`}
    >
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-lg ${
          tone === 'success' ? 'bg-success/10 text-success' : 'bg-primary-50 text-primary'
        }`}
      >
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-xs whitespace-nowrap text-secondary">{sub}</span>
      </span>
    </div>
  )
}
