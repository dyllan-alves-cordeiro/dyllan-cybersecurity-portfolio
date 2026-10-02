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
    (contact) => contact.kind !== 'portfolio',
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
                <a className="button-light" href={language === 'pt' ? '/assets/dyllan-alves-ai-engineer-pt.pdf' : '/assets/dyllan-alves-ai-engineer-en.pdf'} target="_blank" rel="noreferrer">
                  {ui.openCurriculum}
                  <Icon name="arrow-up-right" />
                </a>
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

        <section className="ai-section" aria-labelledby="ai-cases-title">
          <div className="container">
            <div className="ai-section-heading">
              <h2 id="ai-cases-title">{language === 'pt' ? 'Três sistemas. Problemas reais de engenharia.' : 'Three systems. Real engineering problems.'}</h2>
              <p>{language === 'pt' ? 'Um case com código público e duas arquiteturas sanitizadas de implementações privadas. Evidência medida, limites explícitos.' : 'One case with public source and two sanitized architectures of private implementations. Measured evidence and explicit limits.'}</p>
            </div>
            <article className="ai-evidence-row" id="ai-request-triage-case">
              <div>
                <h3>AI Request Triage — Governed LLM Workflow</h3>
                <p>{language === 'pt' ? 'Solicitação não confiável → webhook autenticado → contexto SQL verificado → modelo → validação determinística das fontes → aprovação humana com token de uso único → auditoria.' : 'Untrusted request → authenticated webhook → verified SQL context → model → deterministic source validation → human approval with a one-shot token → audit trail.'}</p>
                <p>{language === 'pt' ? 'n8n self-hosted, PostgreSQL e OpenAI. O modelo classifica e propõe; uma pessoa decide. Idempotência por restrição única no banco, reserva por regra quando o modelo falha e nenhuma ação externa sem aprovação. A primeira versão passava em todos os testes sem nunca chamar o modelo; a tabela de auditoria revelou, e o repositório documenta a correção.' : 'Self-hosted n8n, PostgreSQL and OpenAI. The model classifies and proposes; a person decides. Idempotency through a database unique constraint, a rule-based fallback when the model fails, and no external action without approval. The first version passed every test without ever calling the model; the audit table exposed it, and the repository documents the fix.'}</p>
                <p>{language === 'pt' ? 'Medido em 02/10/2026: 12 de 12 casos de avaliação com o modelo real; 11 de 11 cenários ao vivo, em duas passadas, antes e depois de reiniciar o container. Dados sintéticos, laboratório de portfólio, sem acesso a produção de cliente; 12 casos não são benchmark; a recuperação é filtro SQL, sem busca vetorial.' : 'Measured on October 2, 2026: 12 of 12 evaluation cases with the real model; 11 of 11 live scenarios, run twice, before and after a container restart. Synthetic data, portfolio lab, no customer production access; 12 cases are not a benchmark; retrieval is a SQL filter, with no vector search.'}</p>
                <p><a className="ai-text-link" href="https://github.com/dyllan-alves-cordeiro/ai-request-triage-n8n" target="_blank" rel="noreferrer">{language === 'pt' ? 'Código, evals e resultados no GitHub' : 'Source, evals and results on GitHub'}</a></p>
              </div>
              <span>{language === 'pt' ? 'IMPLEMENTADO / FONTE PÚBLICA' : 'IMPLEMENTED / PUBLIC SOURCE'}</span>
            </article>
            <article className="ai-evidence-row" id="dgx-sovereign-case">
              <div>
                <h3>DGX Sovereign — Governed Agentic Engineering Platform</h3>
                <p>{language === 'pt' ? 'Intenção humana → tarefa delimitada → roteamento por capacidade → MCP/tools → execução por escopo → evidência → verificação → auditoria e continuidade.' : 'Human intent → bounded task → capability routing → MCP/tools → scoped execution → evidence → verification → audit and continuity.'}</p>
                <p>{language === 'pt' ? 'Projetei o método Coordenador–Executor, com admissão antes da execução, grants temporários no runtime próprio e retornos ligados a testes, diff e Git. Especificações canônicas e detectores de consistência sustentam rastreabilidade e decisões humanas.' : 'Designed Coordinator–Executor workflows with pre-execution admission, temporary grants within the platform runtime and returns linked to tests, diff and Git. Canonical specifications and consistency detectors support traceability and human decisions.'}</p>
                <p>{language === 'pt' ? '36 testes locais de boundary/adversarial e 13 de gates MCP passaram em 01/10/2026. Suítes focadas; não representam saúde global, avaliação LLM, sandbox universal ou resultados enterprise.' : '36 local boundary/adversarial tests and 13 MCP gate tests passed on October 1, 2026. Focused suites; they do not establish global health, LLM evaluation, a universal sandbox or enterprise outcomes.'}</p>
              </div>
              <span>{language === 'pt' ? 'IMPLEMENTADO / FONTE PRIVADA' : 'IMPLEMENTED / PRIVATE SOURCE'}</span>
            </article>
            <article className="ai-evidence-row" id="lecion-case">
              <div>
                <h3>Lecion — LLM Application Engineering</h3>
                <p>{language === 'pt' ? 'Requisição autenticada → contexto SQL por usuário → histórico/compactação → tools PDF → prompt → modelo no servidor → SSE → créditos/falhas → persistência e telemetria.' : 'Authenticated request → user-scoped SQL context → history/compaction → PDF tools → prompt → server-side model → SSE → credits/failures → persistence and telemetry.'}</p>
                <p>{language === 'pt' ? 'Construí fluxos LLM com autenticação JWT, briefings por usuário, janelas por plano, tools de leitura/validação/proposta de edição e aceite humano. Streaming com heartbeat, timeout upstream e refunds tratam os modos de falha do produto.' : 'Built LLM workflows with JWT authentication, user-scoped briefings, plan-based windows, read/validate/edit-proposal tools and human acceptance. Streaming heartbeat, upstream timeouts and refunds address product failure modes.'}</p>
                <p>{language === 'pt' ? '68 testes locais e typecheck passaram em 01/10/2026. Recuperação SQL/web/documental comprovada; vector RAG e LLM evals não estabelecidos. Adoção, disponibilidade atual e ganho de latência não medidos.' : '68 local tests and typecheck passed on October 1, 2026. SQL/web/document retrieval demonstrated; vector RAG and LLM evals are not established. Adoption, current availability and latency gains were not measured.'}</p>
              </div>
              <span>{language === 'pt' ? 'IMPLEMENTADO / FONTE PRIVADA' : 'IMPLEMENTED / PRIVATE SOURCE'}</span>
            </article>
            <div className="ai-hero-actions">
              <a className="button-light" href={language === 'pt' ? '/assets/dyllan-alves-ai-engineer-pt.pdf' : '/assets/dyllan-alves-ai-engineer-en.pdf'}>{language === 'pt' ? 'Baixar currículo AI — PT' : 'Download AI resume — EN'}</a>
              <a className="ai-text-link" href="https://github.com/dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio" target="_blank" rel="noreferrer">{language === 'pt' ? 'Fonte pública deste portfólio' : 'Public source of this portfolio'}</a>
            </div>
          </div>
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
