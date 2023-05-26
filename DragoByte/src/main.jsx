import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Sobre from './Sobre.jsx'
import NotFound from "./components/NotFound/NotFound.jsx";
import Carrinho from "./Carrinho.jsx";
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './syles/main.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/carrinho' element={<Carrinho />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
