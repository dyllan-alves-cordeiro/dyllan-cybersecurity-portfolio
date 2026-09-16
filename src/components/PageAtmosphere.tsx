// DGX FILE HEADER
// nivel: L2-small
// arquivo: src/components/PageAtmosphere.tsx
// papel: Atmosfera compartilhada — luminária de teto, glow gaussiano com parallax, campo ambiente e horizontes sem caixa.
// validar: visual desktop + 390px em /, /governanca-ia e /curriculo
// DGX:ANCHOR: personal-portfolio-page-atmosphere

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useId } from 'react'

type PageAtmosphereProps = {
  variant?: 'hero' | 'page'
}

const orbs = ['atm-orb-1', 'atm-orb-2', 'atm-orb-3', 'atm-orb-4', 'atm-orb-5']

export function PageAtmosphere({ variant = 'page' }: PageAtmosphereProps) {
  const uid = useId().replace(/:/g, '')
  const reduced = useReducedMotion()
  const blurId = `atm-blur-${uid}`
  const ditherId = `atm-dither-${uid}`
  const isHero = variant === 'hero'
  const glowOpacity = isHero ? 0.38 : 0.2

  // Parallax lento do glow: liga as seções ao mesmo campo de luz enquanto rola.
  const { scrollY } = useScroll()
  const glowShift = useTransform(scrollY, [0, 1200], [0, isHero ? 96 : 52])

  return (
    <div className={`page-atmosphere page-atmosphere-${variant}`} aria-hidden="true">
      <svg className="page-atmosphere-svg">
        <defs>
          <filter id={blurId} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation={isHero ? 42 : 36} />
          </filter>
          <filter id={ditherId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0"
            />
          </filter>
        </defs>
        <motion.g style={reduced ? undefined : { y: glowShift }}>
          <ellipse
            cx="50%"
            cy={isHero ? '24%' : '18%'}
            rx={isHero ? '23%' : '12%'}
            ry={isHero ? '13%' : '14%'}
            fill="rgb(90, 168, 152)"
            opacity={glowOpacity}
            filter={`url(#${blurId})`}
          />
        </motion.g>
        <rect width="100%" height="100%" filter={`url(#${ditherId})`} />
      </svg>

      {isHero ? <CeilingLamp reduced={Boolean(reduced)} /> : null}

      <div className="atm-field">
        {orbs.map((orb) => (
          <span key={orb} className={`atm-orb ${orb}${reduced ? ' is-frozen' : ''}`} />
        ))}
        {reduced ? null : (
          <span className="atm-star-track">
            <span className="atm-star" />
          </span>
        )}
      </div>

      <div className="hero-horizon hero-horizon-top" />
      <div className="hero-horizon hero-horizon-bottom" />
    </div>
  )
}

// Luminária de teto: fonte no alto, cone descendo sobre o retrato e poça de luz
// no busto. A oscilação é do próprio suporte da luz, não da foto.
function CeilingLamp({ reduced }: { reduced: boolean }) {
  return (
    <div className="hero-lamp">
      <motion.div
        className="hero-lamp-rig"
        initial={false}
        animate={
          reduced
            ? { rotate: 0, opacity: 1 }
            : { rotate: [-1.1, 1.15, -1.1], opacity: [0.88, 1, 0.93, 1, 0.88] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : {
                rotate: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 7.4, repeat: Infinity, ease: 'easeInOut' },
              }
        }
      >
        <span className="hero-lamp-source" />
        <span className="hero-lamp-cone" />
        <span className="hero-lamp-pool" />
      </motion.div>
    </div>
  )
}
