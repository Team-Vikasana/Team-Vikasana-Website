import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SocialMedia from './components/SocialMedia.jsx'
import TeamsComp from './components/TeamsComp.jsx'
import TeamsHeaderComp from './components/TeamsHeaderComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="overflow-hidden">
    <SocialMedia />
    <TeamsHeaderComp />
    <TeamsComp />
    </div>
  </StrictMode>,
)
