// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/components/StatusTag.tsx
// papel: Estado explícito para conteúdo factual e áreas ainda não aprovadas.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-status-tag

import type { ContentStatus } from '../content'

type StatusTagProps = {
  children: string
  tone?: 'mint' | 'amber' | 'quiet'
}

export function StatusTag({ children, tone = 'amber' }: StatusTagProps) {
  return <span className={`status-tag status-tag-${tone}`}>{children}</span>
}

export function ContentStatusTag({ status }: { status: ContentStatus }) {
  const tone = status === 'CONFIRMADO' ? 'mint' : status === 'NÃO ENCONTRADO' ? 'quiet' : 'amber'
  return <StatusTag tone={tone}>{status}</StatusTag>
}
