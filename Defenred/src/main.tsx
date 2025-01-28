import { StrictMode } from 'react'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

