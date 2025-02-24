import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PageIndicator } from './PageIndicator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-zinc-950">
      <App />
    </div>
    <PageIndicator />
  </StrictMode>
)
