// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/App.tsx
// papel: Roteamento local entre página inicial e currículo do portfólio.
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-app-shell

import { useEffect, useState } from 'react'
import { AiGovernancePage } from './pages/AiGovernancePage'
import { CurriculumPage } from './pages/CurriculumPage'
import { HomePage } from './pages/HomePage'

function normalizedPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}

export default function App() {
  const [path, setPath] = useState(() => normalizedPath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => setPath(normalizedPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openCurriculum = () => {
    if (path !== '/curriculo') {
      window.history.pushState({}, '', '/curriculo')
      setPath('/curriculo')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = (section?: string) => {
    const nextPath = section ? `/#${section}` : '/'
    window.history.pushState({}, '', nextPath)
    setPath('/')
    window.requestAnimationFrame(() => {
      if (section) {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  const openGovernance = () => {
    if (path !== '/governanca-ia') {
      window.history.pushState({}, '', '/governanca-ia')
      setPath('/governanca-ia')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (path === '/curriculo') {
    return <CurriculumPage onOpenCurriculum={openCurriculum} onHome={goHome} />
  }

  if (path === '/governanca-ia') {
    return (
      <AiGovernancePage
        onOpenCurriculum={openCurriculum}
        onHome={goHome}
        onOpenGovernance={openGovernance}
      />
    )
  }

  return <HomePage onOpenCurriculum={openCurriculum} onHome={goHome} />
}
