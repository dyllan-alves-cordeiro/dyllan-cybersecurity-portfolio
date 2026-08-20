// DGX FILE HEADER
// nivel: L1-small
// arquivo: src/main.tsx
// papel: Entrada do aplicativo pessoal e carregamento da camada visual.
// validar: npm run build
// DGX:ANCHOR: personal-portfolio-main-entry

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './styles-governance.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
