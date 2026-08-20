// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/components/SectionIntro.tsx
// papel: Cabeçalho editorial consistente para seções do portfólio.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-section-intro

type SectionIntroProps = {
  eyebrow: string
  title: string
  detail?: string
}

export function SectionIntro({ eyebrow, title, detail }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {detail ? <p className="section-detail">{detail}</p> : null}
      </div>
    </div>
  )
}
