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
import {
  aiEngineeringCapabilities,
  aiEngineeringContacts,
  aiEngineeringProfile,
  aiEvidenceLedger,
  aiExecutionStages,
  aiNextArtifacts,
} from '../content-ai-engineering'
import { contactOpensExternally } from '../content'
import { Icon } from '../icons'

type AiEngineeringPageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  onOpenGovernance?: () => void
  onOpenAiEngineering?: () => void
}

export function AiEngineeringPage({
  onOpenCurriculum,
  onHome,
  onOpenGovernance,
  onOpenAiEngineering,
}: AiEngineeringPageProps) {
  const reduced = useReducedMotion()

  return (
    <div className="app-shell ai-shell">
      <PageAtmosphere variant="page" />
      <SiteHeader
        onOpenCurriculum={onOpenCurriculum}
        onHome={onHome}
        onOpenGovernance={onOpenGovernance}
        onOpenAiEngineering={onOpenAiEngineering}
        isAiEngineering
        visible
      />

      <main>
        <section className="ai-hero" aria-labelledby="ai-hero-title">
          <Reveal className="container ai-hero-inner" variant="soft">
            <div className="ai-hero-copy">
              <span className="section-eyebrow">{aiEngineeringProfile.kicker}</span>
              <h1 id="ai-hero-title">{aiEngineeringProfile.headline}</h1>
              <p className="ai-lede">{aiEngineeringProfile.lede}</p>
              <p className="ai-supporting-line">{aiEngineeringProfile.supportingLine}</p>
              <p className="ai-meta">{aiEngineeringProfile.locationNote}</p>
              <div className="ai-hero-actions">
                <button className="button-light" type="button" onClick={onOpenCurriculum}>
                  Open curriculum
                  <Icon name="arrow-up-right" />
                </button>
                {onOpenGovernance ? (
                  <button className="ai-text-link" type="button" onClick={onOpenGovernance}>
                    Read AI governance
                    <Icon name="arrow-up-right" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="ai-hero-ledger" aria-label="Public evidence position">
              <span className="ai-ledger-label">PUBLIC POSITION</span>
              <strong>Method is visible. Proof is being opened.</strong>
              <p>
                This surface describes a real engineering method without turning private implementation into a public
                claim of scale, adoption, or outcome.
              </p>
              <span className="ai-ledger-state">EVIDENCE BOUNDED / 2026</span>
            </div>
          </Reveal>
        </section>

        <section className="ai-section ai-method-section" aria-labelledby="ai-method-title">
          <Reveal className="container" variant="drift">
            <div className="ai-section-heading">
              <div>
                <span className="section-eyebrow">The method</span>
                <h2 id="ai-method-title">One supervisory session. Four explicit boundaries.</h2>
              </div>
              <p>
                Continuity is not a memory slogan. It is a contract: the work has an owner, a scope, an expected return,
                and a verification point.
              </p>
            </div>

            <ol className={`ai-execution-rail${reduced ? ' is-static' : ''}`}>
              {aiExecutionStages.map((stage, index) => (
                <li className="ai-stage" key={stage.label}>
                  <div className="ai-stage-topline">
                    <span className="ai-stage-index">{stage.index}</span>
                    <span className="ai-stage-status">{stage.status}</span>
                  </div>
                  <h3>{stage.label}</h3>
                  <strong>{stage.short}</strong>
                  <p>{stage.detail}</p>
                  {index < aiExecutionStages.length - 1 ? <span className="ai-stage-arrow" aria-hidden="true">→</span> : null}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="ai-section" aria-labelledby="ai-capabilities-title">
          <Reveal className="container" variant="lift">
            <div className="ai-section-heading ai-section-heading-narrow">
              <div>
                <span className="section-eyebrow">What I build</span>
                <h2 id="ai-capabilities-title">AI systems are more than a model call.</h2>
              </div>
              <p>
                The engineering work lives around the model: context, access, tools, failure modes, customer impact, and
                the evidence needed to trust a change.
              </p>
            </div>

            <div className="ai-capability-list" role="list">
              {aiEngineeringCapabilities.map((item, index) => (
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
              <span className="section-eyebrow">Evidence maturity</span>
              <h2 id="ai-evidence-title">The boundary is part of the work.</h2>
              <p>
                I want a recruiter, collaborator, or client to know exactly what can be inspected today and what still
                needs a public artifact. That distinction is deliberate.
              </p>
            </div>
            <div className="ai-evidence-ledger" role="list">
              {aiEvidenceLedger.map((item) => (
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
              <span className="section-eyebrow">Next public artifacts</span>
              <h2 id="ai-next-title">Make the evidence as inspectable as the method.</h2>
            </div>
            <ol className="ai-next-list">
              {aiNextArtifacts.map((artifact, index) => (
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
            <span className="section-eyebrow">Contact</span>
            <h2 id="ai-contact-title">If the role asks how the system around the model gets built, let’s talk.</h2>
            <div className="ai-contact-actions">
              {aiEngineeringContacts.map((contact) => (
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
