import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import routs from './Routing/Routs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routs} />
  </StrictMode>,
)
