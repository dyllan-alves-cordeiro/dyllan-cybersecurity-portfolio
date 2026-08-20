// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/hooks/useScrolled.ts
// papel: Detecta o início do scroll para armar a pílula de navegação.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-use-scrolled

import { useEffect, useState } from 'react'

export function useScrolled(threshold = 64) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}
