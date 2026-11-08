import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLang } from '../i18n'

export default function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#highlights', label: t.nav.highlights },
    { href: '#publications', label: t.nav.publications },
    { href: '#techasdy', label: t.nav.techasdy },
    { href: '#reviews', label: t.nav.reviews },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? 'border-b border-slate-200/80 bg-white/90 shadow-sm' : 'bg-white/60'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 font-display text-lg font-bold">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-white">SD</span>
          <span className="hidden sm:inline">
            Sagar <span className="text-primary">Devkota</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-2.5 py-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition hover:bg-primary-dark sm:inline-block"
          >
            {t.nav.contact}
          </a>
          <button
            className="rounded-md p-2 text-ink lg:hidden"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {[...links, { href: '#contact', label: t.nav.contact }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-medium text-ink hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div
      role="group"
      aria-label={t.nav.switchTo}
      title={t.nav.switchTo}
      className="flex rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold"
    >
      {(['en', 'np'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition ${
            lang === l ? 'bg-primary text-white' : 'text-secondary hover:text-primary'
          }`}
        >
          {l === 'en' ? 'EN' : 'NP'}
        </button>
      ))}
    </div>
  )
}
