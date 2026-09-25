// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/components/LanguageSwitcher.tsx
// papel: Troca global PT/EN com confirmação explícita e persistência no shell do portfólio.
// validar: npm run typecheck && visual desktop + 375px
// DGX:ANCHOR: personal-portfolio-language-switcher

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import type { Language } from '../i18n'

type LanguageSwitcherProps = {
  language: Language
  onLanguageChange: (language: Language) => void
}

const ease = [0.16, 1, 0.3, 1] as const

const copy = {
  pt: {
    open: 'Abrir opções de idioma',
    current: 'Idioma atual',
    alternative: 'Mudar para inglês',
    confirmKicker: 'APRESENTAÇÃO BILÍNGUE',
    confirmTitle: 'Mudar para inglês?',
    confirmBody: 'A página e o currículo serão apresentados em inglês.',
    cancel: 'Continuar em português',
    confirm: 'Mudar para EN',
  },
  en: {
    open: 'Open language options',
    current: 'Current language',
    alternative: 'Switch to Portuguese',
    confirmKicker: 'BILINGUAL PRESENTATION',
    confirmTitle: 'Switch to Portuguese?',
    confirmBody: 'The page and curriculum will be presented in Portuguese.',
    cancel: 'Stay in English',
    confirm: 'Switch to PT',
  },
} as const

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const confirmRef = useRef<HTMLButtonElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pendingLanguage, setPendingLanguage] = useState<Language | null>(null)
  const current = language.toUpperCase()
  const alternative: Language = language === 'pt' ? 'en' : 'pt'
  const alternativeLabel = alternative.toUpperCase()
  const text = copy[language]

  useEffect(() => {
    if (!menuOpen) return

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer)
  }, [menuOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (pendingLanguage) {
        setPendingLanguage(null)
        return
      }
      setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [pendingLanguage])

  useEffect(() => {
    if (!pendingLanguage) return

    document.body.style.overflow = 'hidden'
    window.requestAnimationFrame(() => confirmRef.current?.focus())
    return () => {
      document.body.style.overflow = ''
    }
  }, [pendingLanguage])

  const requestLanguageChange = () => {
    setMenuOpen(false)
    setPendingLanguage(alternative)
  }

  const confirmLanguageChange = () => {
    if (!pendingLanguage) return
    onLanguageChange(pendingLanguage)
    setPendingLanguage(null)
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        className="language-trigger"
        type="button"
        aria-label={text.open}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="language-trigger-code">{current}</span>
        <span className="language-trigger-chevron" aria-hidden="true">⌄</span>
      </button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="language-menu"
            role="menu"
            aria-label={text.open}
            initial={reduced ? false : { opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
          >
            <div className="language-menu-current" role="presentation">
              <span>{current}</span>
              <small>{text.current}</small>
            </div>
            <button className="language-menu-option" type="button" role="menuitem" onClick={requestLanguageChange}>
              <span>{alternativeLabel}</span>
              <small>{text.alternative}</small>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence>
              {pendingLanguage ? (
                <motion.div
                  className="language-confirm-backdrop"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.22, ease }}
                >
                  <motion.div
                    className="language-confirm-card"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="language-confirm-title"
                    initial={reduced ? false : { opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduced ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.28, ease }}
                  >
                    <span className="language-confirm-kicker">{text.confirmKicker}</span>
                    <h2 id="language-confirm-title">{pendingLanguage === 'en' ? copy.pt.confirmTitle : copy.en.confirmTitle}</h2>
                    <p>{pendingLanguage === 'en' ? copy.pt.confirmBody : copy.en.confirmBody}</p>
                    <div className="language-confirm-actions">
                      <button className="language-cancel-button" type="button" onClick={() => setPendingLanguage(null)}>
                        {text.cancel}
                      </button>
                      <button className="language-confirm-button" type="button" onClick={confirmLanguageChange} ref={confirmRef}>
                        {pendingLanguage === 'en' ? copy.pt.confirm : copy.en.confirm}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  )
}
