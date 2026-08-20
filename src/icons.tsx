// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/icons.tsx
// papel: Ícones SVG mínimos e consistentes para a superfície pessoal.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-icons

import type { SVGProps } from 'react'

export const ICON_SIZE = 14

type IconName = 'arrow-up-right' | 'arrow-left'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export function Icon({ name, size = ICON_SIZE, ...props }: IconProps) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }

  if (name === 'arrow-left') {
    return (
      <svg {...shared}>
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </svg>
    )
  }

  return (
    <svg {...shared}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}
