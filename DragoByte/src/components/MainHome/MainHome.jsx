import React from 'react'
import {EmblaCarousel} from '../Carousel/EmblaCarousel.jsx'
import Products from '../Products/Products.jsx'
import BestBrands from '../BestBrands/BestBrands.jsx'

import 'swiper/css'
import './MainHome.css'

function MainHome() {
    return (
      <main>
        <EmblaCarousel />
        <div className="mais__vendidos">MAIS VENDIDOS</div>
        <Products />
        <BestBrands />
      </main>
    )
  }
  
export default MainHome