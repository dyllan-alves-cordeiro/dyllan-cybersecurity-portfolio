// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/pages/AiGovernancePage.tsx
// papel: Superfície pública de governança de IA — identidade real do portfólio.
// governa: src/content-governance.ts
// validar: npm run typecheck && visual desktop + 390px
// DGX:ANCHOR: personal-portfolio-ai-governance-page

import { useReducedMotion } from 'motion/react'
import { PageAtmosphere } from '../components/PageAtmosphere'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import {
  governanceContacts,
  governanceCriteria,
  governanceMethod,
  governanceProfile,
  sovereignVersions,
} from '../content-governance'
import { contactOpensExternally } from '../content'
import { Icon } from '../icons'

type AiGovernancePageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  onOpenGovernance?: () => void
}

export function AiGovernancePage({
  onOpenCurriculum,
  onHome,
  onOpenGovernance,
}: AiGovernancePageProps) {
  const reduced = useReducedMotion()
  const mail = governanceContacts.find((contact) => contact.kind === 'email')

  return (
    <div className="app-shell gov-shell">
      <PageAtmosphere variant="page" />
      <SiteHeader
        onOpenCurriculum={onOpenCurriculum}
        onHome={onHome}
        onOpenGovernance={onOpenGovernance}
        isGovernance
        visible
      />

      <main>
        <section className="gov-hero" aria-labelledby="gov-hero-title">
          <Reveal className="container gov-hero-inner">
            <span className="section-eyebrow">{governanceProfile.kicker}</span>
            <h1 id="gov-hero-title">{governanceProfile.headline}</h1>
            <p className="gov-lede">{governanceProfile.lede}</p>
            <p className="gov-meta">{governanceProfile.locationNote}</p>
            <div className="gov-hero-actions">
              {mail ? (
                <a className="button-light" href={mail.href}>
                  Vamos conversar
                  <Icon name="arrow-up-right" />
                </a>
              ) : null}
              <button className="gov-text-link" type="button" onClick={() => onHome()}>
                Ver cibersegurança
                <Icon name="arrow-left" />
              </button>
            </div>
          </Reveal>
        </section>

        <section className="gov-section" aria-labelledby="gov-method-title">
          <Reveal className="container">
            <span className="section-eyebrow">Como opera</span>
            <h2 id="gov-method-title">Três gestos. Nenhum deles é “deixar a IA decidir”.</h2>
            <ol className={`gov-method-list${reduced ? ' is-static' : ''}`}>
              {governanceMethod.map((item, index) => (
                <li key={item.label}>
                  <span>0{index + 1}</span>
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="gov-section gov-section-rail" aria-labelledby="gov-versions-title">
          <Reveal className="container">
            <span className="section-eyebrow">Soberano DGX</span>
            <h2 id="gov-versions-title">O desenho, em versões. Sem teatro de produto interno.</h2>
            <p className="gov-rail-lede">
              Exemplo próprio: como o humano deve agir com a IA. V1 e V2 já operam. V3 é o aprofundamento
              — GK com visão, validação real, contexto que não some quando o chat compacta.
            </p>
            <div className="gov-rail" role="list">
              {sovereignVersions.map((item) => (
                <article className="gov-rail-card" key={item.version} role="listitem">
                  <span className="gov-rail-version">{item.version}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="gov-section" aria-labelledby="gov-criteria-title">
          <Reveal className="container gov-criteria-grid">
            <div>
              <span className="section-eyebrow">Critérios</span>
              <h2 id="gov-criteria-title">A entrega nasce da regra, não do modelo.</h2>
              <p>
                Com isso no lugar, o resto — aplicativo, integração, hospedagem — é consequência. Sem isso,
                é só geração.
              </p>
            </div>
            <ul className="gov-criteria-list">
              {governanceCriteria.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="gov-section gov-section-contact" aria-labelledby="gov-contact-title">
          <Reveal className="container gov-contact-inner">
            <span className="section-eyebrow">Contato</span>
            <h2 id="gov-contact-title">Se a vaga pede governança de verdade, conversamos.</h2>
            <div className="gov-contact-list">
              {governanceContacts.map((contact) => (
                <a
                  href={contact.href}
                  key={contact.label}
                  target={contactOpensExternally(contact.kind) ? '_blank' : undefined}
                  rel={contactOpensExternally(contact.kind) ? 'noreferrer' : undefined}
                >
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                  <Icon name="arrow-up-right" />
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  )
}
