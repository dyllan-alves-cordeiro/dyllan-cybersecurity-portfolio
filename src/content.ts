// DGX FILE HEADER
// nivel: L2-small
// arquivo: src/content.ts
// papel: Fonte local de estado factual, pendências e estrutura editorial do portfólio.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-content-source

export type ContentStatus = 'CONFIRMADO' | 'PENDENTE' | 'NÃO ENCONTRADO'

export type ContentLedgerItem = {
  label: string
  status: ContentStatus
  detail: string
}

export const contentLedger: ContentLedgerItem[] = [
  {
    label: 'Referência pessoal',
    status: 'CONFIRMADO',
    detail: 'Dyllan — referência de trabalho fornecida no Envelope GK.',
  },
  {
    label: 'Tema',
    status: 'CONFIRMADO',
    detail: 'Portfólio pessoal de cibersegurança.',
  },
  {
    label: 'Experiências públicas',
    status: 'PENDENTE',
    detail: 'Aguardando três a cinco experiências ou projetos aprovados.',
  },
  {
    label: 'Currículo e links',
    status: 'PENDENTE',
    detail: 'Aguardando currículo-base, contatos, LinkedIn, GitHub e certificações.',
  },
]

export const pendingContent = [
  'Nome profissional completo',
  'Cargo ou posicionamento preferido',
  'Resumo profissional',
  'Contatos públicos e canal de candidatura',
  'LinkedIn, GitHub e links reais',
  'Currículo-base, formação e certificações',
  'Três a cinco experiências ou projetos publicáveis',
  'Domínio desejado e idioma inicial',
]

export const caseAnatomy = [
  {
    index: 'A',
    label: 'Contexto',
    detail: 'Qual problema existia e em que cenário.',
  },
  {
    index: 'B',
    label: 'Responsabilidade',
    detail: 'O que foi feito diretamente por Dyllan.',
  },
  {
    index: 'C',
    label: 'Abordagem',
    detail: 'Como a análise e a execução aconteceram.',
  },
  {
    index: 'D',
    label: 'Tecnologia',
    detail: 'Ferramentas e técnicas realmente utilizadas.',
  },
  {
    index: 'E',
    label: 'Resultado',
    detail: 'Evidência verificável, sem números inventados.',
  },
]

export const reservedFocusAreas = [
  {
    code: 'FOCO 01',
    label: 'Especialidade a confirmar',
    detail: 'A área de atuação será preenchida a partir do currículo e das experiências aprovadas.',
  },
  {
    code: 'FOCO 02',
    label: 'Tecnologias a confirmar',
    detail: 'Ferramentas, plataformas e métodos entram somente quando houver prova real de uso.',
  },
  {
    code: 'FOCO 03',
    label: 'Formação a confirmar',
    detail: 'Formação, certificações e estudos relevantes aguardam fonte fornecida pelo Dyllan.',
  },
]
