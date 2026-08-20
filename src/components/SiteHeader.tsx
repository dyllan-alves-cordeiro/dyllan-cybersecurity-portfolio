// DGX FILE HEADER
// nivel: L2-small
// arquivo: src/components/SiteHeader.tsx
// papel: Navegação da superfície pessoal e acesso à rota de currículo.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-site-header

import { Icon } from '../icons'

type SiteHeaderProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  isCurriculum?: boolean
}

export function SiteHeader({
  onOpenCurriculum,
  onHome,
  isCurriculum = false,
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <button className="brand-lockup" type="button" onClick={() => onHome()}>
          <span className="brand-name">Dyllan</span>
          <span className="brand-divider" aria-hidden="true" />
          <img
            className="brand-digytron-mark"
            src="/assets/digytron-mark.png"
            alt="Digytron"
            width="28"
            height="28"
          />
        </button>

        <nav className="nav-links" aria-label="Navegação principal">
          {isCurriculum ? (
            <button className="nav-text-button" type="button" onClick={() => onHome()}>
              Voltar ao portfólio
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
          <button className="nav-cv-button" type="button" onClick={onOpenCurriculum}>
            Currículo
            <Icon name={isCurriculum ? 'arrow-left' : 'arrow-up-right'} size={16} />
          </button>
        </nav>
      </div>
    </header>
  )
}
