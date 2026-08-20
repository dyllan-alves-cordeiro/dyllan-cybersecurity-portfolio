// DGX FILE HEADER
// nivel: L2-small
// arquivo: src/components/SiteHeader.tsx
// papel: Pílula de navegação desacoplada do hero; aparece só depois do scroll.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-site-header

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Icon } from '../icons'

type SiteHeaderProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  isCurriculum?: boolean
  visible?: boolean
}

const ease = [0.16, 1, 0.3, 1] as const

export function SiteHeader({
  onOpenCurriculum,
  onHome,
  isCurriculum = false,
  visible = true,
}: SiteHeaderProps) {
  const reduced = useReducedMotion()

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

            <nav className="nav-links" aria-label="Navegação principal">
              {isCurriculum ? (
                <button className="nav-text-button" type="button" onClick={() => onHome()}>
                  Portfólio
                </button>
              ) : (
                <>
                  <button className="nav-text-button" type="button" onClick={() => onHome('perfil')}>
                    Sobre
                  </button>
                  <button className="nav-text-button" type="button" onClick={() => onHome('experiencia')}>
                    Experiência
                  </button>
                  <button className="nav-text-button" type="button" onClick={() => onHome('competencias')}>
                    Competências
                  </button>
                </>
              )}
              <button className="button-light nav-cv-button" type="button" onClick={onOpenCurriculum}>
                Currículo
                <Icon name={isCurriculum ? 'arrow-left' : 'arrow-up-right'} />
              </button>
            </nav>
          </div>
        </motion.header>
      ) : null}
    </AnimatePresence>
  )
}
