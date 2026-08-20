// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/components/Reveal.tsx
// papel: Entrada cinematográfica das seções, com respeito a reduced-motion.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-section-reveal

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const ease = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
