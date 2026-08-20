// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/pages/CurriculumPage.tsx
// papel: Rota própria de currículo, legível, imprimível e bloqueada contra conteúdo inventado.
// governa: docs/content-contract.md
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-curriculum-page

import { Icon } from '../icons'
import { SiteHeader } from '../components/SiteHeader'
import { StatusTag } from '../components/StatusTag'

type CurriculumPageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
}

const resumeSections = [
  {
    label: 'Resumo profissional',
    copy: 'Aguardando texto-base fornecido ou aprovado pelo Dyllan.',
  },
  {
    label: 'Experiência',
    copy: 'Aguardando cargos, períodos, responsabilidades e resultados comprováveis.',
  },
  {
    label: 'Projetos selecionados',
    copy: 'Aguardando três a cinco experiências que possam ser citadas publicamente.',
  },
  {
    label: 'Formação e certificações',
    copy: 'Aguardando instituições, cursos, datas e certificações reais.',
  },
  {
    label: 'Competências',
    copy: 'Aguardando lista revisada de competências e tecnologias efetivamente utilizadas.',
  },
]

export function CurriculumPage({ onOpenCurriculum, onHome }: CurriculumPageProps) {
  return (
    <div className="app-shell curriculum-shell">
      <SiteHeader onOpenCurriculum={onOpenCurriculum} onHome={onHome} isCurriculum />

      <main className="curriculum-main">
        <div className="container curriculum-toolbar print-hidden">
          <button className="back-link" type="button" onClick={() => onHome()}>
            <Icon name="arrow-left" size={17} />
            Voltar ao portfólio
          </button>
          <div className="toolbar-status">
            <span className="mono-label">CV / CONTROLLED DRAFT</span>
            <StatusTag tone="amber">CONTEÚDO PENDENTE</StatusTag>
          </div>
        </div>

        <div className="container curriculum-layout">
          <article className="cv-document" aria-labelledby="cv-title">
            <header className="cv-header">
              <div>
                <span className="eyebrow">Currículo profissional</span>
                <h1 id="cv-title">Dyllan</h1>
                <p className="cv-role">Posicionamento profissional pendente</p>
              </div>
              <div className="cv-header-meta">
                <span>Contato público pendente</span>
                <span>Localização pendente</span>
                <span>Idioma pendente</span>
              </div>
            </header>

            <div className="cv-divider" />

            <section className="cv-summary-block">
              <span className="cv-section-label">Perfil</span>
              <p>
                Este resumo será escrito a partir do currículo-base e da direção profissional
                aprovados. Nenhuma experiência, cargo, competência ou resultado foi presumido.
              </p>
            </section>

            <div className="cv-section-list">
              {resumeSections.map((section) => (
                <section className="cv-section-row" key={section.label}>
                  <span className="cv-section-label">{section.label}</span>
                  <div>
                    <StatusTag tone="amber">PENDENTE</StatusTag>
                    <p>{section.copy}</p>
                  </div>
                </section>
              ))}
            </div>

            <footer className="cv-document-footer">
              <span>Documento preparado para atualização factual.</span>
              <span>v0.1 / local</span>
            </footer>
          </article>

          <aside className="cv-sidebar print-hidden" aria-label="Estado da publicação do currículo">
            <div className="sidebar-block sidebar-block-accent">
              <span className="mono-label">EXPORTAÇÃO</span>
              <h2>PDF preparado depois da aprovação factual.</h2>
              <p>
                A folha de estilo de impressão já está configurada. O arquivo final só deve ser
                gerado quando o conteúdo real estiver fechado.
              </p>
              <button className="button button-disabled" type="button" disabled aria-disabled="true">
                <Icon name="lock" size={16} />
                PDF indisponível nesta versão
              </button>
            </div>

            <div className="sidebar-block">
              <span className="mono-label">PRÓXIMO INPUT</span>
              <ul className="pending-list">
                <li>Nome e cargo</li>
                <li>Contato e links</li>
                <li>Experiências reais</li>
                <li>Formação e certificações</li>
                <li>Idioma e domínio</li>
              </ul>
            </div>

            <p className="sidebar-footnote">
              <span className="signal-dot" aria-hidden="true" />
              Nenhuma candidatura está sendo recebida por esta base local.
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
