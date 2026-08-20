// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/pages/HomePage.tsx
// papel: Página inicial do portfólio pessoal, com retrato real, posicionamento e prova factual.
// governa: docs/content-contract.md
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-home-page

import {
  complementaryTraining,
  digytronMethod,
  digytronProjects,
  focusAreas,
  portfolioProfile,
  professionalExperiences,
  publicContacts,
  technicalSkills,
} from '../content'
import { Icon } from '../icons'
import { SiteHeader } from '../components/SiteHeader'

type HomePageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
}

const methodHighlights = [
  { label: 'Entender', detail: digytronMethod[0].detail },
  { label: 'Construir', detail: digytronMethod[2].detail },
  { label: 'Provar', detail: digytronMethod[4].detail },
]

export function HomePage({ onOpenCurriculum, onHome }: HomePageProps) {
  return (
    <div className="app-shell home-shell">
      <SiteHeader onOpenCurriculum={onOpenCurriculum} onHome={onHome} />

      <main>
        <section className="portrait-hero" aria-labelledby="hero-title">
          <div className="hero-light hero-light-one" aria-hidden="true" />
          <div className="hero-light hero-light-two" aria-hidden="true" />

          <div className="container portrait-hero-inner">
            <aside className="hero-side hero-side-left" aria-label="Identidade profissional">
              <p className="hero-name">Dyllan</p>
              <p className="hero-role">{portfolioProfile.headline}</p>
              <p className="hero-side-copy">
                Arquitetura, segurança e software para sistemas que precisam funcionar.
              </p>
              <a className="hero-side-contact" href={publicContacts[0].href}>
                Vamos conversar
                <Icon name="arrow-up-right" size={14} />
              </a>
            </aside>

            <figure className="hero-portrait" aria-label="Retrato de Dyllan Alves Cordeiro">
              <div className="hero-portrait-image-wrap">
                <img
                  className="hero-portrait-image"
                  src="/assets/dyllan-alves-cordeiro-cutout.png"
                  alt="Retrato de Dyllan Alves Cordeiro"
                  width="1280"
                  height="1280"
                  decoding="async"
                />
              </div>
              <figcaption className="hero-portrait-caption">
                <span>Valparaíso de Goiás</span>
                <span>Engenharia aplicada</span>
              </figcaption>
            </figure>

            <aside className="hero-side hero-side-right" aria-label="Áreas de atuação">
              <p className="hero-side-label">Trabalho com</p>
              <ul className="hero-focus-list">
                {focusAreas.map((area) => (
                  <li key={area.code}>
                    <strong>{area.title}</strong>
                    <span>{area.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="hero-side-copy hero-side-copy-right">
                Do dado à operação: BI, segurança e software aplicados ao contexto real.
              </p>
            </aside>

            <div className="hero-bottom">
              <div className="hero-title-block">
                <span className="hero-kicker">Segurança aplicada</span>
                <h1 id="hero-title">
                  Segurança que dá para <em>entender.</em>
                </h1>
              </div>
              <div className="hero-bottom-center">
                <span>arquitetura · segurança · BI · software</span>
              </div>
              <div className="hero-bottom-actions">
                <button className="button button-light" type="button" onClick={() => onHome('contato')}>
                  Falar comigo
                  <Icon name="arrow-up-right" size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section profile-section" id="perfil" aria-labelledby="profile-title">
          <div className="container section-grid profile-section-grid">
            <div className="section-heading-block">
              <span className="section-eyebrow">Sobre</span>
              <h2 id="profile-title">Trabalho técnico, explicado de forma simples.</h2>
              <p>{portfolioProfile.intro}</p>
              <div className="profile-meta-row">
                <span>{portfolioProfile.location}</span>
                <span>•</span>
                <span>Arquitetura, segurança, dados e software</span>
              </div>
            </div>

            <div className="profile-card">
              <span className="card-eyebrow">Hoje</span>
              <h3>Na Digytron, a base técnica vira engenharia aplicada.</h3>
              <p>
                Produtos digitais e ferramentas construídos com contexto, documentação e cuidado com a operação.
              </p>
              <button className="card-link" type="button" onClick={() => onHome('metodo')}>
                Conhecer o trabalho
                <Icon name="arrow-up-right" size={15} />
              </button>
            </div>
          </div>
        </section>

        <section className="portfolio-section focus-section" id="atuacao" aria-labelledby="focus-title">
          <div className="container">
            <div className="section-heading-inline">
              <div>
                <span className="section-eyebrow">Áreas de atuação</span>
                <h2 id="focus-title">Onde eu consigo ajudar.</h2>
              </div>
              <p>Quatro frentes que resumem o trabalho que faço hoje.</p>
            </div>
            <div className="focus-card-grid">
              {focusAreas.map((area) => (
                <article className="focus-card-v2" key={area.code}>
                  <div className="focus-card-content">
                    <span className="focus-card-label">{area.title}</span>
                    <h3>{area.detail}</h3>
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
                <span className="section-eyebrow">Experiência</span>
                <h2 id="experience-title">Experiência que virou repertório.</h2>
              </div>
              <span className="section-side-note">Arquitetura, segurança, dados e software.</span>
            </div>

            <div className="experience-list">
              {professionalExperiences.map((experience) => (
                <article className={`experience-row${experience.current ? ' experience-row-featured' : ''}`} key={`${experience.company}-${experience.role}`}>
                  <div className="experience-main">
                    <div className="experience-heading-row">
                      <div>
                        <div className="experience-company-line">
                          <h3>{experience.company}</h3>
                          {experience.current ? <span className="experience-current">Hoje</span> : null}
                        </div>
                        <p className="experience-role">{experience.role}</p>
                      </div>
                      <span className="experience-period">{experience.period}</span>
                    </div>
                    <p className="experience-summary">{experience.summary}</p>
                    <ul className="experience-bullets">
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
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
                <span className="section-eyebrow">Competências</span>
                <h2 id="skills-title">Ferramentas que aparecem no trabalho.</h2>
              </div>
              <p>O repertório técnico que sustenta as frentes atuais.</p>
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
                <span className="section-eyebrow">Formação complementar</span>
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
              <span className="section-eyebrow">Digytron</span>
              <h2 id="dgy-title">Projetos reais, construídos no mesmo contexto.</h2>
              <p>
                Na Digytron, atuo entre arquitetura, cibersegurança, dados e engenharia de software — do Soberano aos produtos que tornam essa operação possível.
              </p>
              <div className="dgy-project-list">
                {digytronProjects.map((project) => (
                  <div className="dgy-project-card" key={project.title}>
                    <strong>{project.title}</strong>
                    <span>{project.detail}</span>
                  </div>
                ))}
              </div>
              <p className="dgy-note-copy">
                A descrição é de alto nível; cases detalhados ainda aguardam evidência e aprovação de citação.
              </p>
            </div>
            <div className="method-card">
              <span className="card-eyebrow">Como eu trabalho</span>
              <div className="method-list">
                {methodHighlights.map((item) => (
                  <div className="method-row" key={item.label}>
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
              <span className="section-eyebrow">Currículo</span>
              <h2 id="cv-title-home">Tudo o que importa, em uma leitura só.</h2>
              <p>Uma página própria para ler, imprimir e levar para a candidatura.</p>
            </div>
            <button className="button button-light button-dark-surface" type="button" onClick={onOpenCurriculum}>
              Ver currículo
              <Icon name="arrow-up-right" size={16} />
            </button>
          </div>
        </section>

        <section className="portfolio-section contact-section-v2" id="contato" aria-labelledby="contact-title">
          <div className="container section-grid contact-grid-v2">
            <div>
              <span className="section-eyebrow">Contato</span>
              <h2 id="contact-title">Vamos conversar.</h2>
              <p className="contact-lede">Para candidaturas, parcerias técnicas ou uma conversa sobre arquitetura, segurança, dados e software.</p>
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
          <span className="footer-name">Dyllan</span>
          <span className="footer-context">Digytron · engenharia aplicada</span>
          <span className="footer-context">2026</span>
        </div>
      </footer>
    </div>
  )
}
