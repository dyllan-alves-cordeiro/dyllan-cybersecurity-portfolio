// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/pages/CurriculumPage.tsx
// papel: Currículo público factual, responsivo, legível e preparado para impressão/PDF.
// governa: docs/content-contract.md
// validar: npm run typecheck && npm run build && visual print
// DGX:ANCHOR: personal-portfolio-curriculum-page

import {
  contactOpensExternally,
  complementaryTraining,
  digytronProjects,
  education,
  languages,
  portfolioProfile,
  professionalExperiences,
  publicContacts,
  skillFocus,
  supportingSkills,
} from '../content'
import { PageAtmosphere } from '../components/PageAtmosphere'
import { Icon } from '../icons'
import { SiteHeader } from '../components/SiteHeader'

type CurriculumPageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  onOpenGovernance?: () => void
}

export function CurriculumPage({
  onOpenCurriculum,
  onHome,
  onOpenGovernance,
}: CurriculumPageProps) {
  return (
    <div className="app-shell curriculum-shell">
      <PageAtmosphere variant="page" />
      <SiteHeader
        onOpenCurriculum={onOpenCurriculum}
        onHome={onHome}
        onOpenGovernance={onOpenGovernance}
        isCurriculum
        visible
      />

      <main className="curriculum-main-v2">
        <div className="container curriculum-toolbar-v2 print-hidden">
          <button className="back-link-v2" type="button" onClick={() => onHome()}>
            <Icon name="arrow-left" />
            Voltar ao portfólio
          </button>
          <div className="toolbar-actions-v2">
            <a
              className="cv-toolbar-download"
              href="/assets/curriculo-dyllan-ciberseguranca.pdf"
              download="Curriculo - Dyllan Alves Cordeiro - Ciberseguranca Defensiva.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="arrow-up-right" />
              Baixar PDF Oficial
            </a>
            <button className="cv-toolbar-print" type="button" onClick={() => window.print()}>
              Imprimir
            </button>
          </div>
        </div>

        <div className="container curriculum-layout-v2">
          <article className="cv-document-v2" aria-labelledby="cv-title">
            <header className="cv-header-v2">
              <div>
                <span className="cv-kicker">Currículo profissional</span>
                <h1 id="cv-title">{portfolioProfile.name}</h1>
                <p className="cv-role-v2">{portfolioProfile.headline}</p>
                <p className="cv-positioning-v2">{portfolioProfile.positioning}</p>
              </div>
              <div className="cv-contact-block">
                <span>{portfolioProfile.location}</span>
                {publicContacts.map((contact) => (
                  <a
                    href={contact.href}
                    key={contact.label}
                    target={contactOpensExternally(contact.kind) ? '_blank' : undefined}
                    rel={contactOpensExternally(contact.kind) ? 'noreferrer' : undefined}
                  >
                    {contact.value}
                  </a>
                ))}
              </div>
            </header>

            <div className="cv-rule-v2" />

            <section className="cv-profile-v2" aria-labelledby="cv-profile-title">
              <span className="cv-section-label-v2" id="cv-profile-title">Perfil</span>
              <p>{portfolioProfile.intro}</p>
            </section>

            <section className="cv-block-v2" aria-labelledby="cv-experience-title">
              <div className="cv-block-heading-v2">
                <span className="cv-section-label-v2" id="cv-experience-title">Experiência profissional</span>
              </div>
              <div className="cv-experience-list-v2">
                {professionalExperiences.map((experience) => (
                  <article className={`cv-experience-v2${experience.current ? ' cv-experience-featured-v2' : ''}`} key={`${experience.company}-${experience.role}`}>
                    <div className="cv-experience-topline">
                      <div>
                        <h2>{experience.company}</h2>
                        <p>{experience.role}</p>
                      </div>
                      <span>{experience.period}</span>
                    </div>
                    <p className="cv-experience-summary-v2">{experience.summary}</p>
                    <ul>
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="cv-block-v2 cv-projects-v2" aria-labelledby="cv-projects-title">
              <div className="cv-block-heading-v2">
                <span className="cv-section-label-v2" id="cv-projects-title">Projetos Digytron BR</span>
              </div>
              <div className="cv-project-grid-v2">
                {digytronProjects.map((project) => (
                  <article className="cv-project-card-v2" key={project.title}>
                    <h2>{project.title}</h2>
                    <p>{project.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="cv-columns-v2">
              <section className="cv-block-v2" aria-labelledby="cv-skills-title">
                <div className="cv-block-heading-v2">
                  <span className="cv-section-label-v2" id="cv-skills-title">Competências</span>
                </div>
                <div className="cv-skill-groups-v2">
                  <div>
                    <h3>{skillFocus.title}</h3>
                    <p>{skillFocus.items.join(' · ')}</p>
                  </div>
                  {supportingSkills.map((group) => (
                    <div key={group.label}>
                      <h3>{group.label}</h3>
                      <p>{group.items.join(' · ')}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="cv-block-v2" aria-labelledby="cv-education-title">
                <div className="cv-block-heading-v2">
                  <span className="cv-section-label-v2" id="cv-education-title">Formação</span>
                </div>
                {education.map((item) => (
                  <div className="cv-education-item-v2" key={item.institution}>
                    <h3>{item.institution}</h3>
                    <p>{item.detail}</p>
                    <strong>{item.course}</strong>
                    <span>{item.period}</span>
                  </div>
                ))}
                <div className="cv-language-list-v2">
                  <h3>Idiomas</h3>
                  {languages.map((item) => (
                    <p key={item.language}><strong>{item.language}</strong><span>{item.level}</span></p>
                  ))}
                </div>
              </section>
            </div>

            <section className="cv-block-v2 cv-training-v2" aria-labelledby="cv-training-title">
              <div className="cv-block-heading-v2">
                <span className="cv-section-label-v2" id="cv-training-title">Cursos e formação complementar</span>
              </div>
              <p>{complementaryTraining.join(' · ')}</p>
            </section>

            <footer className="cv-document-footer-v2">
              <span>Conteúdo factual e auditável de Cibersegurança Defensiva.</span>
              <span>Versão oficial 2026</span>
            </footer>
          </article>

          <aside className="cv-sidebar-v2 print-hidden" aria-label="Ações e estado do currículo">
            <div className="sidebar-panel-v2 sidebar-panel-accent-v2">
              <span className="mono-label">EXPORTAÇÃO</span>
              <h2>Leve este currículo com você.</h2>
              <p>Baixe a versão executiva oficial em PDF (A4 de 1 página) ou utilize a impressão direta do navegador.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
                <a
                  className="button-light"
                  href="/assets/curriculo-dyllan-ciberseguranca.pdf"
                  download="Curriculo - Dyllan Alves Cordeiro - Ciberseguranca Defensiva.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Baixar PDF Oficial
                  <Icon name="arrow-up-right" />
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--muted)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.66rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '4px 0',
                  }}
                >
                  Imprimir via navegador →
                </button>
              </div>
            </div>

            <div className="sidebar-panel-v2">
              <span className="mono-label">LEITURA FACTUAL</span>
              <h2>Pilares desta versão</h2>
              <ul className="sidebar-check-list-v2">
                <li>Cibersegurança Defensiva e IAM como foco principal</li>
                <li>Governança de identidade, privilégio mínimo e RLS</li>
                <li>Operação de redes bancárias de missão crítica (Stefanini / CEF)</li>
                <li>LGPD técnica, ISO 27001 e conformidade auditável</li>
              </ul>
            </div>

            <div className="sidebar-panel-v2 sidebar-panel-muted-v2">
              <span className="mono-label">STATUS OPERACIONAL</span>
              <p>Currículo consolidado e auditável. Repositório oficial e documentação sob governança contínua.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
