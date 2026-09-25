// DGX FILE HEADER
// nivel: L2-small
// arquivo: src/components/SiteHeader.tsx
// papel: Pílula de navegação desacoplada do hero; aparece só depois do scroll.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-site-header

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { headerCopy, type Language } from '../i18n'
import { Icon } from '../icons'

type SiteHeaderProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  isCurriculum?: boolean
  isGovernance?: boolean
  isAiEngineering?: boolean
  onOpenGovernance?: () => void
  onOpenAiEngineering?: () => void
  language: Language
  onLanguageChange: (language: Language) => void
  visible?: boolean
}

const ease = [0.16, 1, 0.3, 1] as const

export function SiteHeader({
  onOpenCurriculum,
  onHome,
  isCurriculum = false,
  isGovernance = false,
  isAiEngineering = false,
  onOpenGovernance,
  onOpenAiEngineering,
  language,
  onLanguageChange,
  visible = true,
}: SiteHeaderProps) {
  const reduced = useReducedMotion()
  const copy = headerCopy[language]

  return (
    <AnimatePresence>
      {visible ? (
        <motion.header
          className="site-header site-header-pill"
          initial={reduced ? false : { opacity: 0, y: -18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="nav-shell nav-shell-armed">
            <button className="brand-lockup" type="button" onClick={() => onHome()}>
              <span className="brand-name">Dyllan</span>
            </button>

            <nav className="nav-links" aria-label={copy.navigation}>
              {isGovernance ? (
                <button className="nav-text-button" type="button" onClick={() => onHome()}>
                  {copy.cybersecurity}
                </button>
              ) : isAiEngineering ? (
                <button className="nav-text-button" type="button" onClick={() => onHome()}>
                  {copy.portfolio}
                </button>
              ) : isCurriculum ? (
                <button className="nav-text-button" type="button" onClick={() => onHome()}>
                  {copy.portfolio}
                </button>
              ) : (
                <>
                  <button className="nav-text-button" type="button" onClick={() => onHome('perfil')}>
                    {copy.about}
                  </button>
                  <button className="nav-text-button" type="button" onClick={() => onHome('experiencia')}>
                    {copy.experience}
                  </button>
                  <button className="nav-text-button" type="button" onClick={() => onHome('competencias')}>
                    {copy.skills}
                  </button>
                </>
              )}
              {onOpenGovernance && !isGovernance ? (
                <button className="nav-text-button" type="button" onClick={onOpenGovernance}>
                  {copy.governance}
                </button>
              ) : null}
              {onOpenAiEngineering && !isAiEngineering ? (
                <button className="nav-text-button" type="button" onClick={onOpenAiEngineering}>
                  {copy.aiEngineering}
                </button>
              ) : null}
              <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
              <button className="button-light nav-cv-button" type="button" onClick={onOpenCurriculum}>
                {copy.curriculum}
                <Icon name={isCurriculum ? 'arrow-left' : 'arrow-up-right'} />
              </button>
            </nav>
          </div>
        </motion.header>
      ) : null}
    </AnimatePresence>
  )
}
