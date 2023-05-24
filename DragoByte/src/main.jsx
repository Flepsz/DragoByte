import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sobre from './Sobre.jsx'
import './syles/main.css'

import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Sobre />
  </React.StrictMode>,
)
