// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/content-ai-engineering.ts
// papel: Conteúdo factual e delimitado da superfície pública de AI Engineering.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-ai-engineering-content

import { publicContacts } from './content'
import type { Language } from './i18n'

export const aiEngineeringProfile = {
  kicker: 'AI ENGINEERING / PERSONAL SURFACE',
  headline: 'I build AI systems that can be delegated, inspected, and carried forward.',
  lede:
    'Founder and full-stack engineer with hands-on experience shipping AI-backed products and operational AI systems, strongest in server-side model integration, tool workflows, and end-to-end product delivery. Public evaluation, measurable production outcomes, and enterprise-scale evidence are still being built.',
  supportingLine:
    'My current focus is the boundary between a model and the system around it: context assembly, RAG patterns, tools, structured handoffs, and continuity across sessions.',
  locationNote: 'Brazil · 5+ years in software engineering · 2 years working with LLM systems',
} as const

export type AiExecutionStage = {
  index: string
  label: string
  short: string
  detail: string
  status: string
}

export const aiExecutionStages: readonly AiExecutionStage[] = [
  {
    index: '01',
    label: 'Coordinate',
    short: 'Intent becomes a bounded task.',
    detail: 'The supervisory session defines the objective, scope, acceptance criteria, and human-controlled decisions.',
    status: 'BOUNDARY',
  },
  {
    index: '02',
    label: 'Dispatch',
    short: 'Work is routed by capability.',
    detail: 'A structured envelope selects a supported harness, model configuration, profile, and expected return.',
    status: 'ROUTED',
  },
  {
    index: '03',
    label: 'Execute',
    short: 'The executor stays inside the boundary.',
    detail: 'A headless executor handles scoped logic, infrastructure, and integrations; unsupported capability fails explicitly.',
    status: 'SCOPED',
  },
  {
    index: '04',
    label: 'Verify',
    short: 'A claim is not a delivery.',
    detail: 'Structured returns, tests, Git state, and observable evidence decide whether the work is complete.',
    status: 'PROVEN',
  },
] as const

export const aiEngineeringCapabilities = [
  {
    label: 'Server-side AI integration',
    state: 'BUILT / PRIVATE EVIDENCE',
    detail:
      'Model calls, authenticated streaming, prompt and context assembly, document/PDF workflows, and cost or credit controls are part of the systems I build. The implementation is private; the public proof layer is still being prepared.',
  },
  {
    label: 'Governed multi-agent orchestration',
    state: 'BUILT / PRIVATE EVIDENCE',
    detail:
      'The Coordinator decomposes intent into bounded work with an objective, scope, acceptance evidence, and human gates. Dispatch routes by measured capability; the Executor returns structured evidence, and missing capability is surfaced instead of silently replaced.',
  },
  {
    label: 'Execution security boundaries',
    state: 'BUILT / PRIVATE EVIDENCE',
    detail:
      'Execution starts read-only. A write requires an explicit one-time grant scoped to a repository and paths; sensitive actions remain behind human approval. This describes a private engineering method, not an external security certification.',
  },
  {
    label: 'RAG and tool workflows',
    state: 'BUILT / PRIVATE EVIDENCE',
    detail:
      'Retrieval-oriented context, web and document tools, API integrations, and operational handoffs are treated as system design concerns rather than prompt-only features.',
  },
  {
    label: 'Customer-facing delivery',
    state: 'BUILT / EXPERIENCE EVIDENCE',
    detail:
      'Earlier support roles included high-volume customer service, premium technical support, and B2B operations for a banking client. That experience shapes how I design escalation, clarity, and incident communication.',
  },
] as const

export const aiEvidenceLedger = [
  {
    label: 'Implementation',
    state: 'BUILT',
    detail: 'Coordinator–Executor dispatch, bounded task decomposition, scoped write grants, human approval gates, session continuity patterns, structured returns, server-side model integration, tools, and product delivery exist in private systems.',
  },
  {
    label: 'Public surface',
    state: 'IN PROGRESS',
    detail: 'This page makes the method inspectable without exposing private repositories, customer data, secrets, or internal operational paths.',
  },
  {
    label: 'Evaluation harness',
    state: 'NOT YET PUBLIC',
    detail: 'Representative datasets, graders, regression evaluation, quality, latency, cost, and public security results still need to be published as auditable artifacts.',
  },
  {
    label: 'Enterprise outcomes',
    state: 'NOT PUBLICLY PROVEN',
    detail: 'Adoption, measurable production outcomes, and enterprise-scale evidence are not claimed here until they can be disclosed and verified.',
  },
] as const

export const aiNextArtifacts = [
  'An open evaluation harness with representative data, graders, and regression reports.',
  'A governed tool and database integration that can be tested without exposing customer data.',
  'A public case study with context, responsibility, architecture, and measurable outcome.',
  'A planned evidence-to-doctrine loop would turn verified execution outcomes into proposed rule updates, with owner review and ratification before adoption; it is not implemented yet.',
] as const

export const aiEngineeringContacts = publicContacts.filter(
  (contact) => contact.kind !== 'phone' && contact.kind !== 'portfolio',
)

type AiEngineeringCopy = {
  profile: {
    kicker: string
    headline: string
    lede: string
    supportingLine: string
    locationNote: string
  }
  stages: readonly AiExecutionStage[]
  capabilities: readonly {
    label: string
    state: string
    detail: string
  }[]
  evidence: readonly {
    label: string
    state: string
    detail: string
  }[]
  nextArtifacts: readonly string[]
  ui: {
    publicPosition: string
    publicPositionTitle: string
    publicPositionBody: string
    evidenceState: string
    method: string
    methodTitle: string
    methodBody: string
    capabilities: string
    capabilitiesTitle: string
    capabilitiesBody: string
    evidenceMaturity: string
    evidenceTitle: string
    evidenceBody: string
    nextArtifactsLabel: string
    nextArtifactsTitle: string
    contact: string
    contactTitle: string
    openCurriculum: string
    readGovernance: string
  }
}

const aiEngineeringProfilePt = {
  kicker: 'ENGENHARIA DE IA / SUPERFÍCIE PESSOAL',
  headline: 'Eu construo sistemas de IA que podem ser delegados, inspecionados e levados adiante.',
  lede:
    'Founder e engenheiro full-stack com experiência prática entregando produtos apoiados por IA e sistemas de IA operacionais, com maior força em integração de modelos no servidor, workflows com tools e entrega de produto ponta a ponta. Avaliação pública, resultados mensuráveis em produção e evidência em escala enterprise ainda estão sendo construídos.',
  supportingLine:
    'Meu foco atual é a fronteira entre um modelo e o sistema ao redor dele: montagem de contexto, padrões de RAG, tools, handoffs estruturados e continuidade entre sessões.',
  locationNote: 'Brasil · mais de 5 anos em engenharia de software · 2 anos trabalhando com sistemas LLM',
} as const

const aiExecutionStagesPt: readonly AiExecutionStage[] = [
  {
    index: '01',
    label: 'Coordenar',
    short: 'A intenção vira uma tarefa delimitada.',
    detail: 'A sessão supervisora define o objetivo, o escopo, os critérios de aceitação e as decisões sob controle humano.',
    status: 'LIMITE',
  },
  {
    index: '02',
    label: 'Despachar',
    short: 'O trabalho é roteado por capacidade.',
    detail: 'Um envelope estruturado seleciona um harness, uma configuração de modelo, um perfil e o retorno esperado.',
    status: 'ROTEADO',
  },
  {
    index: '03',
    label: 'Executar',
    short: 'O executor permanece dentro do limite.',
    detail: 'Um executor headless trata a lógica, a infraestrutura e as integrações delimitadas; capacidades não suportadas falham explicitamente.',
    status: 'ESCOPO',
  },
  {
    index: '04',
    label: 'Verificar',
    short: 'Uma afirmação não é uma entrega.',
    detail: 'Retornos estruturados, testes, estado do Git e evidência observável decidem se o trabalho está completo.',
    status: 'PROVADO',
  },
]

const aiEngineeringCapabilitiesPt = [
  {
    label: 'Integração de IA no servidor',
    state: 'CONSTRUÍDO / EVIDÊNCIA PRIVADA',
    detail:
      'Chamadas de modelo, streaming autenticado, montagem de prompt e contexto, workflows de documentos/PDF e controles de custo ou créditos fazem parte dos sistemas que construo. A implementação é privada; a camada pública de prova ainda está sendo preparada.',
  },
  {
    label: 'Orquestração multiagente governada',
    state: 'CONSTRUÍDO / EVIDÊNCIA PRIVADA',
    detail:
      'A sessão Coordenadora decompõe a intenção em trabalho delimitado, com objetivo, escopo, evidência de aceite e decisões sob controle humano. O Dispatch roteia por capacidade medida; o Executor devolve evidência estruturada, e capacidades ausentes são apontadas sem substituição silenciosa.',
  },
  {
    label: 'Limites de segurança da execução',
    state: 'CONSTRUÍDO / EVIDÊNCIA PRIVADA',
    detail:
      'A execução começa em modo de leitura. Escritas exigem um grant explícito e de uso único, limitado a repositório e caminhos; ações sensíveis permanecem sob aprovação humana. Isso descreve um método de engenharia privado, não uma certificação externa de segurança.',
  },
  {
    label: 'RAG e workflows com tools',
    state: 'CONSTRUÍDO / EVIDÊNCIA PRIVADA',
    detail:
      'Contexto orientado a recuperação, tools web e de documentos, integrações de API e handoffs operacionais são tratados como questões de desenho de sistema, não apenas como recursos de prompt.',
  },
  {
    label: 'Entrega voltada ao cliente',
    state: 'CONSTRUÍDO / EVIDÊNCIA DE EXPERIÊNCIA',
    detail:
      'As funções anteriores incluíram atendimento de alto volume, suporte técnico premium e operação B2B para um cliente bancário. Essa experiência orienta como desenho escalação, clareza e comunicação de incidentes.',
  },
] as const

const aiEvidenceLedgerPt = [
  {
    label: 'Implementação',
    state: 'CONSTRUÍDO',
    detail: 'Despacho Coordenador–Executor, decomposição de tarefas delimitadas, grants de escrita por escopo, aprovações humanas, continuidade de sessão, retornos estruturados, integração de modelos no servidor, tools e entrega de produto existem em sistemas privados.',
  },
  {
    label: 'Superfície pública',
    state: 'EM ANDAMENTO',
    detail: 'Esta página torna o método inspecionável sem expor repositórios privados, dados de clientes, segredos ou caminhos operacionais internos.',
  },
  {
    label: 'Harness de avaliação',
    state: 'AINDA NÃO PÚBLICO',
    detail: 'Datasets representativos, graders, avaliação de regressão, qualidade, latência, custo e resultados públicos de segurança ainda precisam ser publicados como artefatos auditáveis.',
  },
  {
    label: 'Resultados enterprise',
    state: 'NÃO PROVADO PUBLICAMENTE',
    detail: 'Adoção, resultados mensuráveis em produção e evidência em escala enterprise não são reivindicados aqui até que possam ser divulgados e verificados.',
  },
] as const

const aiNextArtifactsPt = [
  'Um harness de avaliação aberto com dados representativos, graders e relatórios de regressão.',
  'Uma integração governada com tools e banco de dados que possa ser testada sem expor dados de clientes.',
  'Um case público com contexto, responsabilidade, arquitetura e resultado mensurável.',
  'Um ciclo planejado de evidência para doutrina transformaria resultados verificados de execução em propostas de revisão, com revisão e ratificação do dono antes da adoção; ainda não foi implementado.',
] as const

const aiEngineeringUi: Record<Language, AiEngineeringCopy['ui']> = {
  pt: {
    publicPosition: 'POSICIONAMENTO PÚBLICO',
    publicPositionTitle: 'O método está visível. A prova está sendo aberta.',
    publicPositionBody: 'Esta superfície descreve um método de engenharia real sem transformar implementação privada em afirmação pública de escala, adoção ou resultado.',
    evidenceState: 'EVIDÊNCIA DELIMITADA / 2026',
    method: 'O método',
    methodTitle: 'Uma sessão supervisora. Quatro limites explícitos.',
    methodBody: 'Continuidade não é um slogan de memória. É um contrato: o trabalho tem um dono, um escopo, um retorno esperado e um ponto de verificação.',
    capabilities: 'O que eu construo',
    capabilitiesTitle: 'Sistemas de IA são mais do que uma chamada de modelo.',
    capabilitiesBody: 'O trabalho de engenharia vive ao redor do modelo: contexto, acesso, tools, modos de falha, impacto no cliente e a evidência necessária para confiar em uma mudança.',
    evidenceMaturity: 'Maturidade da evidência',
    evidenceTitle: 'O limite também faz parte do trabalho.',
    evidenceBody: 'Quero que recrutador, colaborador ou cliente saiba exatamente o que pode ser inspecionado hoje e qual artefato público ainda precisa ser construído. Essa distinção é deliberada.',
    nextArtifactsLabel: 'Próximos artefatos públicos',
    nextArtifactsTitle: 'Tornar a evidência tão inspecionável quanto o método.',
    contact: 'Contato',
    contactTitle: 'Se a vaga pergunta como o sistema ao redor do modelo é construído, vamos conversar.',
    openCurriculum: 'Abrir currículo',
    readGovernance: 'Ler governança de IA',
  },
  en: {
    publicPosition: 'PUBLIC POSITION',
    publicPositionTitle: 'Method is visible. Proof is being opened.',
    publicPositionBody: 'This surface describes a real engineering method without turning private implementation into a public claim of scale, adoption, or outcome.',
    evidenceState: 'EVIDENCE BOUNDED / 2026',
    method: 'The method',
    methodTitle: 'One supervisory session. Four explicit boundaries.',
    methodBody: 'Continuity is not a memory slogan. It is a contract: the work has an owner, a scope, an expected return, and a verification point.',
    capabilities: 'What I build',
    capabilitiesTitle: 'AI systems are more than a model call.',
    capabilitiesBody: 'The engineering work lives around the model: context, access, tools, failure modes, customer impact, and the evidence needed to trust a change.',
    evidenceMaturity: 'Evidence maturity',
    evidenceTitle: 'The boundary is part of the work.',
    evidenceBody: 'I want a recruiter, collaborator, or client to know exactly what can be inspected today and what still needs a public artifact. That distinction is deliberate.',
    nextArtifactsLabel: 'Next public artifacts',
    nextArtifactsTitle: 'Make the evidence as inspectable as the method.',
    contact: 'Contact',
    contactTitle: 'If the role asks how the system around the model gets built, let’s talk.',
    openCurriculum: 'Open curriculum',
    readGovernance: 'Read AI governance',
  },
}

export function getAiEngineeringContent(language: Language): AiEngineeringCopy {
  if (language === 'pt') {
    return {
      profile: aiEngineeringProfilePt,
      stages: aiExecutionStagesPt,
      capabilities: aiEngineeringCapabilitiesPt,
      evidence: aiEvidenceLedgerPt,
      nextArtifacts: aiNextArtifactsPt,
      ui: aiEngineeringUi.pt,
    }
  }

  return {
    profile: aiEngineeringProfile,
    stages: aiExecutionStages,
    capabilities: aiEngineeringCapabilities,
    evidence: aiEvidenceLedger,
    nextArtifacts: aiNextArtifacts,
    ui: aiEngineeringUi.en,
  }
}
