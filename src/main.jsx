import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AldasRoutess } from './routes/AldasRoutess'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AldasRoutess/>
    </BrowserRouter>
  </React.StrictMode>,
)
