// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/content-governance.ts
// papel: Copy factual da superfície pública de governança de IA.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-governance-content

import { publicContacts } from './content'
import type { Language } from './i18n'

export const governanceProfile = {
  kicker: 'Governança de IA',
  headline: 'O humano define o critério. O agente executa com escopo.',
  lede:
    'É isso que eu faço. A partir da governança — autorização, critério, evidência — eu construo o que for pedido: produto, integração, publicação. Sem soltar agente solto.',
  locationNote: 'Valparaíso de Goiás · operação própria',
} as const

export const governanceMethod = [
  {
    label: 'Critério',
    detail: 'Antes de executar, o humano escreve o que vale, o que não vale e quem autoriza a escrita.',
  },
  {
    label: 'Despacho',
    detail: 'O GK corta o escopo e despacha executor. Executor nunca admite trabalho novo.',
  },
  {
    label: 'Prova',
    detail: 'Nada fecha no texto. Fecha com git, scan, URL e — quando a superfície é visual — print real.',
  },
] as const

export const sovereignVersions = [
  {
    version: 'V1',
    title: 'Humano, agente e rastro',
    detail:
      'A primeira forma: uma pessoa decide, um agente executa, o que aconteceu fica em log. Critério escrito, não conversa solta.',
  },
  {
    version: 'V2',
    title: 'Continuidade e executor',
    detail:
      'A sessão não morre no chat. Superfície visual, despacho de executor, papel separado: quem governa não é quem implementa.',
  },
  {
    version: 'V3',
    title: 'GK com visão',
    detail:
      'Em curso. Só exerce GK quem vê — print, DevTools, imagem que o dono manda. Modelo cego não governa. Contexto persiste no disco, não só na janela do chat.',
  },
] as const

export const governanceCriteria = [
  {
    title: 'Autorização de escrita',
    detail: 'Sem dono no loop, o default é leitura. Mutação pede escopo, worktree e validade one-shot.',
  },
  {
    title: 'Executor não é GK',
    detail: 'Quem implementa não admite Task, não reabre objetivo, não declara pronto sem prova.',
  },
  {
    title: 'Visão obrigatória no GK',
    detail: 'Governar inclui ver. Screenshot, arquivo e imagem entram no critério — não são enfeite.',
  },
  {
    title: 'Evidência antes do “feito”',
    detail: 'Build, rota, print. Sem isso, a rodada continua. Mentir conclusão é falha de governança.',
  },
] as const

export const governanceContacts = publicContacts

type GovernanceCopy = {
  profile: {
    kicker: string
    headline: string
    lede: string
    locationNote: string
  }
  method: readonly {
    label: string
    detail: string
  }[]
  versions: readonly {
    version: string
    title: string
    detail: string
  }[]
  criteria: readonly {
    title: string
    detail: string
  }[]
  ui: {
    talk: string
    home: string
    method: string
    methodTitle: string
    sovereign: string
    sovereignTitle: string
    sovereignLede: string
    criteria: string
    criteriaTitle: string
    criteriaBody: string
    contact: string
    contactTitle: string
  }
}

const governanceProfileEn = {
  kicker: 'AI GOVERNANCE',
  headline: 'The human defines the criterion. The agent executes within scope.',
  lede:
    'This is what I do. Starting from governance — authorization, criteria, evidence — I build what is needed: product, integration, publication. No unsupervised agents.',
  locationNote: 'Valparaíso de Goiás · own operation',
} as const

const governanceMethodEn = [
  {
    label: 'Criterion',
    detail: 'Before execution, the human writes what counts, what does not, and who authorizes the write.',
  },
  {
    label: 'Dispatch',
    detail: 'The GK cuts scope and dispatches an executor. The executor never accepts new work.',
  },
  {
    label: 'Proof',
    detail: 'Text does not close a task. Git, scans, URL, and — when the surface is visual — a real screenshot do.',
  },
] as const

const sovereignVersionsEn = [
  {
    version: 'V1',
    title: 'Human, agent, and trace',
    detail: 'The first form: one person decides, one agent executes, and what happened remains in a log. Written criteria, not loose conversation.',
  },
  {
    version: 'V2',
    title: 'Continuity and executor',
    detail: 'The session does not die in the chat. Visual surface, executor dispatch, separate roles: the one who governs is not the one who implements.',
  },
  {
    version: 'V3',
    title: 'GK with vision',
    detail: 'In progress. Only the one who sees can act as GK — screenshots, DevTools, images supplied by the owner. A blind model does not govern. Context persists on disk, not only in the chat window.',
  },
] as const

const governanceCriteriaEn = [
  {
    title: 'Write authorization',
    detail: 'Without the owner in the loop, the default is reading. Mutation requires scope, a worktree, and one-shot validity.',
  },
  {
    title: 'Executor is not GK',
    detail: 'The implementer does not admit a Task, reopen the objective, or declare completion without proof.',
  },
  {
    title: 'Vision is mandatory for GK',
    detail: 'Governing includes seeing. Screenshots, files, and images enter the criterion — they are not decoration.',
  },
  {
    title: 'Evidence before “done”',
    detail: 'Build, route, screenshot. Without them, the round continues. Claiming completion without proof is a governance failure.',
  },
] as const

const governanceUi: Record<Language, GovernanceCopy['ui']> = {
  pt: {
    talk: 'Vamos conversar',
    home: 'Ver cibersegurança',
    method: 'Como opera',
    methodTitle: 'Três gestos. Nenhum deles é “deixar a IA decidir”.',
    sovereign: 'Soberano DGX',
    sovereignTitle: 'O desenho, em versões. Sem teatro de produto interno.',
    sovereignLede: 'Exemplo próprio: como o humano deve agir com a IA. V1 e V2 já operam. V3 é o aprofundamento — GK com visão, validação real, contexto que não some quando o chat compacta.',
    criteria: 'Critérios',
    criteriaTitle: 'A entrega nasce da regra, não do modelo.',
    criteriaBody: 'Com isso no lugar, o resto — aplicativo, integração, hospedagem — é consequência. Sem isso, é só geração.',
    contact: 'Contato',
    contactTitle: 'Se a vaga pede governança de verdade, conversamos.',
  },
  en: {
    talk: 'Let’s talk',
    home: 'View cybersecurity',
    method: 'How it works',
    methodTitle: 'Three gestures. None of them is “let AI decide”.',
    sovereign: 'DGX Sovereign',
    sovereignTitle: 'The design, in versions. No internal-product theater.',
    sovereignLede: 'An own example: how a human should act with AI. V1 and V2 already operate. V3 deepens the model — GK with vision, real validation, and context that does not disappear when the chat compacts.',
    criteria: 'Criteria',
    criteriaTitle: 'Delivery starts with the rule, not the model.',
    criteriaBody: 'Once that is in place, the rest — application, integration, hosting — follows. Without it, it is only generation.',
    contact: 'Contact',
    contactTitle: 'If the role asks for real governance, let’s talk.',
  },
}

export function getGovernanceContent(language: Language): GovernanceCopy {
  if (language === 'en') {
    return {
      profile: governanceProfileEn,
      method: governanceMethodEn,
      versions: sovereignVersionsEn,
      criteria: governanceCriteriaEn,
      ui: governanceUi.en,
    }
  }

  return {
    profile: governanceProfile,
    method: governanceMethod,
    versions: sovereignVersions,
    criteria: governanceCriteria,
    ui: governanceUi.pt,
  }
}
