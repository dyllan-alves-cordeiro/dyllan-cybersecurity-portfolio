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
  kind: 'email' | 'phone' | 'linkedin' | 'github' | 'portfolio'
}

export function contactOpensExternally(kind: PublicContact['kind']) {
  return kind === 'linkedin' || kind === 'github' || kind === 'portfolio'
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
  headline: 'Cibersegurança Defensiva, Identidade & Resiliência Operacional',
  positioning:
    'Controle rigoroso de acessos (IAM), proteção de dados e arquitetura de redes desenhada para operar com privilégio mínimo e mitigar incidentes.',
  location: 'Valparaíso de Goiás, GO',
  intro:
    'Atuo em cibersegurança defensiva: governança de identidade (IAM), segurança de redes e proteção de dados. Minha base em Sistemas de Informação, arquitetura e engenharia de software sustenta a construção de ambientes protegidos e auditáveis. Na Digytron BR, essa prática ganha forma em operações reais e sistemas governados.',
  heroStatement: 'Segurança defensiva onde o risco é real: identidade, infraestrutura e governança técnica.',
  heroNote: 'Cibersegurança com clareza operacional e arquitetura resiliente.',
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
    value: 'linkedin.com/in/dyllancordeiro',
    href: 'https://www.linkedin.com/in/dyllancordeiro/',
    kind: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/dyllan-alves-cordeiro',
    href: 'https://github.com/dyllan-alves-cordeiro',
    kind: 'github',
  },
  {
    label: 'Portfólio',
    value: 'dyllan-cybersecurity-portfolio.vercel.app',
    href: 'https://dyllan-cybersecurity-portfolio.vercel.app',
    kind: 'portfolio',
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
    role: 'Engenharia de Software & Segurança Aplicada',
    period: '2022 — Atual',
    summary:
      'Governança de identidade, segurança de dados e evolução de ferramentas de engenharia para operação própria.',
    bullets: [
      'Implementação de políticas de controle de acesso (RBAC/IAM), aplicando o princípio do menor privilégio em sistemas corporativos.',
      'Gestão e custódia segura de credenciais, chaves de API e segredos de produção, prevenindo vazamentos e acessos não autorizados.',
      'Modelagem de segurança de dados em bancos relacionais com Row Level Security (RLS) e conformidade técnica com a LGPD.',
      'Estabelecimento de trilhas de auditoria e logs para rastreabilidade de eventos críticos.',
    ],
    sourceNote:
      'Fonte: documentação técnica e governança operacional Digytron BR.',
    current: true,
  },
  {
    company: 'Stefanini Group',
    role: 'Analista de Redes e Operações (Projeto Caixa Econômica Federal)',
    period: '2021',
    summary:
      'Monitoramento contínuo de circuitos e tráfego de dados de missão crítica em ambiente bancário nacional.',
    bullets: [
      'Monitoramento contínuo de circuitos e tráfego de dados de missão crítica em ambiente bancário nacional.',
      'Detecção proativa de anomalias de rede, degradação de rotas e incidentes, atuando sob rígidos protocolos de auditoria, conformidade e SLAs bancários.',
      'Estabilização e análise de integridade de roteamento BGP na infraestrutura Huawei.',
    ],
    sourceNote: 'Fonte: currículo-base profissional.',
  },
  {
    company: 'AGE Telecom',
    role: 'Analista de Suporte & Redes',
    period: '2021 — 2022',
    summary:
      'Infraestrutura de conectividade segura e soluções para clientes críticos e contas corporativas.',
    bullets: [
      'Segmentação de tráfego (VLANs), implantação de enlaces seguros e túneis VPN corporativos para interconexão de filiais.',
      'Configuração e endurecimento de roteadores, ONUs e equipamentos de borda (Huawei, Datacom, MikroTik).',
      'Padronização de procedimentos técnicos e controle de SLAs para mitigação de paradas não programadas.',
    ],
    sourceNote: 'Fonte: currículo-base profissional.',
  },
  {
    company: 'NWI Telecom',
    role: 'Operador de Rede de Teleprocessamento',
    period: '2021',
    summary:
      'Operação de infraestrutura de telecomunicações, observabilidade de rede e segurança de tráfego.',
    bullets: [
      'Construção e acompanhamento de visibilidade operacional ativa com Zabbix, PRTG e The Dude.',
      'Configuração de equipamentos de rede e controle de integridade de tráfego em enlaces corporativos.',
    ],
    sourceNote: 'Fonte: currículo-base profissional.',
  },
  {
    company: 'SKILL.NET',
    role: 'Suporte Técnico & Operações de Redes',
    period: '2018 — 2021',
    summary:
      'Rotinas de suporte seguro, administração de redes locais e manutenção de integridade física/lógica.',
    bullets: [
      'Rotinas de suporte seguro, administração de redes locais, manutenção de integridade física/lógica e controle documental auditável.',
      'Configuração de roteadores, switches, ONUs e monitoramento de disponibilidade de ativos via MikroTik e Zabbix.',
    ],
    sourceNote: 'Fonte: currículo-base profissional.',
  },
]

export type FocusArea = {
  code: string
  number: string
  title: string
  summary: string
  tags: readonly string[]
  primary?: boolean
}

export const focusAreas: readonly FocusArea[] = [
  {
    code: 'cybersecurity',
    number: '01',
    title: 'Cibersegurança Defensiva',
    summary: 'Governança de identidade, proteção ativa de dados e arquitetura defensiva.',
    tags: ['IAM & Least Privilege', 'Row Level Security (RLS)', 'LGPD & ISO 27001', 'Custódia de Segredos'],
    primary: true,
  },
  {
    code: 'infrastructure',
    number: '02',
    title: 'Segurança de Redes & Infra',
    summary: 'Estabilidade de tráfego crítico, isolamento de borda e observabilidade contínua.',
    tags: ['Roteamento BGP & TCP/IP', 'VPNs & VLANs Corporativas', 'Zabbix & PRTG', 'Hardening Linux'],
    primary: false,
  },
  {
    code: 'data-governance',
    number: '03',
    title: 'Dados, Governança & BI',
    summary: 'Rastreabilidade, modelagem segura de registros e auditoria de operações.',
    tags: ['Rastreabilidade de Dados', 'Minimização de PII', 'Conciliação & Auditoria', 'Dashboards Operacionais'],
    primary: false,
  },
  {
    code: 'software',
    number: '04',
    title: 'Engenharia de Software',
    summary: 'Desenvolvimento estruturado, APIs resilientes e scripts de automação operacional.',
    tags: ['React & TypeScript', 'APIs Seguras & Webhooks', 'Automação de Rotinas', 'Arquitetura em Camadas'],
    primary: false,
  },
] as const

export const skillFocus = {
  title: 'Cibersegurança Defensiva',
  detail:
    'O foco público do currículo: governança de identidade (IAM), proteção de dados, segurança de redes e conformidade técnica auditável.',
  items: [
    'IAM & Least Privilege',
    'Segurança de Redes (BGP/VPNs)',
    'LGPD & ISO 27001',
    'Observabilidade & Auditoria',
  ],
} as const

export const supportingSkills = [
  {
    label: 'Arquitetura & Infraestrutura',
    detail: 'Redes resilientes, isolamento de ambientes e observabilidade contínua.',
    items: ['Segmentação de Redes (VLANs)', 'BGP & Roteamento', 'VPNs & Enlaces Seguros', 'Zabbix & PRTG'],
  },
  {
    label: 'Governança & Compliance',
    detail: 'Conformidade técnica, mitigação de riscos e auditoria.',
    items: ['LGPD Aplicada', 'ISO 27001', 'Trilhas de Auditoria', 'Políticas de Acesso'],
  },
  {
    label: 'Software & Automação',
    detail: 'Código estruturado, APIs seguras e scripts operacionais.',
    items: ['APIs Seguras', 'TypeScript / React', 'Python & Scripts', 'PostgreSQL / RLS'],
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
    detail: 'Como o humano governa a IA: critério escrito, despacho e prova.',
  },
  {
    title: 'Digytron OS',
    detail: 'Operação própria: produtos digitais e ferramentas no mesmo contexto.',
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
  'ISO 27001 — Segurança da Informação',
  'LGPD — Privacidade e Proteção de Dados',
  'Compliance e Governança Corporativa',
  'Redes TCP/IP, BGP e Roteamento Seguro',
  'Linux Hardening e Administração de Sistemas',
  'ISO 9001 e Gestão da Qualidade',
  'Excel Avançado e Análise de Dados',
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
