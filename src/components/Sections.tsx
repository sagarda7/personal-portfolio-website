import {
  ArrowUpRight,
  CircuitBoard,
  Award,
  BookOpen,
  Briefcase,
  CalendarDays,
  Cpu,
  Eye,
  GraduationCap,
  Heart,
  Mail,
  MessageCircle,
  Network,
  Newspaper,
  Play,
  Quote,
  Rocket,
  Star,
  Trophy,
  Wifi,
  Wrench,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { featuredComments, featuredVideo, links, reviews, videos, type Review, type TikTokComment } from '../data'
import { Rich, useLang } from '../i18n'
import Section from './Section'

/* ---------------------------------- About --------------------------------- */

const factIcons = [GraduationCap, Network, Briefcase, CalendarDays]

export function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <Section
      id="about"
      eyebrow={a.eyebrow}
      title={
        <>
          {a.title[0]}
          <span className="text-primary">{a.title[1]}</span>
          {a.title[2]}
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-lg leading-relaxed text-secondary">
          {a.paragraphs.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}
        </div>

        <ul className="grid content-start gap-3">
          {a.facts.map((f, i) => {
            const Icon = factIcons[i]
            return (
              <li key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium tracking-wide text-secondary uppercase">{f.label}</span>
                  <span className="block font-semibold text-ink">{f.value}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

/* -------------------------------- Experience ------------------------------ */

export function Experience() {
  const { t } = useLang()
  const x = t.experience
  return (
    <Section id="experience" eyebrow={x.eyebrow} title={x.title} intro={x.intro} tinted>
      <ol className="relative ml-3 border-l-2 border-slate-200">
        {x.items.map((e, i) => (
          <li key={i} className="relative mb-8 pl-8 last:mb-0">
            <span
              className={`absolute top-6 -left-[9px] size-4 rounded-full border-4 border-white ${
                e.current ? 'bg-success ring-4 ring-success/20' : 'bg-primary'
              }`}
            />
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-ink">{e.role}</h3>
                  <p className="font-medium text-primary-dark">
                    {e.org}
                    {e.place && <span className="font-normal text-secondary"> · {e.place}</span>}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    e.current ? 'bg-success/10 text-success' : 'bg-slate-100 text-secondary'
                  }`}
                >
                  {e.period}
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-secondary">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {p}
                  </li>
                ))}
              </ul>
              {'tags' in e && e.tags && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* -------------------------------- Highlights ------------------------------ */

const milestoneIcons = [Trophy, Award, Cpu, GraduationCap, Network, Rocket]

export function Highlights() {
  const { t } = useLang()
  const h = t.highlights
  return (
    <Section id="highlights" eyebrow={h.eyebrow} title={h.title} intro={h.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {h.items.map((m, i) => {
          const Icon = milestoneIcons[i] ?? Trophy
          const featured = i === h.items.length - 1
          return (
            <div
              key={i}
              className={`rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60 ${
                featured
                  ? 'border-primary/30 bg-gradient-to-br from-primary-50 to-white'
                  : 'border-slate-200 bg-white hover:border-primary/40'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`grid size-10 place-items-center rounded-lg ${
                    featured ? 'bg-primary text-white' : 'bg-primary-50 text-primary'
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-secondary">{m.year}</span>
              </div>
              <h3 className="text-lg font-bold text-ink">{m.title}</h3>
              {'sub' in m && m.sub && <p className="mt-1 text-sm font-semibold text-primary-dark">{m.sub}</p>}
              <p className="mt-1.5 text-secondary">{m.text}</p>
            </div>
          )
        })}
      </div>

      <figure className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.3fr_1fr]">
        <img
          src="/images/voting-machine.jpg"
          alt={h.voting.alt}
          className="aspect-[16/9] h-full w-full object-cover"
          loading="lazy"
        />
        <figcaption className="flex flex-col justify-center p-6 sm:p-8">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Newspaper size={16} /> {h.voting.tag}
          </p>
          <h3 className="text-xl font-bold text-ink sm:text-2xl">{h.voting.title}</h3>
          <p className="mt-3 leading-relaxed text-secondary">{h.voting.text}</p>
        </figcaption>
      </figure>
    </Section>
  )
}

/* --------------------------------- Awards --------------------------------- */

const awardImages = ['/images/award-science-exhibition.jpg', '/images/award-all-rounder.jpg']

export function Awards() {
  const { t } = useLang()
  const a = t.awards
  return (
    <Section id="awards" eyebrow={a.eyebrow} title={a.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {a.items.map((it, i) => (
          <a
            key={it.title}
            href={awardImages[i]}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50 p-6 sm:h-80">
              <img
                src={awardImages[i]}
                alt={it.alt}
                loading="lazy"
                className="h-full w-auto max-w-full rounded-md object-contain shadow-lg shadow-slate-300/60 transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Award size={16} /> {it.tag}
              </p>
              <h3 className="text-xl font-bold text-ink">{it.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary-dark">{it.org}</p>
              <p className="mt-3 text-secondary">{it.text}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary group-hover:text-primary-dark">
                {a.view} <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

/* ------------------------------- Publications ----------------------------- */

export function Publications() {
  const { t } = useLang()
  const p = t.publications
  const statIcons = [Eye, Heart, MessageCircle]
  return (
    <Section id="publications" eyebrow={p.eyebrow} title={p.title} tinted>
      <div className="grid gap-6 md:grid-cols-2">
        <PubCard
          img="/images/book.jpg"
          imgClass="object-[50%_42%]"
          alt={p.book.alt}
          tag={p.book.tag}
          icon={<BookOpen size={16} />}
          title={p.book.title}
          text={p.book.text}
        />
        <PubCard
          img="/images/led-matrix-clock.jpg"
          imgClass="object-center"
          alt={p.instructable.alt}
          tag={p.instructable.tag}
          icon={<Cpu size={16} />}
          title={p.instructable.title}
          text={p.instructable.text}
          href={links.instructables}
        >
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-secondary">
            {p.instructable.stats.map((s, i) => {
              const Icon = statIcons[i]
              return (
                <span key={s} className="inline-flex items-center gap-1.5">
                  <Icon size={15} className="text-primary" /> {s}
                </span>
              )
            })}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary group-hover:text-primary-dark">
            {p.instructable.cta} <ArrowUpRight size={16} />
          </span>
        </PubCard>
      </div>
    </Section>
  )
}

function PubCard({
  img,
  imgClass,
  alt,
  tag,
  icon,
  title,
  text,
  href,
  children,
}: {
  img: string
  imgClass: string
  alt: string
  tag: string
  icon: ReactNode
  title: string
  text: string
  href?: string
  children?: ReactNode
}) {
  const body = (
    <>
      <div className="overflow-hidden bg-slate-100">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className={`aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03] ${imgClass}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          {icon} {tag}
        </p>
        <h3 className="text-xl font-bold text-ink">{title}</h3>
        <p className="mt-2 text-secondary">{text}</p>
        {children}
      </div>
    </>
  )
  const cls =
    'group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-primary/40 hover:shadow-lg'
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <figure className={cls}>{body}</figure>
  )
}

/* -------------------------------- Expertise ------------------------------- */

export function Expertise() {
  const { t } = useLang()
  const x = t.expertise
  return (
    <Section id="expertise" eyebrow={x.eyebrow} title={x.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {x.items.map((it, i) => (
          <div
            key={it.title}
            className={`rounded-2xl border border-slate-200 bg-white p-6 ${
              i === x.items.length - 1 && x.items.length % 3 === 1 ? 'sm:col-span-2 lg:col-span-3' : ''
            }`}
          >
            <h3 className="text-lg font-bold text-ink">{it.title}</h3>
            <p className="mt-2 text-secondary">{it.text}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {it.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-dark">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------- Tech Asdy ------------------------------- */

const pointIcons = [CircuitBoard, Wifi, Wrench, GraduationCap]

export function TechAsdy() {
  const { t } = useLang()
  const m = t.techasdy
  return (
    <section id="techasdy" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary-50 via-white to-white p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
          <div>
            <img src="/images/techasdy-logo.png" alt={m.logoAlt} className="mb-8 h-14 w-auto" />
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">{m.eyebrow}</p>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">{m.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary">
              <Rich text={m.text} />
            </p>
            <ul className="mt-6 space-y-3">
              {m.points.map((p, i) => {
                const Icon = pointIcons[i]
                return (
                  <li key={p} className="flex items-start gap-3 text-ink">
                    <Icon size={18} className="mt-0.5 shrink-0 text-success" />
                    {p}
                  </li>
                )
              })}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-black"
              >
                <TikTokIcon /> {m.follow}
              </a>
              <a
                href={links.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-6 py-3 font-semibold text-white transition hover:bg-[#d90000]"
              >
                <YouTubeIcon /> {m.subscribe}
              </a>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-slate-300/50">
              <img
                src="/images/pick-and-place.png"
                alt={m.machineAlt}
                className="aspect-[3/4] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <figcaption className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink shadow-md">
              {m.machineCaption}
            </figcaption>
          </figure>
        </div>

        {/* Featured video + comments */}
        <div className="mt-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-ink">
                <Play size={22} className="fill-primary text-primary" /> {m.featuredTitle}
              </h3>
              <p className="mt-1 text-secondary">{m.featuredText}</p>
            </div>
            <a
              href={`${links.tiktok}/video/${featuredVideo}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-dark"
            >
              {m.watchOnTikTok} <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-lg">
              <TikTokPlayer id={featuredVideo} title={m.featuredTitle} />
            </div>

            {/* TikTok-style comment panel */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-[#121212] text-white shadow-lg">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="font-semibold">{m.commentsTitle}</p>
                  <p className="text-xs text-white/55">{m.commentsCount}</p>
                </div>
                <TikTokIcon size={18} />
              </div>
              <ul className="flex-1 space-y-6 px-5 py-5">
                {featuredComments.map((c) => (
                  <CommentRow key={c.name} c={c} reply={m.reply} liked={m.likedByCreator} />
                ))}
              </ul>
              <p className="border-t border-white/10 px-5 py-3 text-xs text-white/50">{m.commentsNote}</p>
            </div>
          </div>
        </div>

        {/* More videos */}
        <div className="mt-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-ink">{m.videosTitle}</h3>
              <p className="mt-1 text-secondary">{m.videosText}</p>
            </div>
            <a
              href={links.tiktok}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-dark"
            >
              @techasdysolution <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
            {videos
              .filter((id) => id !== featuredVideo)
              .map((id, i) => (
                <div
                  key={id}
                  className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm"
                >
                  <TikTokPlayer id={id} title={`${m.videoTitle} ${i + 1}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TikTokPlayer({ id, title }: Readonly<{ id: string; title: string }>) {
  return (
    <iframe
      src={`https://www.tiktok.com/player/v1/${id}?music_info=1&description=1&rel=0`}
      title={title}
      className="aspect-[9/16] w-full"
      loading="lazy"
      allow="encrypted-media; fullscreen; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}

function CommentRow({ c, reply, liked }: Readonly<{ c: TikTokComment; reply: string; liked: string }>) {
  return (
    <li className="flex gap-3">
      {c.avatar ? (
        <img src={c.avatar} alt="" className="size-10 shrink-0 rounded-full object-cover" loading="lazy" />
      ) : (
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full font-semibold text-white"
          style={{ backgroundColor: c.avatarColor }}
        >
          {c.name[0]}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white/55">{c.name}</p>
        <p className="mt-1 leading-relaxed break-words text-white/90">
          {c.mention && <span className="font-medium text-[#8ab4f8]">{c.mention} </span>}
          {c.text}
        </p>
        <div className="mt-2 flex items-center gap-4 text-sm text-white/45">
          <span>{c.date}</span>
          <span>{reply}</span>
          {c.likedByCreator && (
            <span className="inline-flex items-center gap-1.5 text-xs" title={liked}>
              <span className="relative">
                <img src="/images/techasdy-logo.png" alt="" className="size-5 rounded-full bg-white object-contain p-px" />
                <Heart size={10} className="absolute -right-1 -bottom-1 fill-[#fe2c55] text-[#fe2c55]" />
              </span>
              <span className="sr-only sm:not-sr-only">{liked}</span>
            </span>
          )}
        </div>
      </div>
    </li>
  )
}

function WhatsAppIcon({ size = 18 }: Readonly<{ size?: number }>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.44-5.02c0-5.21 4.24-9.45 9.46-9.45a9.4 9.4 0 0 1 6.69 2.77 9.4 9.4 0 0 1 2.77 6.69c0 5.21-4.24 9.45-9.46 9.45m8.05-17.5A11.3 11.3 0 0 0 12.05.67C5.78.67.67 5.77.67 12.05c0 2 .52 3.96 1.52 5.69L.57 23.33l5.71-1.5a11.35 11.35 0 0 0 5.77 1.47c6.27 0 11.38-5.1 11.38-11.38 0-3.04-1.18-5.9-3.33-8.05" />
    </svg>
  )
}

function YouTubeIcon({ size = 18 }: Readonly<{ size?: number }>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.34-2.48V9.66a5.68 5.68 0 0 0-.75-.05 5.67 5.67 0 0 0-5.67 5.67A5.67 5.67 0 0 0 9.86 21a5.67 5.67 0 0 0 5.67-5.67V9.01a7.33 7.33 0 0 0 4.29 1.38V7.3a4.28 4.28 0 0 1-3.22-1.48Z" />
    </svg>
  )
}

/* -------------------------------- Workshops ------------------------------- */

const flags = ['🇳🇵', '🇸🇬', '🇲🇾', '🇹🇭']

export function Workshops() {
  const { t } = useLang()
  const w = t.workshops
  return (
    <section className="pb-20 sm:pb-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-slate-200 bg-white p-8 md:flex-row md:items-center">
          <div className="max-w-md">
            <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">{w.eyebrow}</p>
            <h2 className="text-2xl font-bold text-ink">{w.title}</h2>
            <p className="mt-2 text-secondary">{w.text}</p>
          </div>
          <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 md:w-auto">
            {w.countries.map((c, i) => (
              <li
                key={c}
                className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <span className="text-3xl" aria-hidden>
                  {flags[i]}
                </span>
                <span className="text-sm font-semibold text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------- Reviews -------------------------------- */

export function Reviews() {
  const { t } = useLang()
  const r = t.reviews
  return (
    <Section
      id="reviews"
      eyebrow={r.eyebrow}
      title={
        <>
          {r.title[0]}
          <span className="text-primary">{r.title[1]}</span>
          {r.title[2]}
        </>
      }
      intro={r.intro}
      tinted
    >
      <div className="gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {reviews.map((rv, i) => (
          <ReviewCard key={i} review={rv} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href={links.freelancer}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-ink transition hover:border-primary hover:text-primary"
        >
          <Star size={18} className="fill-success text-success" /> {r.cta} <ArrowUpRight size={16} />
        </a>
      </div>
    </Section>
  )
}

function ReviewCard({ review: r }: { review: Review }) {
  return (
    <figure lang="en" className="mb-5 break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        {r.avatar ? (
          <img src={r.avatar} alt="" className="size-11 rounded-full border border-slate-200 object-cover" />
        ) : (
          <span className="grid size-11 place-items-center rounded-full bg-primary text-lg font-semibold text-white">
            {r.name[0]}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-ink">
            {r.name}{' '}
            <span className="text-sm font-normal text-secondary">
              <span aria-hidden>{r.flag}</span> {r.country}
            </span>
          </p>
          <p className="flex items-center gap-1 text-sm font-semibold text-success">
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }, (_, k) => (
                <Star
                  key={k}
                  size={13}
                  className={k < Math.round(r.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}
                />
              ))}
            </span>
            {r.rating.toFixed(1)}
          </p>
        </div>
        <Quote className="shrink-0 text-primary/25" size={28} />
      </div>
      <p className="mt-4 text-sm font-semibold text-ink">{r.project}</p>
      <blockquote className="mt-1.5 leading-relaxed text-secondary">“{r.text}”</blockquote>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {r.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-secondary">
            {tag}
          </span>
        ))}
      </div>
    </figure>
  )
}

/* --------------------------------- Contact -------------------------------- */

export function Contact() {
  const { t } = useLang()
  const c = t.contact
  const extra = [
    { href: links.freelancer, label: 'Freelancer' },
    links.linkedin && { href: links.linkedin, label: 'LinkedIn' },
    links.youtube && { href: links.youtube, label: 'YouTube' },
    links.github && { href: links.github, label: 'GitHub' },
    links.facebook && { href: links.facebook, label: 'Facebook' },
  ].filter(Boolean) as { href: string; label: string }[]

  const ghost =
    'inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10'

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-12">
          <div className="grid-bg absolute inset-0 opacity-40 [filter:brightness(4)]" />
          <div className="relative">
            <Mail className="mx-auto mb-5 opacity-90" size={36} />
            <h2 className="text-3xl font-bold sm:text-4xl">{c.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{c.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-dark transition hover:bg-primary-50"
              >
                <Mail size={18} /> {c.email}
              </a>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className={ghost}>
                <WhatsAppIcon /> {c.whatsapp}
              </a>
              <a href={links.tiktok} target="_blank" rel="noreferrer" className={ghost}>
                <TikTokIcon /> {c.tiktok}
              </a>
              {extra.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={ghost}>
                  {l.label} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
            <p className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-white/85">
              <a href={`mailto:${links.email}`} className="hover:text-white">
                {links.email}
              </a>
              <span aria-hidden>·</span>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp {links.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-secondary sm:flex-row">
        <p>
          © {new Date().getFullYear()} {t.name}. {t.footer.rights}
        </p>
        <p>{t.footer.made} 🇳🇵</p>
      </div>
    </footer>
  )
}
