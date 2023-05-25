import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Sobre from './Sobre.jsx'
import './syles/main.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
