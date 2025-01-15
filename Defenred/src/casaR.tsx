import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './App2.tsx'
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)

