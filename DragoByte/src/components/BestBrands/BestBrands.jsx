import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Line from '../Line/Line.jsx'

import AMD from './img/AMD.png'
import Intel from './img/Intel.png'
import Asus from './img/Asus.png'
import Aorus from './img/Aorus.png'
import Hyperx from './img/Hyperx.png'
import Corsair from './img/Corsair.png'
import Nvidia from './img/Nvidia.png'
import Asrock from './img/Asrock.png'
import Coolerm from './img/Coolerm.png'
import MSI from './img/MSI.png'
import './BestBrands.css'

function BestBrands() {
    return (
        <section>
            <Line />
            <p className="title__brands">MELHORES MARCAS</p>
            <Swiper className='swiper_container'>
                <SwiperSlide className='slide_item'>
                    <img src={AMD} alt="AMD" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Intel} alt="Intel" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Asus} alt="Asus" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Aorus} alt="Aorus" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Hyperx} alt="Hyperx" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Corsair} alt="Corsair" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Nvidia} alt="Nvidia" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Asrock} alt="Asrock" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={Coolerm} alt="Coolerm" />
                </SwiperSlide>
                <SwiperSlide className='slide_item'>
                    <img src={MSI} alt="MSI" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default BestBrands;