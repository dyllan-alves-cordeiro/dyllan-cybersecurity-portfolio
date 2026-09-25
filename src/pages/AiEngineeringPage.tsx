// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/pages/AiEngineeringPage.tsx
// papel: Superfície pública de engenharia de IA, com método e maturidade de evidência explícitos.
// governa: src/content-ai-engineering.ts
// validar: npm run typecheck && npm run build && visual desktop + 375px
// DGX:ANCHOR: personal-portfolio-ai-engineering-page

import { useReducedMotion } from 'motion/react'
import { PageAtmosphere } from '../components/PageAtmosphere'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { getAiEngineeringContent } from '../content-ai-engineering'
import { contactOpensExternally } from '../content'
import { getPortfolioContent } from '../content-bilingual'
import type { Language } from '../i18n'
import { Icon } from '../icons'

type AiEngineeringPageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  onOpenGovernance?: () => void
  onOpenAiEngineering?: () => void
  language: Language
  onLanguageChange: (language: Language) => void
}

export function AiEngineeringPage({
  onOpenCurriculum,
  onHome,
  onOpenGovernance,
  onOpenAiEngineering,
  language,
  onLanguageChange,
}: AiEngineeringPageProps) {
  const reduced = useReducedMotion()
  const content = getAiEngineeringContent(language)
  const { profile, stages, capabilities, evidence, nextArtifacts, ui } = content
  const contacts = getPortfolioContent(language).contacts.filter(
    (contact) => contact.kind !== 'phone' && contact.kind !== 'portfolio',
  )

  return (
    <div className="app-shell ai-shell">
      <PageAtmosphere variant="page" />
      <SiteHeader
        onOpenCurriculum={onOpenCurriculum}
        onHome={onHome}
        onOpenGovernance={onOpenGovernance}
        onOpenAiEngineering={onOpenAiEngineering}
        language={language}
        onLanguageChange={onLanguageChange}
        isAiEngineering
        visible
      />

      <main>
        <section className="ai-hero" aria-labelledby="ai-hero-title">
          <Reveal className="container ai-hero-inner" variant="soft">
            <div className="ai-hero-copy">
              <span className="section-eyebrow">{profile.kicker}</span>
              <h1 id="ai-hero-title">{profile.headline}</h1>
              <p className="ai-lede">{profile.lede}</p>
              <p className="ai-supporting-line">{profile.supportingLine}</p>
              <p className="ai-meta">{profile.locationNote}</p>
              <div className="ai-hero-actions">
                <button className="button-light" type="button" onClick={onOpenCurriculum}>
                  {ui.openCurriculum}
                  <Icon name="arrow-up-right" />
                </button>
                {onOpenGovernance ? (
                  <button className="ai-text-link" type="button" onClick={onOpenGovernance}>
                    {ui.readGovernance}
                    <Icon name="arrow-up-right" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="ai-hero-ledger" aria-label={ui.publicPosition}>
              <span className="ai-ledger-label">{ui.publicPosition}</span>
              <strong>{ui.publicPositionTitle}</strong>
              <p>{ui.publicPositionBody}</p>
              <span className="ai-ledger-state">{ui.evidenceState}</span>
            </div>
          </Reveal>
        </section>

        <section className="ai-section ai-method-section" aria-labelledby="ai-method-title">
          <Reveal className="container" variant="drift">
            <div className="ai-section-heading">
              <div>
                <span className="section-eyebrow">{ui.method}</span>
                <h2 id="ai-method-title">{ui.methodTitle}</h2>
              </div>
              <p>{ui.methodBody}</p>
            </div>

            <ol className={`ai-execution-rail${reduced ? ' is-static' : ''}`}>
              {stages.map((stage, index) => (
                <li className="ai-stage" key={stage.label}>
                  <div className="ai-stage-topline">
                    <span className="ai-stage-index">{stage.index}</span>
                    <span className="ai-stage-status">{stage.status}</span>
                  </div>
                  <h3>{stage.label}</h3>
                  <strong>{stage.short}</strong>
                  <p>{stage.detail}</p>
                  {index < stages.length - 1 ? <span className="ai-stage-arrow" aria-hidden="true">→</span> : null}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="ai-section" aria-labelledby="ai-capabilities-title">
          <Reveal className="container" variant="lift">
            <div className="ai-section-heading ai-section-heading-narrow">
              <div>
                <span className="section-eyebrow">{ui.capabilities}</span>
                <h2 id="ai-capabilities-title">{ui.capabilitiesTitle}</h2>
              </div>
              <p>{ui.capabilitiesBody}</p>
            </div>

            <div className="ai-capability-list" role="list">
              {capabilities.map((item, index) => (
                <article className="ai-capability-row" key={item.label} role="listitem">
                  <span className="ai-row-index">0{index + 1}</span>
                  <div className="ai-row-main">
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="ai-row-state">{item.state}</span>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="ai-section ai-evidence-section" aria-labelledby="ai-evidence-title">
          <Reveal className="container ai-evidence-layout" variant="settle">
            <div>
              <span className="section-eyebrow">{ui.evidenceMaturity}</span>
              <h2 id="ai-evidence-title">{ui.evidenceTitle}</h2>
              <p>{ui.evidenceBody}</p>
            </div>
            <div className="ai-evidence-ledger" role="list">
              {evidence.map((item) => (
                <article className="ai-evidence-row" key={item.label} role="listitem">
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span>{item.state}</span>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="ai-section ai-next-section" aria-labelledby="ai-next-title">
          <Reveal className="container ai-next-layout" variant="soft">
            <div>
              <span className="section-eyebrow">{ui.nextArtifactsLabel}</span>
              <h2 id="ai-next-title">{ui.nextArtifactsTitle}</h2>
            </div>
            <ol className="ai-next-list">
              {nextArtifacts.map((artifact, index) => (
                <li key={artifact}>
                  <span>0{index + 1}</span>
                  <p>{artifact}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="ai-section ai-contact-section" aria-labelledby="ai-contact-title">
          <Reveal className="container ai-contact-inner" variant="base">
            <span className="section-eyebrow">{ui.contact}</span>
            <h2 id="ai-contact-title">{ui.contactTitle}</h2>
            <div className="ai-contact-actions">
              {contacts.map((contact) => (
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
