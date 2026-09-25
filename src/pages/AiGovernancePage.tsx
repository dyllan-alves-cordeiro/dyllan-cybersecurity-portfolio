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
import { getGovernanceContent } from '../content-governance'
import { contactOpensExternally } from '../content'
import { getPortfolioContent } from '../content-bilingual'
import type { Language } from '../i18n'
import { Icon } from '../icons'

type AiGovernancePageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  onOpenGovernance?: () => void
  onOpenAiEngineering?: () => void
  language: Language
  onLanguageChange: (language: Language) => void
}

export function AiGovernancePage({
  onOpenCurriculum,
  onHome,
  onOpenGovernance,
  onOpenAiEngineering,
  language,
  onLanguageChange,
}: AiGovernancePageProps) {
  const reduced = useReducedMotion()
  const content = getGovernanceContent(language)
  const { profile, method, versions, criteria, ui } = content
  const contacts = getPortfolioContent(language).contacts
  const mail = contacts.find((contact) => contact.kind === 'email')

  return (
    <div className="app-shell gov-shell">
      <PageAtmosphere variant="page" />
      <SiteHeader
        onOpenCurriculum={onOpenCurriculum}
        onHome={onHome}
        onOpenGovernance={onOpenGovernance}
        onOpenAiEngineering={onOpenAiEngineering}
        language={language}
        onLanguageChange={onLanguageChange}
        isGovernance
        visible
      />

      <main>
        <section className="gov-hero" aria-labelledby="gov-hero-title">
          <Reveal className="container gov-hero-inner">
            <span className="section-eyebrow">{profile.kicker}</span>
            <h1 id="gov-hero-title">{profile.headline}</h1>
            <p className="gov-lede">{profile.lede}</p>
            <p className="gov-meta">{profile.locationNote}</p>
            <div className="gov-hero-actions">
              {mail ? (
                <a className="button-light" href={mail.href}>
                  {ui.talk}
                  <Icon name="arrow-up-right" />
                </a>
              ) : null}
              <button className="gov-text-link" type="button" onClick={() => onHome()}>
                {ui.home}
                <Icon name="arrow-left" />
              </button>
            </div>
          </Reveal>
        </section>

        <section className="gov-section" aria-labelledby="gov-method-title">
          <Reveal className="container">
            <span className="section-eyebrow">{ui.method}</span>
            <h2 id="gov-method-title">{ui.methodTitle}</h2>
            <ol className={`gov-method-list${reduced ? ' is-static' : ''}`}>
              {method.map((item, index) => (
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
            <span className="section-eyebrow">{ui.sovereign}</span>
            <h2 id="gov-versions-title">{ui.sovereignTitle}</h2>
            <p className="gov-rail-lede">{ui.sovereignLede}</p>
            <div className="gov-rail" role="list">
              {versions.map((item) => (
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
              <span className="section-eyebrow">{ui.criteria}</span>
              <h2 id="gov-criteria-title">{ui.criteriaTitle}</h2>
              <p>{ui.criteriaBody}</p>
            </div>
            <ul className="gov-criteria-list">
              {criteria.map((item) => (
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
            <span className="section-eyebrow">{ui.contact}</span>
            <h2 id="gov-contact-title">{ui.contactTitle}</h2>
            <div className="gov-contact-list">
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
