// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/i18n.ts
// papel: Tipos e copy mínimo compartilhado da apresentação bilíngue do portfólio.
// validar: npm run typecheck
// DGX:ANCHOR: personal-portfolio-i18n-contract

export type Language = 'pt' | 'en'

export function isLanguage(value: string | null): value is Language {
  return value === 'pt' || value === 'en'
}

export const headerCopy = {
  pt: {
    navigation: 'Navegação principal',
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Competências',
    cybersecurity: 'Cibersegurança',
    portfolio: 'Portfólio',
    governance: 'Governança de IA',
    aiEngineering: 'AI Engineering',
    curriculum: 'Currículo',
  },
  en: {
    navigation: 'Main navigation',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    cybersecurity: 'Cybersecurity',
    portfolio: 'Portfolio',
    governance: 'AI governance',
    aiEngineering: 'AI Engineering',
    curriculum: 'Curriculum',
  },
} as const
