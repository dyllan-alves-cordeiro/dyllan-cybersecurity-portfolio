// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/icons.tsx
// papel: Ícones SVG mínimos e consistentes para a superfície pessoal.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-icons

import type { SVGProps } from 'react'

type IconName = 'arrow-up-right' | 'arrow-left' | 'chevron-right' | 'lock' | 'menu'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export function Icon({ name, size = 18, ...props }: IconProps) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }

  switch (name) {
    case 'arrow-up-right':
      return (
        <svg {...shared}>
          <path d="M5 19 19 5" />
          <path d="M8 5h11v11" />
        </svg>
      )
    case 'arrow-left':
      return (
        <svg {...shared}>
          <path d="m15 18-6-6 6-6" />
          <path d="M9 12h10" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg {...shared}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      )
    case 'lock':
      return (
        <svg {...shared}>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...shared}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
  }
}
