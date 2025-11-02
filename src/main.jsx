import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import App from './App.jsx'
import { ContactProvider } from "./Component/Context/ContactContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactProvider>
    <App />
  </ContactProvider>
  </StrictMode>,
)
