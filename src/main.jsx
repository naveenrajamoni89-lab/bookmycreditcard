import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/landing.css'
import './styles/redesign.css'
import './styles/decision.css'
import './pages/ComparePage.css'
import './pages/NotFound.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
