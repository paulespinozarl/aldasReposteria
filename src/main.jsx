import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AldasRoutes } from './routes/AldasRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AldasRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
