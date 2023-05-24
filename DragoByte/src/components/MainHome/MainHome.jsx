import React from 'react'
import {EmblaCarousel} from '../Carousel/EmblaCarousel.jsx'
import Products from '../Products/Products.jsx'
import './MainHome.css'

function MainHome() {
    return (
      <main>
        <EmblaCarousel />
        <div className="mais__vendidos">MAIS VENDIDOS</div>
        <Products />
      </main>
    )
  }
  
export default MainHome