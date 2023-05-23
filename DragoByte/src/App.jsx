import React from 'react'
import Header from './components/Header/Header.jsx'
import {EmblaCarousel} from './components/Carousel/EmblaCarousel.jsx'
import Products from './components/Products/Products.jsx'
import './syles/App.css'

function App() {
  return (
    <div>
      <Header />
      <EmblaCarousel />
      <div className="mais__vendidos">MAIS VENDIDOS</div>
      <Products />
    </div>
  )
}

export default App