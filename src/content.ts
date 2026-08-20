// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/content.ts
// papel: Fonte editorial factual do portfólio pessoal e do currículo público.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-content-source

export type ContentStatus = 'CONFIRMADO' | 'PENDENTE' | 'NÃO ENCONTRADO'

export type ContentLedgerItem = {
  label: string
  status: ContentStatus
  detail: string
}

export type PublicContact = {
  label: string
  value: string
  href: string
  kind: 'email' | 'phone' | 'linkedin' | 'github'
}

export function contactOpensExternally(kind: PublicContact['kind']) {
  return kind === 'linkedin' || kind === 'github'
}

export type Experience = {
  company: string
  role: string
  period: string
  summary: string
  bullets: string[]
  sourceNote: string
  current?: boolean
}

export const portfolioProfile = {
  name: 'Dyllan Alves Cordeiro',
  shortName: 'Dyllan',
  headline: 'Cibersegurança aplicada',
  positioning: 'Cibersegurança no centro; arquitetura de sistemas, dados e software em torno dela.',
  location: 'Valparaíso de Goiás, GO',
  intro:
    'Trabalho em cibersegurança aplicada: identidade, dados e operação. Arquitetura de sistemas, BI e engenharia de software entram como apoio para construir e manter o que precisa permanecer protegido. Na Digytron BR, essa prática ganha forma em produtos e ferramentas reais.',
  heroStatement: 'Segurança que dá para entender.',
  heroNote: 'Cibersegurança com clareza operacional.',
} as const

export const publicContacts: PublicContact[] = [
  {
    label: 'E-mail',
    value: 'dyllanalves@outlook.com',
    href: 'mailto:dyllanalves@outlook.com',
    kind: 'email',
  },
  {
    label: 'Telefone',
    value: '(61) 98642-9342',
    href: 'tel:+5561986429342',
    kind: 'phone',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dyllan-alves-cordeiro-87b997167',
    href: 'https://www.linkedin.com/in/dyllan-alves-cordeiro-87b997167/',
    kind: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio',
    href: 'https://github.com/dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio',
    kind: 'github',
  },
]

export const contentLedger: ContentLedgerItem[] = [
  {
    label: 'Identidade profissional',
    status: 'CONFIRMADO',
    detail: 'Nome completo, localização resumida e histórico profissional vieram do currículo-base fornecido.',
  },
  {
    label: 'Contatos públicos',
    status: 'CONFIRMADO',
    detail: 'E-mail, telefone e LinkedIn vieram do currículo-base; GitHub do site é o repositório pessoal dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio.',
  },
  {
    label: 'Digytron BR',
    status: 'CONFIRMADO',
    detail: 'Contexto técnico baseado na documentação local da Digytron e na solicitação explícita desta atualização.',
  },
  {
    label: 'Cases públicos detalhados',
    status: 'PENDENTE',
    detail: 'Ainda faltam autorização de citação, evidências e resultados verificáveis para transformar trabalhos em cases públicos.',
  },
  {
    label: 'Cargo preferido e datas atuais',
    status: 'PENDENTE',
    detail: 'O currículo-base tem cargos reais, mas não informa a posição pública preferida nem datas finais atualizadas.',
  },
]

export const professionalExperiences: Experience[] = [
  {
    company: 'Digytron BR',
    role: 'Atuação independente em engenharia aplicada',
    period: 'Atual · período exato a confirmar',
    summary:
      'Cibersegurança e evolução de produtos digitais, superfícies web e ferramentas de engenharia para uma operação própria.',
    bullets: [
      'Cibersegurança aplicada a identidade, dados, operação e governança técnica.',
      'Arquitetura de sistemas e desenvolvimento de produtos com React, TypeScript, Vite, Tailwind CSS e TanStack.',
      'Tratamento de dados e BI para leitura operacional, documentação e decisão.',
    ],
    sourceNote:
      'Fonte: documentação local de projetos Digytron; não expõe clientes, dados internos ou superfícies fora da autorização.',
    current: true,
  },
  {
    company: 'AGE Telecom',
    role: 'Analista de suporte',
    period: 'Emprego atual na data do currículo-base',
    summary:
      'Atuação técnica em infraestrutura de conectividade e soluções para clientes críticos.',
    bullets: [
      'Estruturação de métodos de atendimento e documentação de processos técnicos.',
      'Implementação de soluções para Wi-Fi, links dedicados e infraestrutura de acesso.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
  {
    company: 'Stefanini Group',
    role: 'Analista de redes e comunicação de dados',
    period: 'Início informado: 16/08/2021 · término não informado',
    summary:
      'Análise de arquitetura e estabilidade de redes de comunicação de dados, com foco em roteamento e desempenho.',
    bullets: [
      'Investigação de degradação de rede em equipamentos Huawei e circuitos de comunicação.',
      'Análise e estabilização do protocolo BGP dentro do escopo de atendimento.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
  {
    company: 'NWI Telecom',
    role: 'Operador de rede de teleprocessamento',
    period: 'Início informado: 19/04/2021 · término não informado',
    summary:
      'Operação de ambientes de telecomunicações e configuração de infraestrutura para diferentes perfis de conexão.',
    bullets: [
      'Construção de visibilidade operacional com The Dude, Zabbix e PRTG.',
      'Configuração de ONUs, roteadores e equipamentos Datacom, Huawei, MikroTik, Furukawa, TP-Link e Mercusys.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
  {
    company: 'SKILL.NET',
    role: 'Suporte técnico',
    period: '01/03/2018 — 01/05/2021',
    summary:
      'Base prática em infraestrutura, sistemas e suporte de rede.',
    bullets: [
      'Configuração de roteadores e ONUs e uso de Zabbix e MikroTik.',
      'Montagem e configuração de computadores, com apoio pontual em marketing digital.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
]

export const focusAreas = [
  {
    code: 'cybersecurity',
    title: 'Cibersegurança',
    detail: 'Identidade, dados e operação — o centro do trabalho público.',
    primary: true,
  },
  {
    code: 'architecture',
    title: 'Arquitetura de sistemas',
    detail: 'Integrações, camadas de operação e estrutura dos produtos.',
    primary: false,
  },
  {
    code: 'bi',
    title: 'Dados e BI',
    detail: 'Organização e leitura de dados para decisão operacional.',
    primary: false,
  },
  {
    code: 'software',
    title: 'Software',
    detail: 'Produtos, ferramentas e automações com código estruturado.',
    primary: false,
  },
] as const

export const skillFocus = {
  title: 'Cibersegurança',
  detail:
    'O foco público do currículo. Identidade, dados, operação e governança técnica — sem números, clientes ou certificações que ainda não foram confirmados.',
  items: ['Identidade', 'LGPD', 'Governança técnica', 'Observabilidade'],
} as const

export const supportingSkills = [
  {
    label: 'Arquitetura de sistemas',
    detail: 'Como os produtos se encaixam e o que precisa permanecer estável.',
    items: ['Sistemas', 'Integrações', 'Camadas de operação'],
  },
  {
    label: 'Dados e BI',
    detail: 'Leitura operacional para decisão, não vitrine de dashboard.',
    items: ['SQL', 'Dados operacionais', 'Dashboards'],
  },
  {
    label: 'Software',
    detail: 'Ferramentas usadas no trabalho real, sem lista ornamental.',
    items: ['React', 'TypeScript', 'Vite', 'Python', 'Java', 'PHP', 'HTML', 'MySQL'],
  },
] as const

export const digytronStack = ['Supabase', 'TanStack', 'Tailwind CSS', 'OpenAI', 'PDF', 'APIs'] as const

export const technicalSkills = [
  {
    label: 'Cibersegurança',
    items: [...skillFocus.items],
  },
  ...supportingSkills.map((group) => ({
    label: group.label,
    items: [...group.items],
  })),
] as const

export const digytronProjects = [
  {
    title: 'Soberano DGX',
    detail: 'Arquitetura de agentes, CPU, LIAM, MCP, skills e governança.',
  },
  {
    title: 'Digytron OS',
    detail: 'Cockpit operacional para produtos, clientes, engines, infraestrutura e runtime.',
  },
  {
    title: 'Digytron Genesis',
    detail: 'Workbench de sessões, workspaces e leitura local do trabalho.',
  },
  {
    title: 'Lecion Premium',
    detail: 'Produto educacional com IA, autenticação, créditos e geração de PDF.',
  },
] as const

export const education = [
  {
    institution: 'UNIDESC',
    detail: 'Centro Universitário de Desenvolvimento do Centro-Oeste',
    course: 'Sistemas de Informação · Bacharelado',
    period: 'fev/2015 — dez/2019',
  },
] as const

export const complementaryTraining = [
  'Redes de computadores',
  'ISO 27001 e segurança da informação',
  'ISO 9001 e ISO 14001',
  'LGPD — conceitos básicos',
  'Compliance',
  'Linux',
  'Java e algoritmos',
  'Hardware',
  'Ferramentas Google para produtividade',
] as const

export const languages = [
  { language: 'Inglês', level: 'Intermediário avançado' },
  { language: 'Espanhol', level: 'Básico' },
] as const

export const digytronMethod = [
  {
    index: 'A',
    label: 'Contexto',
    detail: 'Entender o sistema e o que precisa permanecer protegido.',
  },
  {
    index: 'B',
    label: 'Responsabilidade',
    detail: 'Separar execução direta do que ainda depende de confirmação.',
  },
  {
    index: 'C',
    label: 'Abordagem',
    detail: 'Construir em camadas e validar o comportamento real.',
  },
  {
    index: 'D',
    label: 'Tecnologia',
    detail: 'Escolher ferramentas pelo papel que cumprem.',
  },
  {
    index: 'E',
    label: 'Evidência',
    detail: 'Publicar só o que pode ser demonstrado com segurança.',
  },
] as const

export const pendingContent = [
  'Cargo ou posicionamento profissional preferido',
  'Datas finais atualizadas de experiências anteriores',
  'Certificados, instituições emissoras e datas',
  'Três a cinco cases com autorização de citação e resultado verificável',
  'Outros links públicos, se existirem além deste GitHub do site',
  'Domínio definitivo e idioma inicial da publicação',
] as const

export const omittedFromPublicResume = [
  'Endereço completo, data de nascimento, estado civil e informação sobre filhos',
  'Experiência administrativa e estágio antigo, por não serem centrais ao posicionamento atual',
  'Disponibilidade genérica para viagens ou mudança de região',
  'Números, clientes, certificações formais ou resultados que não aparecem em fonte validada',
] as const
