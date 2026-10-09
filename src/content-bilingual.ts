// DGX FILE HEADER
// nivel: L2-large
// arquivo: src/content-bilingual.ts
// papel: Traduções públicas do portfólio pessoal, sem alterar a fonte factual em português.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-bilingual-content

import {
  complementaryTraining,
  digytronMethod,
  digytronProjects,
  digytronStack,
  education,
  focusAreas,
  languages,
  portfolioProfile,
  professionalExperiences,
  publicContacts,
  skillFocus,
  supportingSkills,
  type Experience,
  type FocusArea,
  type PublicContact,
} from './content'
import type { Language } from './i18n'

type Profile = {
  name: string
  shortName: string
  headline: string
  positioning: string
  location: string
  intro: string
  heroStatement: string
  heroNote: string
}

type SkillGroup = {
  label: string
  detail: string
  items: readonly string[]
}

type EducationItem = {
  institution: string
  detail: string
  course: string
  period: string
}

type LanguageItem = {
  language: string
  level: string
}

type MethodItem = {
  index: string
  label: string
  detail: string
}

type HomeCopy = {
  identityAria: string
  portraitAria: string
  focusAria: string
  talkToMe: string
  location: string
  portraitFocus: string
  workWith: string
  focusSupportingLine: string
  heroTitle: string
  heroCenter: string
  contactButton: string
  governanceButton: string
  aboutEyebrow: string
  aboutTitle: string
  aboutMeta: string
  operationCardTitle: string
  operationCardCopy: string
  operationCardLink: string
  focusEyebrow: string
  focusTitle: string
  focusCopy: string
  experienceEyebrow: string
  experienceTitle: string
  experienceSideNote: string
  skillsEyebrow: string
  skillsTitle: string
  skillsCopy: string
  focusLabel: string
  stackTitle: string
  stackCopy: string
  learningEyebrow: string
  learningTitle: string
  digytronEyebrow: string
  digytronTitle: string
  digytronCopy: string
  digytronNote: string
  methodTitle: string
  methodLabels: readonly string[]
  curriculumEyebrow: string
  curriculumTitle: string
  curriculumCopy: string
  curriculumButton: string
  contactEyebrow: string
  contactTitle: string
  contactLede: string
  footerContext: string
}

type CurriculumCopy = {
  back: string
  download: string
  print: string
  kicker: string
  profile: string
  experience: string
  projects: string
  skills: string
  education: string
  languages: string
  training: string
  footerFact: string
  version: string
  sidebarAria: string
  exportKicker: string
  exportTitle: string
  exportBody: string
  printBrowser: string
  factualKicker: string
  factualTitle: string
  factualItems: readonly string[]
  operationalKicker: string
  operationalBody: string
}

const profileEn: Profile = {
  ...portfolioProfile,
  headline: 'Defensive Cybersecurity, Identity & Operational Resilience',
  positioning:
    'Rigorous access control (IAM), data protection, and network architecture designed to operate with least privilege and mitigate incidents.',
  intro:
    'I work in defensive cybersecurity: identity governance (IAM), network security, and data protection. My background in Information Systems, architecture, and software engineering supports the construction of protected, auditable environments. At Digytron BR, this practice takes shape in real operations and governed systems.',
  heroStatement: 'Defensive security where risk is real: identity, infrastructure, and technical governance.',
  heroNote: 'Defensive cybersecurity with operational clarity and resilient architecture.',
}

const experiencesEn: Experience[] = [
  {
    company: 'Digytron BR',
    role: 'Software Engineering & Applied Security',
    period: '2019 — Present',
    summary: 'Identity governance, data security, and engineering-tool evolution for an own operation.',
    bullets: [
      'Implemented access-control policies (RBAC/IAM), applying the principle of least privilege in corporate systems.',
      'Managed and securely custodied credentials, API keys, and production secrets, preventing leaks and unauthorized access.',
      'Modeled relational data security with Row Level Security (RLS) and technical alignment with Brazil’s LGPD.',
      'Established audit trails and logs for traceability of critical events.',
    ],
    sourceNote: 'Source: Digytron BR technical documentation and operational governance.',
    current: true,
  },
  {
    company: 'Onitel Telecom',
    role: 'IT Analyst',
    period: '12/2024 — 12/2025',
    summary: 'Full-time, on-site IT analyst at a telecommunications provider.',
    bullets: ['Full-time, on-site IT analyst at a telecommunications provider.'],
    sourceNote: 'Source: professional LinkedIn profile, confirmed by the holder.',
  },
  {
    company: 'Reitec',
    role: 'Systems Analyst',
    period: '11/2023 — 11/2024',
    summary: 'Full-time systems analyst working with Python and HTML5.',
    bullets: ['Full-time systems analyst working with Python and HTML5.'],
    sourceNote: 'Source: professional LinkedIn profile, confirmed by the holder.',
  },
  {
    company: 'Stefanini Group',
    role: 'Network & Operations Analyst (banking project)',
    period: '08/2022 — 03/2023',
    summary: 'Continuous monitoring of circuits and mission-critical data traffic in a national banking environment.',
    bullets: [
      'Continuously monitored circuits and mission-critical data traffic in a national banking environment.',
      'Proactively detected network anomalies, route degradation, and incidents under strict banking audit, compliance, and SLA protocols.',
      'Stabilized and analyzed BGP routing integrity in Huawei infrastructure.',
    ],
    sourceNote: 'Source: professional base curriculum.',
  },
  {
    company: 'AGE Telecom',
    role: 'Support & Network Analyst',
    period: '03/2022 — 01/2023',
    summary: 'Secure connectivity infrastructure and solutions for critical customers and corporate accounts.',
    bullets: [
      'Segmented traffic (VLANs), deployed secure links, and established corporate VPN tunnels for branch interconnection.',
      'Configured and hardened routers, ONUs, and edge equipment (Huawei, Datacom, MikroTik).',
      'Standardized technical procedures and SLA controls to mitigate unplanned outages.',
    ],
    sourceNote: 'Source: professional base curriculum.',
  },
  {
    company: 'NWI Telecom',
    role: 'Teleprocessing Network Operator',
    period: '04/2021 — 03/2022',
    summary: 'Telecommunications infrastructure operations, network observability, and traffic security.',
    bullets: [
      'Built and maintained active operational visibility with Zabbix, PRTG, and The Dude.',
      'Configured network equipment and controlled traffic integrity across corporate links.',
    ],
    sourceNote: 'Source: professional base curriculum.',
  },
  {
    company: 'SKILL.NET',
    role: 'Technical Support & Network Operations',
    period: '03/2018 — 05/2021',
    summary: 'Secure support routines, local-network administration, and physical/logical integrity maintenance.',
    bullets: [
      'Ran secure support routines, local-network administration, physical/logical integrity maintenance, and auditable documentation control.',
      'Configured routers, switches, and ONUs and monitored asset availability through MikroTik and Zabbix.',
    ],
    sourceNote: 'Source: professional base curriculum.',
  },
]

const focusAreasEn: readonly FocusArea[] = [
  {
    code: 'cybersecurity',
    number: '01',
    title: 'Defensive Cybersecurity',
    summary: 'Identity governance, active data protection, and defensive architecture.',
    tags: ['IAM & Least Privilege', 'Row Level Security (RLS)', 'LGPD & ISO 27001', 'Secret Custody'],
    primary: true,
  },
  {
    code: 'infrastructure',
    number: '02',
    title: 'Network & Infrastructure Security',
    summary: 'Critical-traffic stability, edge isolation, and continuous observability.',
    tags: ['BGP & TCP/IP Routing', 'Corporate VPNs & VLANs', 'Zabbix & PRTG', 'Linux Hardening'],
  },
  {
    code: 'data-governance',
    number: '03',
    title: 'Data, Governance & BI',
    summary: 'Traceability, secure record modeling, and operational auditability.',
    tags: ['Data Traceability', 'PII Minimization', 'Reconciliation & Audit', 'Operational Dashboards'],
  },
  {
    code: 'software',
    number: '04',
    title: 'Software Engineering',
    summary: 'Structured development, resilient APIs, and operational automation scripts.',
    tags: ['React & TypeScript', 'Secure APIs & Webhooks', 'Routine Automation', 'Layered Architecture'],
  },
]

const skillFocusEn = {
  title: 'Defensive Cybersecurity',
  detail: 'The public curriculum focus: identity governance (IAM), data protection, network security, and auditable technical compliance.',
  items: ['IAM & Least Privilege', 'Network Security (BGP/VPNs)', 'LGPD & ISO 27001', 'Observability & Audit'],
}

const supportingSkillsEn: readonly SkillGroup[] = [
  {
    label: 'Architecture & Infrastructure',
    detail: 'Resilient networks, environment isolation, and continuous observability.',
    items: ['Network Segmentation (VLANs)', 'BGP & Routing', 'VPNs & Secure Links', 'Zabbix & PRTG'],
  },
  {
    label: 'Governance & Compliance',
    detail: 'Technical compliance, risk mitigation, and auditability.',
    items: ['Applied LGPD', 'ISO 27001', 'Audit Trails', 'Access Policies'],
  },
  {
    label: 'Software & Automation',
    detail: 'Structured code, secure APIs, and operational scripts.',
    items: ['Secure APIs', 'TypeScript / React', 'Python & Scripts', 'PostgreSQL / RLS'],
  },
]

const projectsEn = [
  { title: 'DGX Sovereign', detail: 'How a human governs AI: written criteria, dispatch, and proof.' },
  { title: 'Digytron OS', detail: 'Own operation: digital products and tools in the same context.' },
  { title: 'Digytron Genesis', detail: 'Workbench for sessions, workspaces, and local work inspection.' },
  { title: 'Lecion Premium', detail: 'AI education product with authentication, credits, and PDF generation.' },
]

const educationEn: readonly EducationItem[] = [
  {
    institution: 'UNIDESC',
    detail: 'Centro Universitário de Desenvolvimento do Centro-Oeste',
    course: 'Information Systems · Bachelor’s degree',
    period: 'Feb/2015 — Dec/2019',
  },
]

const trainingEn = [
  'ISO 27001 — Information Security',
  'LGPD — Privacy and Data Protection',
  'Corporate Compliance and Governance',
  'TCP/IP Networks, BGP, and Secure Routing',
  'Linux Hardening and Systems Administration',
  'ISO 9001 and Quality Management',
  'Advanced Excel and Data Analysis',
] as const

const languagesEn: readonly LanguageItem[] = [
  { language: 'English', level: 'Level to be confirmed' },
]

const methodEn: readonly MethodItem[] = [
  { index: 'A', label: 'Context', detail: 'Understand the system and what must remain protected.' },
  { index: 'B', label: 'Responsibility', detail: 'Separate direct execution from what still requires confirmation.' },
  { index: 'C', label: 'Approach', detail: 'Build in layers and validate real behavior.' },
  { index: 'D', label: 'Technology', detail: 'Choose tools for the role they fulfill.' },
  { index: 'E', label: 'Evidence', detail: 'Publish only what can be demonstrated safely.' },
]

export const homeCopy: Record<Language, HomeCopy> = {
  pt: {
    identityAria: 'Identidade profissional',
    portraitAria: 'Retrato de Dyllan Alves Cordeiro',
    focusAria: 'Áreas de atuação',
    talkToMe: 'Vamos conversar',
    location: 'Valparaíso de Goiás',
    portraitFocus: 'Cibersegurança defensiva',
    workWith: 'Trabalho com',
    focusSupportingLine: 'Infraestrutura, governança e software sustentam o núcleo defensivo.',
    heroTitle: 'Segurança defensiva onde o risco é real.',
    heroCenter: 'cibersegurança · infraestrutura · governança · software',
    contactButton: 'Falar comigo',
    governanceButton: 'Governança de IA',
    aboutEyebrow: 'Sobre',
    aboutTitle: 'Cibersegurança primeiro. O resto sustenta.',
    aboutMeta: 'Cibersegurança defensiva · IAM · resiliência',
    operationCardTitle: 'A operação própria onde a segurança vira engenharia.',
    operationCardCopy: 'Produtos digitais e ferramentas construídos com contexto, documentação e cuidado com a operação.',
    operationCardLink: 'Conhecer o trabalho',
    focusEyebrow: 'Áreas de atuação',
    focusTitle: 'Um núcleo principal. Três pilares de sustentação.',
    focusCopy: 'Cibersegurança defensiva no centro. Infraestrutura, governança e software no entorno.',
    experienceEyebrow: 'Experiência',
    experienceTitle: 'Experiência que virou repertório.',
    experienceSideNote: 'Cibersegurança defensiva e operações de missão crítica.',
    skillsEyebrow: 'Competências',
    skillsTitle: 'O que sustenta o foco. Sem vitrine.',
    skillsCopy: 'Uma leitura do repertório, não um mosaico de pílulas.',
    focusLabel: 'Foco',
    stackTitle: 'Stack Digytron BR',
    stackCopy: 'Ferramentas da operação própria, em leitura de alto nível.',
    learningEyebrow: 'Formação complementar',
    learningTitle: 'Base ampla, próxima da operação.',
    digytronEyebrow: 'Digytron BR',
    digytronTitle: 'Projetos reais, construídos no mesmo contexto.',
    digytronCopy: 'Na Digytron BR, a cibersegurança atravessa a arquitetura — do Soberano aos produtos que tornam essa operação possível.',
    digytronNote: 'A descrição é de alto nível; cases detalhados ainda aguardam evidência e aprovação de citação.',
    methodTitle: 'Como eu trabalho',
    methodLabels: ['Entender', 'Construir', 'Provar'],
    curriculumEyebrow: 'Currículo',
    curriculumTitle: 'Cibersegurança em uma leitura só.',
    curriculumCopy: 'Uma página própria para ler, imprimir e levar para a candidatura.',
    curriculumButton: 'Ver currículo',
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos conversar.',
    contactLede: 'Para candidaturas, parcerias técnicas ou uma conversa sobre cibersegurança — com arquitetura, dados e software no entorno.',
    footerContext: 'Digytron BR · cibersegurança aplicada',
  },
  en: {
    identityAria: 'Professional identity',
    portraitAria: 'Portrait of Dyllan Alves Cordeiro',
    focusAria: 'Areas of work',
    talkToMe: 'Let’s talk',
    location: 'Valparaíso de Goiás',
    portraitFocus: 'Defensive cybersecurity',
    workWith: 'I work on',
    focusSupportingLine: 'Infrastructure, governance, and software sustain the defensive core.',
    heroTitle: 'Defensive security where risk is real.',
    heroCenter: 'cybersecurity · infrastructure · governance · software',
    contactButton: 'Talk to me',
    governanceButton: 'AI governance',
    aboutEyebrow: 'About',
    aboutTitle: 'Defensive cybersecurity first. Everything else supports it.',
    aboutMeta: 'Defensive cybersecurity · IAM · resilience',
    operationCardTitle: 'The own operation where security becomes engineering.',
    operationCardCopy: 'Digital products and tools built with context, documentation, and operational care.',
    operationCardLink: 'See the work',
    focusEyebrow: 'Areas of work',
    focusTitle: 'One primary core. Three supporting pillars.',
    focusCopy: 'Defensive cybersecurity at the center. Infrastructure, governance, and software around it.',
    experienceEyebrow: 'Experience',
    experienceTitle: 'Experience turned into practice.',
    experienceSideNote: 'Defensive cybersecurity and mission-critical operations.',
    skillsEyebrow: 'Skills',
    skillsTitle: 'What sustains the focus. No showcase.',
    skillsCopy: 'A reading of the practice, not a mosaic of skill pills.',
    focusLabel: 'Focus',
    stackTitle: 'Digytron BR stack',
    stackCopy: 'Tools from the own operation, shown at a high level.',
    learningEyebrow: 'Additional training',
    learningTitle: 'A broad base, close to operations.',
    digytronEyebrow: 'Digytron BR',
    digytronTitle: 'Real projects, built in the same context.',
    digytronCopy: 'At Digytron BR, cybersecurity crosses the architecture — from the Sovereign layer to the products that make the operation possible.',
    digytronNote: 'This description stays high-level; detailed cases still await evidence and citation approval.',
    methodTitle: 'How I work',
    methodLabels: ['Understand', 'Build', 'Prove'],
    curriculumEyebrow: 'Curriculum',
    curriculumTitle: 'Defensive cybersecurity in one reading.',
    curriculumCopy: 'A dedicated page to read, print, and take into an application.',
    curriculumButton: 'View curriculum',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s talk.',
    contactLede: 'For applications, technical partnerships, or a conversation about cybersecurity — with architecture, data, and software around it.',
    footerContext: 'Digytron BR · applied cybersecurity',
  },
}

export const curriculumCopy: Record<Language, CurriculumCopy> = {
  pt: {
    back: 'Voltar ao portfólio',
    download: 'Baixar PDF Oficial',
    print: 'Imprimir',
    kicker: 'Currículo profissional',
    profile: 'Perfil',
    experience: 'Experiência profissional',
    projects: 'Projetos Digytron BR',
    skills: 'Competências',
    education: 'Formação',
    languages: 'Idiomas',
    training: 'Cursos e formação complementar',
    footerFact: 'Conteúdo factual e auditável de Cibersegurança Defensiva.',
    version: 'Versão oficial 2026',
    sidebarAria: 'Ações e estado do currículo',
    exportKicker: 'EXPORTAÇÃO',
    exportTitle: 'Leve este currículo com você.',
    exportBody: 'Baixe a versão executiva oficial em PDF (A4 de 1 página) ou utilize a impressão direta do navegador.',
    printBrowser: 'Imprimir via navegador →',
    factualKicker: 'LEITURA FACTUAL',
    factualTitle: 'Pilares desta versão',
    factualItems: [
      'Cibersegurança Defensiva e IAM como foco principal',
      'Governança de identidade, privilégio mínimo e RLS',
      'Operação de redes bancárias de missão crítica (Stefanini)',
      'LGPD técnica, ISO 27001 e conformidade auditável',
    ],
    operationalKicker: 'STATUS OPERACIONAL',
    operationalBody: 'Currículo consolidado e auditável. Repositório oficial e documentação sob governança contínua.',
  },
  en: {
    back: 'Back to portfolio',
    download: 'Download official Portuguese PDF',
    print: 'Print',
    kicker: 'Professional curriculum',
    profile: 'Profile',
    experience: 'Professional experience',
    projects: 'Digytron BR projects',
    skills: 'Skills',
    education: 'Education',
    languages: 'Languages',
    training: 'Courses and additional training',
    footerFact: 'Factual and auditable Defensive Cybersecurity content.',
    version: 'Official 2026 version',
    sidebarAria: 'Curriculum actions and status',
    exportKicker: 'EXPORT',
    exportTitle: 'Take this curriculum with you.',
    exportBody: 'The official one-page A4 PDF is currently Portuguese. Use the browser print flow to export this English presentation directly.',
    printBrowser: 'Print from browser →',
    factualKicker: 'FACTUAL READING',
    factualTitle: 'Pillars in this version',
    factualItems: [
      'Defensive Cybersecurity and IAM as the primary focus',
      'Identity governance, least privilege, and RLS',
      'Mission-critical banking network operations (Stefanini)',
      'Technical LGPD, ISO 27001, and auditable compliance',
    ],
    operationalKicker: 'OPERATIONAL STATUS',
    operationalBody: 'Consolidated, auditable curriculum. Official repository and documentation under continuous governance.',
  },
}

function localizedContacts(language: Language): PublicContact[] {
  const labels = language === 'pt'
    ? { email: 'E-mail', phone: 'Telefone', linkedin: 'LinkedIn', github: 'GitHub', portfolio: 'Portfólio' }
    : { email: 'E-mail', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', portfolio: 'Portfolio' }

  return publicContacts.map((contact) => ({
    ...contact,
    label: labels[contact.kind],
  }))
}

export function getPortfolioContent(language: Language) {
  const english = language === 'en'

  return {
    profile: english ? profileEn : portfolioProfile,
    contacts: localizedContacts(language),
    experiences: english ? experiencesEn : professionalExperiences,
    focusAreas: english ? focusAreasEn : focusAreas,
    skillFocus: english ? skillFocusEn : skillFocus,
    supportingSkills: english ? supportingSkillsEn : supportingSkills,
    stack: digytronStack,
    training: english ? trainingEn : complementaryTraining,
    projects: english ? projectsEn : digytronProjects,
    education: english ? educationEn : education,
    languages: english ? languagesEn : languages,
    method: english ? methodEn : digytronMethod,
    homeCopy: homeCopy[language],
    curriculumCopy: curriculumCopy[language],
  }
}
