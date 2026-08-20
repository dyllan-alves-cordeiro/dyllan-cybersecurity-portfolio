// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/pages/HomePage.tsx
// papel: Página inicial do portfólio pessoal, com retrato real, posicionamento e prova factual.
// governa: docs/content-contract.md
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-home-page

import {
  complementaryTraining,
  contentLedger,
  digytronMethod,
  focusAreas,
  portfolioProfile,
  professionalExperiences,
  publicContacts,
  technicalSkills,
} from '../content'
import { Icon } from '../icons'
import { SiteHeader } from '../components/SiteHeader'
import { ContentStatusTag, StatusTag } from '../components/StatusTag'

type HomePageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
}

export function HomePage({ onOpenCurriculum, onHome }: HomePageProps) {
  return (
    <div className="app-shell home-shell">
      <SiteHeader onOpenCurriculum={onOpenCurriculum} onHome={onHome} />

      <main>
        <section className="portrait-hero" aria-labelledby="hero-title">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-light hero-light-one" aria-hidden="true" />
          <div className="hero-light hero-light-two" aria-hidden="true" />

          <div className="container portrait-hero-inner">
            <aside className="hero-side hero-side-left" aria-label="Identidade profissional">
              <div className="hero-side-topline">
                <span className="hero-index">01 / identidade</span>
                <span className="hero-live"><i aria-hidden="true" /> em atuação</span>
              </div>
              <p className="hero-name">
                Dyllan
                <br />
                <span>Alves</span>
                <br />
                Cordeiro
              </p>
              <p className="hero-role">{portfolioProfile.headline}</p>
              <p className="hero-side-copy">
                Redes, infraestrutura e suporte técnico com uma visão cada vez mais próxima de
                segurança aplicada.
              </p>
              <a className="hero-side-contact" href={publicContacts[0].href}>
                {publicContacts[0].value}
                <Icon name="arrow-up-right" size={14} />
              </a>
            </aside>

            <figure className="hero-portrait" aria-label="Retrato de Dyllan Alves Cordeiro">
              <div className="hero-portrait-image-wrap">
                <img
                  className="hero-portrait-image"
                  src="/assets/dyllan-alves-cordeiro.jpeg"
                  alt="Retrato de Dyllan Alves Cordeiro"
                  width="1280"
                  height="1280"
                  decoding="async"
                />
              </div>
              <figcaption className="hero-portrait-caption">
                <span>retrato / 2026</span>
                <span>01—01</span>
              </figcaption>
            </figure>

            <aside className="hero-side hero-side-right" aria-label="Áreas de atuação">
              <div className="hero-side-topline">
                <span className="hero-index">02 / foco</span>
                <span className="hero-index">BR — GO</span>
              </div>
              <p className="hero-side-label">O que eu faço</p>
              <ul className="hero-focus-list">
                {focusAreas.map((area) => (
                  <li key={area.code}>
                    <span>{area.code}</span>
                    <strong>{area.title}</strong>
                  </li>
                ))}
              </ul>
              <p className="hero-side-copy hero-side-copy-right">
                Na Digytron, essa base se transforma em engenharia aplicada, produtos digitais e
                operação técnica documentada.
              </p>
            </aside>

            <div className="hero-bottom">
              <div className="hero-title-block">
                <span className="hero-index">03 / posicionamento</span>
                <h1 id="hero-title">
                  Segurança
                  <br />
                  demonstrada por <em>clareza.</em>
                </h1>
              </div>
              <div className="hero-bottom-center">
                <span className="hero-scroll-mark" aria-hidden="true">↓</span>
                <span>ver método</span>
              </div>
              <div className="hero-bottom-actions">
                <button className="button button-light" type="button" onClick={onOpenCurriculum}>
                  Abrir currículo
                  <Icon name="arrow-up-right" size={16} />
                </button>
                <button className="hero-text-link" type="button" onClick={() => onHome('contato')}>
                  Falar comigo
                  <Icon name="arrow-up-right" size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section profile-section" id="perfil" aria-labelledby="profile-title">
          <div className="container section-grid profile-section-grid">
            <div className="section-heading-block">
              <span className="section-index">04 / perfil</span>
              <h2 id="profile-title">A pessoa vem antes da lista de tecnologias.</h2>
              <p>{portfolioProfile.intro}</p>
              <div className="profile-meta-row">
                <span>{portfolioProfile.location}</span>
                <span>•</span>
                <span>Digytron / engenharia aplicada</span>
              </div>
            </div>

            <div className="fact-ledger-card">
              <div className="card-topline">
                <span className="mono-label">FACT LEDGER / 05</span>
                <span className="card-topline-rule" aria-hidden="true" />
                <span className="mono-label">base factual</span>
              </div>
              <div className="fact-ledger-list">
                {contentLedger.map((item) => (
                  <div className="fact-ledger-row" key={item.label}>
                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <ContentStatusTag status={item.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section focus-section" id="atuacao" aria-labelledby="focus-title">
          <div className="container">
            <div className="section-heading-inline">
              <div>
                <span className="section-index">05 / áreas de atuação</span>
                <h2 id="focus-title">Onde a experiência encontra o próximo nível.</h2>
              </div>
              <p>
                Uma leitura curta do que já aparece no currículo e do que está sendo construído na
                Digytron.
              </p>
            </div>
            <div className="focus-card-grid">
              {focusAreas.map((area) => (
                <article className="focus-card-v2" key={area.code}>
                  <div className="focus-card-number">{area.code}</div>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.detail}</p>
                  </div>
                  <span className="focus-card-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section experience-section" id="experiencia" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading-inline experience-heading">
              <div>
                <span className="section-index">06 / experiência</span>
                <h2 id="experience-title">Percurso técnico, sem atalhos na narrativa.</h2>
              </div>
              <span className="section-side-note">5 experiências selecionadas<br />a partir do CV-base</span>
            </div>

            <div className="experience-list">
              {professionalExperiences.map((experience, index) => (
                <article className={`experience-row${experience.current ? ' experience-row-featured' : ''}`} key={`${experience.company}-${experience.role}`}>
                  <div className="experience-index">0{index + 1}</div>
                  <div className="experience-main">
                    <div className="experience-heading-row">
                      <div>
                        <div className="experience-company-line">
                          <h3>{experience.company}</h3>
                          {experience.current ? <StatusTag tone="mint">ATUAÇÃO ATUAL</StatusTag> : null}
                        </div>
                        <p className="experience-role">{experience.role}</p>
                      </div>
                      <span className="experience-period">{experience.period}</span>
                    </div>
                    <p className="experience-summary">{experience.summary}</p>
                    <ul className="experience-bullets">
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                    <p className="experience-source">{experience.sourceNote}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section skills-section" id="competencias" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading-inline">
              <div>
                <span className="section-index">07 / competências</span>
                <h2 id="skills-title">Ferramentas que aparecem no trabalho.</h2>
              </div>
              <p>Lista revisada a partir do currículo-base. Sem badges automáticos, sem certificação presumida.</p>
            </div>

            <div className="skills-layout">
              <div className="skills-grid">
                {technicalSkills.map((group) => (
                  <article className="skill-group" key={group.label}>
                    <h3>{group.label}</h3>
                    <div className="skill-pill-list">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                ))}
              </div>
              <div className="learning-card">
                <span className="section-index">formação complementar</span>
                <h3>Base ampla, próxima da operação.</h3>
                <ul>
                  {complementaryTraining.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section digytron-section" id="metodo" aria-labelledby="dgy-title">
          <div className="container section-grid digytron-grid">
            <div className="dgy-copy">
              <span className="section-index">08 / digytron</span>
              <h2 id="dgy-title">Uma atuação que conecta infraestrutura, produto e segurança.</h2>
              <p>
                A Digytron é o contexto atual de engenharia aplicada: uma arquitetura digital própria,
                com pesquisa, produtos e ferramentas construídos de forma documentada e soberana.
              </p>
              <div className="dgy-note">
                <span className="dgy-note-mark">/</span>
                <span>Esta é uma descrição profissional de alto nível. Cases públicos detalhados ainda aguardam evidência e aprovação de citação.</span>
              </div>
            </div>
            <div className="method-card">
              <div className="card-topline">
                <span className="mono-label">MÉTODO / DIGYTRON</span>
                <span className="mono-label">A—E</span>
              </div>
              <div className="method-list">
                {digytronMethod.map((item) => (
                  <div className="method-row" key={item.index}>
                    <span>{item.index}</span>
                    <strong>{item.label}</strong>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section cv-section" aria-labelledby="cv-title-home">
          <div className="container cv-section-inner">
            <div>
              <span className="section-index">09 / currículo</span>
              <h2 id="cv-title-home">Uma página própria para ler, imprimir e levar para a candidatura.</h2>
              <p>Conteúdo transcrito do CV-base e reorganizado para destacar redes, infraestrutura e Digytron.</p>
            </div>
            <button className="button button-light button-dark-surface" type="button" onClick={onOpenCurriculum}>
              Ver currículo completo
              <Icon name="arrow-up-right" size={16} />
            </button>
          </div>
        </section>

        <section className="portfolio-section contact-section-v2" id="contato" aria-labelledby="contact-title">
          <div className="container section-grid contact-grid-v2">
            <div>
              <span className="section-index">10 / contato</span>
              <h2 id="contact-title">Vamos conversar sobre o próximo problema.</h2>
              <p className="contact-lede">Para candidaturas, parcerias técnicas ou uma conversa sobre infraestrutura e segurança.</p>
            </div>
            <div className="contact-list-v2">
              {publicContacts.map((contact) => (
                <a href={contact.href} key={contact.label} target={contact.kind === 'linkedin' ? '_blank' : undefined} rel={contact.kind === 'linkedin' ? 'noreferrer' : undefined}>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                  <Icon name="arrow-up-right" size={15} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer site-footer-v2">
        <div className="container footer-inner">
          <span className="brand-context">Dyllan / cybersecurity portfolio</span>
          <span className="footer-status"><i aria-hidden="true" /> conteúdo local / em revisão final</span>
          <span className="brand-context">2026</span>
        </div>
      </footer>
    </div>
  )
}
