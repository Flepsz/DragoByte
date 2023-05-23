import React from 'react'
import Header from './components/Header/Header.jsx'
import {EmblaCarousel} from './components/Carousel/EmblaCarousel.jsx'
import Products from './components/Products/Products.jsx'

function App() {
  return (
    <div>
      <Header />
      <EmblaCarousel />
      <Products />
    </div>
  )
}

export default App