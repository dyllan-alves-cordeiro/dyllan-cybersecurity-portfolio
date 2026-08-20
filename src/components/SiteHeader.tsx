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
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">Dyllan</span>
          <span className="brand-context">/ security portfolio</span>
        </button>

        <nav className="nav-links" aria-label="Navegação principal">
          {isCurriculum ? (
            <button className="nav-text-button" type="button" onClick={() => onHome()}>
              Voltar ao portfólio
            </button>
          ) : (
            <>
              <button className="nav-text-button" type="button" onClick={() => onHome('perfil')}>
                Perfil
              </button>
              <button className="nav-text-button" type="button" onClick={() => onHome('metodo')}>
                Método
              </button>
              <button className="nav-text-button" type="button" onClick={() => onHome('projetos')}>
                Projetos
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
