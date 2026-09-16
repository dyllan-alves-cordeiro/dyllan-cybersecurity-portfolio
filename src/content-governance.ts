// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/content-governance.ts
// papel: Copy factual da superfície pública de governança de IA.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-governance-content

import { publicContacts } from './content'

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
