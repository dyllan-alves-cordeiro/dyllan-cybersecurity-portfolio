// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/components/Reveal.tsx
// papel: Entrada cinematográfica das seções, com variação por seção e respeito a reduced-motion.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-section-reveal

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

export type RevealVariant = 'base' | 'soft' | 'lift' | 'drift' | 'settle'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

// Cada seção entra com um gesto próprio: a página deixa de repetir o mesmo
// fade+slide do início ao fim sem virar carnaval de animação.
const gestures = {
  base: { y: 28, x: 0, scale: 1, duration: 0.72, ease: [0.16, 1, 0.3, 1], margin: '-12% 0px' },
  soft: { y: 42, x: 0, scale: 0.985, duration: 0.96, ease: [0.22, 1, 0.28, 1], margin: '-14% 0px' },
  lift: { y: 56, x: 0, scale: 1, duration: 0.86, ease: [0.19, 1, 0.22, 1], margin: '-10% 0px' },
  drift: { y: 20, x: -16, scale: 1, duration: 0.82, ease: [0.16, 1, 0.3, 1], margin: '-16% 0px' },
  settle: { y: 14, x: 0, scale: 1.02, duration: 1.06, ease: [0.33, 1, 0.4, 1], margin: '-8% 0px' },
} as const

export function Reveal({ children, className, delay = 0, variant = 'base' }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const gesture = gestures[variant]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: gesture.y, x: gesture.x, scale: gesture.scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: gesture.margin }}
      transition={{ duration: gesture.duration, delay, ease: gesture.ease }}
    >
      {children}
    </motion.div>
  )
}
