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
  kind: 'email' | 'phone' | 'linkedin'
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
  headline: 'Analista de redes & infraestrutura',
  positioning: 'Segurança, redes e engenharia aplicada.',
  location: 'Valparaíso de Goiás, GO',
  intro:
    'Redes, infraestrutura e suporte técnico. Hoje, esse trabalho também vive na engenharia aplicada da Digytron.',
  heroStatement: 'Segurança que dá para entender.',
  heroNote: 'Redes e produto com clareza operacional.',
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
    detail: 'E-mail, telefone e LinkedIn foram transcritos do currículo-base; endereço completo foi omitido.',
  },
  {
    label: 'Digytron',
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
    company: 'Digytron',
    role: 'Atuação independente em engenharia aplicada',
    period: 'Atual · período exato a confirmar',
    summary:
      'Construção e organização de produtos digitais, superfícies web e ferramentas de engenharia para uma arquitetura digital própria.',
    bullets: [
      'Pesquisa e desenvolvimento em engenharia aplicada e ferramentas de inteligência artificial.',
      'Trabalho com clareza operacional, segurança, documentação e separação entre produto e operação.',
      'Ecossistema técnico local baseado em React, TypeScript, Vite, Tailwind CSS, TanStack, Supabase e integrações de IA.',
    ],
    sourceNote:
      'Fonte: documentação local da Digytron. Esta descrição não expõe clientes, dados internos ou o Digytron Space.',
    current: true,
  },
  {
    company: 'AGE Telecom',
    role: 'Analista de suporte',
    period: 'Emprego atual na data do currículo-base',
    summary:
      'Atendimento técnico para clientes premium, PJ e governo, com suporte de nível avançado e organização de processos.',
    bullets: [
      'Implantação de métodos de atendimento para agentes de N1 e elaboração de fluxogramas de suporte técnico.',
      'Troubleshooting em ONU e OLT e implantação de soluções para Wi-Fi e links dedicados.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
  {
    company: 'Stefanini Group',
    role: 'Analista de redes e comunicação de dados',
    period: 'Início informado: 16/08/2021 · término não informado',
    summary:
      'Monitoração de circuitos e primeira análise de incidentes de latência, perda de pacotes e estabilidade de roteamento.',
    bullets: [
      'Leitura de eventos em equipamentos Huawei e investigação de degradação de rede.',
      'Análise e estabilização do protocolo BGP dentro do escopo de atendimento.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
  {
    company: 'NWI Telecom',
    role: 'Operador de rede de teleprocessamento',
    period: 'Início informado: 19/04/2021 · término não informado',
    summary:
      'Monitoração de rede de provedor, atendimento N2 e troubleshooting para conexões residenciais, empresariais e dedicadas.',
    bullets: [
      'Uso de The Dude, Zabbix e PRTG para observabilidade da rede.',
      'Configuração de ONUs, roteadores e equipamentos Datacom, Huawei, MikroTik, Furukawa, TP-Link e Mercusys.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
  {
    company: 'SKILL.NET',
    role: 'Suporte técnico',
    period: '01/03/2018 — 01/05/2021',
    summary:
      'Atendimento ao cliente, configuração de redes, monitoração e suporte de infraestrutura.',
    bullets: [
      'Configuração de roteadores e ONUs e uso de Zabbix e MikroTik.',
      'Montagem e configuração de computadores, com apoio pontual em marketing digital.',
    ],
    sourceNote: 'Fonte: currículo-base fornecido pelo Dyllan.',
  },
]

export const focusAreas = [
  {
    code: '01',
    title: 'Redes & infraestrutura',
    detail: 'TCP/IP, roteamento, segmentação, VPN e protocolos de rede.',
  },
  {
    code: '02',
    title: 'Observabilidade & suporte',
    detail: 'Monitoração, logs, troubleshooting e suporte N2/N3.',
  },
  {
    code: '03',
    title: 'Engenharia aplicada',
    detail: 'Produtos digitais, ferramentas de IA e documentação técnica.',
  },
] as const

export const technicalSkills = [
  {
    label: 'Redes & protocolos',
    items: ['TCP/IP', 'VPN', 'VLAN', 'Trunk', 'QoS', 'Gateway', 'MPLS', 'OSPF', 'BGP'],
  },
  {
    label: 'Monitoramento',
    items: ['Zabbix', 'PRTG', 'The Dude', 'Troubleshooting', 'Leitura de logs'],
  },
  {
    label: 'Equipamentos',
    items: ['Huawei', 'Datacom', 'MikroTik', 'Nokia', 'Furukawa', 'FiberHome', 'Juniper', 'Cisco', 'UniFi'],
  },
  {
    label: 'Sistemas & desenvolvimento',
    items: ['Linux', 'Windows', 'Office 365', 'Google Workspace', 'Java', 'Python', 'PHP', 'HTML', 'MySQL'],
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
  'GitHub e demais links públicos reais, se existirem',
  'Domínio definitivo e idioma inicial da publicação',
] as const

export const omittedFromPublicResume = [
  'Endereço completo, data de nascimento, estado civil e informação sobre filhos',
  'Experiência administrativa e estágio antigo, por não serem centrais ao posicionamento atual',
  'Disponibilidade genérica para viagens ou mudança de região',
  'Números, clientes, certificações formais ou resultados que não aparecem em fonte validada',
] as const
