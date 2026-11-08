import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from './content'

const STORAGE_KEY = 'lang'

type Ctx = { lang: Lang; t: Content; setLang: (l: Lang) => void }
const LangContext = createContext<Ctx | null>(null)

function initialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get('lang')
  if (param === 'en' || param === 'np') return param
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'np') return saved
  } catch {
    /* storage unavailable */
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'np' ? 'ne' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  return <LangContext.Provider value={{ lang, t: content[lang], setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}

/** Renders a string, turning **bold** segments into <strong>. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-ink">
            {p}
          </strong>
        ) : (
          p
        ),
      )}
    </>
  )
}
