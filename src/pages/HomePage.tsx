// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/pages/HomePage.tsx
// papel: Página inicial do portfólio pessoal, com retrato real, posicionamento e prova factual.
// governa: docs/content-contract.md
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-home-page

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import {
  complementaryTraining,
  contactOpensExternally,
  digytronMethod,
  digytronProjects,
  digytronStack,
  focusAreas,
  portfolioProfile,
  professionalExperiences,
  publicContacts,
  skillFocus,
  supportingSkills,
} from '../content'
import { useScrolled } from '../hooks/useScrolled'
import { Icon } from '../icons'

type HomePageProps = {
  onOpenCurriculum: () => void
  onHome: (section?: string) => void
  onOpenGovernance?: () => void
}

const methodHighlights = [
  { label: 'Entender', detail: digytronMethod[0].detail },
  { label: 'Construir', detail: digytronMethod[2].detail },
  { label: 'Provar', detail: digytronMethod[4].detail },
]

const ease = [0.16, 1, 0.3, 1] as const

export function HomePage({ onOpenCurriculum, onHome, onOpenGovernance }: HomePageProps) {
  const scrolled = useScrolled(56)
  const reduced = useReducedMotion()

  return (
    <div className="app-shell home-shell">
      <SiteHeader
        onOpenCurriculum={onOpenCurriculum}
        onHome={onHome}
        onOpenGovernance={onOpenGovernance}
        visible={scrolled}
      />

      <main>
        <section className="portrait-hero" aria-labelledby="hero-title">
          <div className="hero-horizon hero-horizon-top" aria-hidden="true" />
          <div className="hero-horizon hero-horizon-bottom" aria-hidden="true" />
          <div className="hero-light hero-light-one" aria-hidden="true" />
          <div className="hero-light hero-light-two" aria-hidden="true" />

          <div className="container portrait-hero-inner">
            <motion.aside
              className="hero-side hero-side-left"
              aria-label="Identidade profissional"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              <p className="hero-name">Dyllan</p>
              <p className="hero-role">{portfolioProfile.headline}</p>
              <p className="hero-side-copy">
                {portfolioProfile.heroNote}
              </p>
              <a className="hero-side-contact" href={publicContacts[0].href}>
                Vamos conversar
                <Icon name="arrow-up-right" />
              </a>
            </motion.aside>

            <figure className="hero-portrait" aria-label="Retrato de Dyllan Alves Cordeiro">
              <div className="hero-portrait-image-wrap">
                <img
                  className="hero-portrait-image"
                  src="/assets/dyllan-alves-cordeiro-portrait.png"
                  alt="Retrato de Dyllan Alves Cordeiro"
                  width="1280"
                  height="1280"
                  decoding="async"
                />
              </div>
              <figcaption className="hero-portrait-caption">
                <span>Valparaíso de Goiás</span>
                <span>Cibersegurança defensiva</span>
              </figcaption>
            </figure>

            <motion.aside
              className="hero-side hero-side-right"
              aria-label="Áreas de atuação"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
            >
              <p className="hero-side-label">Trabalho com</p>
              <ul className="hero-focus-list">
                {focusAreas.map((area) => (
                  <li key={area.code} className={area.primary ? 'is-primary' : undefined}>
                    <strong>{area.title}</strong>
                    <span>{area.summary}</span>
                  </li>
                ))}
              </ul>
              <p className="hero-side-copy hero-side-copy-right">
                Infraestrutura, governança e software sustentam o núcleo defensivo.
              </p>
            </motion.aside>

            <div className="hero-bottom">
              <div className="hero-title-block">
                <span className="hero-kicker">{portfolioProfile.headline}</span>
                <h1 id="hero-title">
                  Segurança defensiva onde o risco é <em>real.</em>
                </h1>
              </div>
              <div className="hero-bottom-center">
                <span>cibersegurança · infraestrutura · governança · software</span>
              </div>
              <div className="hero-bottom-actions">
                <button className="button-light" type="button" onClick={() => onHome('contato')}>
                  Falar comigo
                  <Icon name="arrow-up-right" />
                </button>
                {onOpenGovernance ? (
                  <button className="hero-text-link" type="button" onClick={onOpenGovernance}>
                    Governança de IA
                    <Icon name="arrow-up-right" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section profile-section" id="perfil" aria-labelledby="profile-title">
          <Reveal className="container section-grid profile-section-grid" variant="soft">
            <div className="section-heading-block">
              <span className="section-eyebrow">Sobre</span>
              <h2 id="profile-title">Cibersegurança primeiro. O resto sustenta.</h2>
              <p>{portfolioProfile.intro}</p>
              <div className="profile-meta-row">
                <span>{portfolioProfile.location}</span>
                <span>•</span>
                <span>Cibersegurança defensiva · IAM · resiliência</span>
              </div>
            </div>

            <div className="profile-card">
              <span className="card-eyebrow">Digytron BR</span>
              <h3>A operação própria onde a segurança vira engenharia.</h3>
              <p>
                Produtos digitais e ferramentas construídos com contexto, documentação e cuidado com a operação.
              </p>
              <button className="card-link" type="button" onClick={() => onHome('metodo')}>
                Conhecer o trabalho
                <Icon name="arrow-up-right" />
              </button>
            </div>
          </Reveal>
        </section>

        <section className="portfolio-section focus-section" id="atuacao" aria-labelledby="focus-title">
          <Reveal className="container" variant="drift">
            <div className="section-heading-inline">
              <div>
                <span className="section-eyebrow">Áreas de atuação</span>
                <h2 id="focus-title">Um núcleo principal. Três pilares de sustentação.</h2>
              </div>
              <p>Cibersegurança defensiva no centro. Infraestrutura, governança e software no entorno.</p>
            </div>
            <div className="focus-editorial-list" role="list">
              {focusAreas.map((area) => (
                <article
                  key={area.code}
                  className={`focus-editorial-row${area.primary ? ' is-primary' : ''}`}
                  role="listitem"
                >
                  <div className="focus-editorial-left">
                    <span className="focus-editorial-num">{area.number}</span>
                    <h3 className="focus-editorial-title">{area.title}</h3>
                  </div>
                  <p className="focus-editorial-center">{area.summary}</p>
                  <div className="focus-editorial-right">
                    {area.tags.map((tag) => (
                      <span key={tag} className="focus-tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="portfolio-section experience-section" id="experiencia" aria-labelledby="experience-title">
          <Reveal className="container" variant="lift">
            <div className="section-heading-inline experience-heading">
              <div>
                <span className="section-eyebrow">Experiência</span>
                <h2 id="experience-title">Experiência que virou repertório.</h2>
              </div>
              <span className="section-side-note">Cibersegurança defensiva e operações de missão crítica.</span>
            </div>

            <div className="experience-list">
              {professionalExperiences.map((experience) => (
                <article className={`experience-row${experience.current ? ' experience-row-featured' : ''}`} key={`${experience.company}-${experience.role}`}>
                  <div className="experience-main">
                    <div className="experience-heading-row">
                      <div>
                        <div className="experience-company-line">
                          <h3>{experience.company}</h3>
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
          </Reveal>
        </section>

        <section className="portfolio-section skills-section" id="competencias" aria-labelledby="skills-title">
          <Reveal className="container" variant="base">
            <div className="section-heading-inline">
              <div>
                <span className="section-eyebrow">Competências</span>
                <h2 id="skills-title">O que sustenta o foco. Sem vitrine.</h2>
              </div>
              <p>Uma leitura do repertório, não um mosaico de pílulas.</p>
            </div>

            <div className="skills-redesign">
              <article className="skill-focus-card">
                <span className="section-eyebrow">Foco</span>
                <h3>{skillFocus.title}</h3>
                <p>{skillFocus.detail}</p>
                <ul className="skill-line-list">
                  {skillFocus.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>

              <div className="skill-support-grid">
                {supportingSkills.map((group) => (
                  <article className="skill-support-card" key={group.label}>
                    <h3>{group.label}</h3>
                    <p>{group.detail}</p>
                    <p className="skill-support-line">{group.items.join(' · ')}</p>
                  </article>
                ))}
                <article className="skill-support-card skill-support-quiet">
                  <h3>Stack Digytron BR</h3>
                  <p>Ferramentas da operação própria, em leitura de alto nível.</p>
                  <p className="skill-support-line">{digytronStack.join(' · ')}</p>
                </article>
              </div>

              <aside className="learning-card">
                <span className="section-eyebrow">Formação complementar</span>
                <h3>Base ampla, próxima da operação.</h3>
                <ul>
                  {complementaryTraining.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </aside>
            </div>
          </Reveal>
        </section>

        <section className="portfolio-section digytron-section" id="metodo" aria-labelledby="dgy-title">
          <Reveal className="container section-grid digytron-grid" variant="soft">
            <div className="dgy-copy">
              <span className="section-eyebrow">Digytron BR</span>
              <h2 id="dgy-title">Projetos reais, construídos no mesmo contexto.</h2>
              <p>
                Na Digytron BR, a cibersegurança atravessa a arquitetura — do Soberano aos produtos que tornam essa operação possível.
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
          </Reveal>
        </section>

        <section className="portfolio-section cv-section" aria-labelledby="cv-title-home">
          <Reveal className="container cv-section-inner" variant="settle">
            <div>
              <span className="section-eyebrow">Currículo</span>
              <h2 id="cv-title-home">Cibersegurança em uma leitura só.</h2>
              <p>Uma página própria para ler, imprimir e levar para a candidatura.</p>
            </div>
            <button className="button-light" type="button" onClick={onOpenCurriculum}>
              Ver currículo
              <Icon name="arrow-up-right" />
            </button>
          </Reveal>
        </section>

        <ContactSection />
      </main>

      <footer className="site-footer site-footer-v2">
        <div className="container footer-inner">
          <span className="footer-name">Dyllan</span>
          <span className="footer-context">Digytron BR · cibersegurança aplicada</span>
          <a
            className="footer-context"
            href="https://github.com/dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [70, -90])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 14])

  return (
    <section className="portfolio-section contact-section-v2" id="contato" aria-labelledby="contact-title" ref={ref}>
      {reduced ? null : (
        <div className="contact-parallax" aria-hidden="true">
          <motion.div className="contact-orb contact-orb-a" style={{ y: y1 }} />
          <motion.div className="contact-orb contact-orb-b" style={{ y: y2, rotate }} />
          <div className="contact-parallax-grain" />
        </div>
      )}
      <Reveal className="container section-grid contact-grid-v2" variant="lift">
        <div>
          <span className="section-eyebrow">Contato</span>
          <h2 id="contact-title">Vamos conversar.</h2>
          <p className="contact-lede">
            Para candidaturas, parcerias técnicas ou uma conversa sobre cibersegurança — com arquitetura, dados e software no entorno.
          </p>
        </div>
        <div className="contact-list-v2">
          {publicContacts.map((contact) => (
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
  )
}
