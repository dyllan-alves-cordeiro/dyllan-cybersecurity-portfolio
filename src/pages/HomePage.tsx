// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/pages/HomePage.tsx
// papel: Página inicial do portfólio pessoal, com tese, método e estados de conteúdo.
// governa: docs/content-contract.md
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-home-page

import { caseAnatomy, contentLedger, reservedFocusAreas } from '../content'
import { Icon } from '../icons'
import { SiteHeader } from '../components/SiteHeader'
import { ContentStatusTag, StatusTag } from '../components/StatusTag'
import { SectionIntro } from '../components/SectionIntro'

type HomePageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
}

export function HomePage({ onOpenCurriculum, onHome }: HomePageProps) {
  return (
    <div className="app-shell">
      <SiteHeader onOpenCurriculum={onOpenCurriculum} onHome={onHome} />

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow">Portfólio pessoal / cibersegurança</span>
              <StatusTag tone="amber">CONTEÚDO EM VALIDAÇÃO</StatusTag>
            </div>
            <h1 id="hero-title">
              Segurança
              <br />
              demonstrada por <em>clareza.</em>
            </h1>
            <p className="hero-lede">
              Uma base profissional para organizar experiência, método e evidência — com espaço
              para o que é real e nenhum atalho sobre o que ainda precisa ser confirmado.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={onOpenCurriculum}>
                Abrir currículo
                <Icon name="arrow-up-right" size={17} />
              </button>
              <button className="text-link" type="button" onClick={() => onHome('metodo')}>
                Ver como os cases serão apresentados
                <Icon name="chevron-right" size={16} />
              </button>
            </div>
          </div>

          <aside className="signal-panel" aria-label="Estado da base do portfólio">
            <div className="signal-panel-topline">
              <span className="mono-label">TRACE / 00</span>
              <span className="signal-dot" aria-hidden="true" />
            </div>
            <div className="signal-line" aria-hidden="true" />
            <p className="signal-title">Base local, conteúdo controlado.</p>
            <p className="signal-copy">
              O desenho está pronto para receber provas reais. A publicação permanece fechada até
              os fatos serem aprovados.
            </p>
            <div className="signal-grid">
              <div>
                <strong>01</strong>
                <span>rota de CV</span>
              </div>
              <div>
                <strong>00</strong>
                <span>cases publicados</span>
              </div>
              <div>
                <strong>01</strong>
                <span>próximo gate</span>
              </div>
            </div>
            <p className="signal-footnote">/ conteúdo factual aguardando fonte</p>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Resumo de evidências da base">
          <div className="container proof-strip-inner">
            <span className="proof-strip-label">LEITURA RÁPIDA</span>
            <div className="proof-items">
              <span>
                <i aria-hidden="true" /> Sem claims fabricados
              </span>
              <span>
                <i aria-hidden="true" /> Currículo imprimível
              </span>
              <span>
                <i aria-hidden="true" /> Mobile-first
              </span>
            </div>
          </div>
        </section>

        <section className="section container" id="perfil" aria-labelledby="profile-title">
          <SectionIntro
            eyebrow="01 / Perfil"
            title="A pessoa vem antes da lista de tecnologias."
            detail="O perfil só será escrito quando houver um currículo-base e um posicionamento aprovado."
          />
          <div className="profile-grid">
            <div className="profile-note">
              <div className="note-header">
                <span className="mono-label">PROFILE / DRAFT</span>
                <StatusTag>AGUARDANDO FONTE</StatusTag>
              </div>
              <h3 id="profile-title">Um lugar para explicar o que foi feito, por que importou e como provar.</h3>
              <p>
                A primeira versão não presume cargo, certificação ou especialidade. Ela deixa a
                estrutura pronta para que o conteúdo venha da experiência do Dyllan — não de um
                modelo genérico de currículo.
              </p>
            </div>
            <div className="ledger-card" aria-label="Livro de fatos usados na base">
              <div className="ledger-card-heading">
                <span className="mono-label">FACT LEDGER</span>
                <span className="ledger-count">{contentLedger.length.toString().padStart(2, '0')} registros</span>
              </div>
              <div className="ledger-list">
                {contentLedger.map((item) => (
                  <div className="ledger-row" key={item.label}>
                    <div>
                      <span className="ledger-label">{item.label}</span>
                      <span className="ledger-detail">{item.detail}</span>
                    </div>
                    <ContentStatusTag status={item.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-surface" aria-labelledby="focus-title">
          <div className="container">
            <SectionIntro
              eyebrow="02 / Áreas de atuação"
              title="A arquitetura espera os fatos certos."
              detail="As áreas abaixo são espaços de conteúdo, não alegações de competência."
            />
            <div className="focus-grid">
              {reservedFocusAreas.map((area) => (
                <article className="focus-card" key={area.code}>
                  <div className="focus-card-topline">
                    <span className="mono-label">{area.code}</span>
                    <StatusTag tone="amber">PENDENTE</StatusTag>
                  </div>
                  <h3>{area.label}</h3>
                  <p>{area.detail}</p>
                  <span className="focus-corner" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="metodo" aria-labelledby="method-title">
          <SectionIntro
            eyebrow="03 / Método de case"
            title="Toda prova terá cinco camadas legíveis."
            detail="A estrutura foi definida no Envelope para separar contexto de responsabilidade e resultado de promessa."
          />
          <div className="method-layout">
            <div className="method-statement">
              <span className="statement-mark" aria-hidden="true">/</span>
              <p id="method-title">Clareza operacional é o fio condutor desta superfície.</p>
              <span className="mono-label">CASE ANATOMY / READY</span>
            </div>
            <div className="anatomy-list">
              {caseAnatomy.map((item) => (
                <div className="anatomy-row" key={item.index}>
                  <span className="anatomy-index">{item.index}</span>
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <Icon name="chevron-right" size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-surface" id="projetos" aria-labelledby="projects-title">
          <div className="container">
            <SectionIntro
              eyebrow="04 / Projetos e cases"
              title="A vitrine fica vazia até haver prova pública."
              detail="Nenhuma experiência foi adicionada nesta sessão. O componente abaixo é o molde de cada case real."
            />
            <article className="empty-case" aria-labelledby="projects-title">
              <div className="empty-case-mark" aria-hidden="true">
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="empty-case-copy">
                <div className="eyebrow-row">
                  <span className="mono-label">CASE SLOT / 01</span>
                  <StatusTag tone="quiet">SEM CONTEÚDO PÚBLICO</StatusTag>
                </div>
                <h3 id="projects-title">Pronto para receber um trabalho que possa ser verificado.</h3>
                <p>
                  Cada entrada deverá informar contexto, responsabilidade, abordagem, tecnologia e
                  resultado comprovável — sem transformar confidencialidade em narrativa inventada.
                </p>
              </div>
              <div className="empty-case-side">
                <Icon name="lock" size={22} />
                <span>Fatos pendentes</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section container cv-callout" aria-labelledby="cv-callout-title">
          <div>
            <p className="eyebrow">05 / Currículo</p>
            <h2 id="cv-callout-title">Uma página própria para leitura rápida e impressão.</h2>
          </div>
          <div className="cv-callout-action">
            <p>O layout está pronto. O conteúdo factual ainda não foi fornecido.</p>
            <button className="button button-outline" type="button" onClick={onOpenCurriculum}>
              Ver rota de currículo
              <Icon name="arrow-up-right" size={17} />
            </button>
          </div>
        </section>

        <section className="section contact-section" id="contato" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">06 / Contato</p>
              <h2 id="contact-title">O canal público entra quando existir um canal real.</h2>
            </div>
            <div className="contact-gate">
              <StatusTag>CONTATO PENDENTE</StatusTag>
              <p>
                Nenhum e-mail, telefone ou link foi publicado por esta base. O próximo passo é
                receber os contatos que o Dyllan deseja tornar públicos para candidaturas.
              </p>
              <span className="mono-label">/ aguardando definição do proprietário</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="brand-context">Dyllan / security portfolio</span>
          <span className="footer-status"><i aria-hidden="true" /> local / não publicado</span>
          <span className="brand-context">2026</span>
        </div>
      </footer>
    </div>
  )
}
