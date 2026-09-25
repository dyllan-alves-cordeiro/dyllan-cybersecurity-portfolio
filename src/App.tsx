// DGX FILE HEADER
// nivel: L2-medium
// arquivo: src/App.tsx
// papel: Roteamento local entre página inicial e currículo do portfólio.
// validar: npm run typecheck && npm run build
// DGX:ANCHOR: personal-portfolio-app-shell

import { useEffect, useState } from 'react'
import { AiEngineeringPage } from './pages/AiEngineeringPage'
import { AiGovernancePage } from './pages/AiGovernancePage'
import { CurriculumPage } from './pages/CurriculumPage'
import { HomePage } from './pages/HomePage'
import { isLanguage, type Language } from './i18n'

const languageStorageKey = 'dyllan-portfolio-language'

function normalizedPath(pathname: string) {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}

export default function App() {
  const [path, setPath] = useState(() => normalizedPath(window.location.pathname))
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = window.localStorage.getItem(languageStorageKey)
      return isLanguage(stored) ? stored : 'pt'
    } catch {
      return 'pt'
    }
  })

  useEffect(() => {
    const handlePopState = () => setPath(normalizedPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const titles: Record<Language, Record<string, string>> = {
      pt: {
        '/curriculo': 'Dyllan — currículo',
        '/governanca-ia': 'Dyllan — governança de IA',
        '/ai-engineering': 'Dyllan — engenharia de IA',
        '/': 'Dyllan — portfólio de cibersegurança',
      },
      en: {
        '/curriculo': 'Dyllan — curriculum',
        '/governanca-ia': 'Dyllan — AI governance',
        '/ai-engineering': 'Dyllan — AI engineering',
        '/': 'Dyllan — cybersecurity portfolio',
      },
    }
    document.title = titles[language][path] ?? titles[language]['/']
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language, path])

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage)
    } catch {
      // A apresentação continua funcionando mesmo quando o navegador bloqueia storage.
    }
  }

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

  const openAiEngineering = () => {
    if (path !== '/ai-engineering') {
      window.history.pushState({}, '', '/ai-engineering')
      setPath('/ai-engineering')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (path === '/curriculo') {
    return (
      <CurriculumPage
        onOpenCurriculum={openCurriculum}
        onHome={goHome}
        onOpenGovernance={openGovernance}
        onOpenAiEngineering={openAiEngineering}
        language={language}
        onLanguageChange={changeLanguage}
      />
    )
  }

  if (path === '/governanca-ia') {
    return (
      <AiGovernancePage
        onOpenCurriculum={openCurriculum}
        onHome={goHome}
        onOpenGovernance={openGovernance}
        onOpenAiEngineering={openAiEngineering}
        language={language}
        onLanguageChange={changeLanguage}
      />
    )
  }

  if (path === '/ai-engineering') {
    return (
      <AiEngineeringPage
        onOpenCurriculum={openCurriculum}
        onHome={goHome}
        onOpenGovernance={openGovernance}
        onOpenAiEngineering={openAiEngineering}
        language={language}
        onLanguageChange={changeLanguage}
      />
    )
  }

  return (
    <HomePage
      onOpenCurriculum={openCurriculum}
      onHome={goHome}
      onOpenGovernance={openGovernance}
      onOpenAiEngineering={openAiEngineering}
      language={language}
      onLanguageChange={changeLanguage}
    />
  )
}
