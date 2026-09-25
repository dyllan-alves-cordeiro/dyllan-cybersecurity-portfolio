// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/content-ai-engineering.ts
// papel: Conteúdo factual e delimitado da superfície pública de AI Engineering.
// governa: docs/content-contract.md
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-ai-engineering-content

import { publicContacts } from './content'

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
      'The Coordinator–Executor method turns one supervisory session into scoped work dispatched through a supported harness/model matrix, with structured envelopes, returns, and explicit capability boundaries.',
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
    detail: 'Coordinator–Executor dispatch, session continuity patterns, structured returns, server-side model integration, tools, and product delivery exist in private systems.',
  },
  {
    label: 'Public surface',
    state: 'IN PROGRESS',
    detail: 'This page makes the method inspectable without exposing private repositories, customer data, secrets, or internal operational paths.',
  },
  {
    label: 'Evaluation harness',
    state: 'NOT YET PUBLIC',
    detail: 'Representative datasets, graders, regression evaluation, quality, latency, cost, and safety results still need to be published as auditable artifacts.',
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
] as const

export const aiEngineeringContacts = publicContacts.filter(
  (contact) => contact.kind !== 'phone' && contact.kind !== 'portfolio',
)
