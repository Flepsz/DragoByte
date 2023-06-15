import React, {useState, useEffect} from 'react'
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
import 'swiper/swiper.css'

function BestBrands() {
    const [slidePerView, setSlidePerView] = useState(6)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    useEffect(() => {
    if (screenWidth < 800) {
        setSlidePerView(4);
    } if (screenWidth < 450) {
        setSlidePerView(2);
    } else {
        setSlidePerView(6)
    }
    }, [screenWidth]);


    return (
        <section>
            <Line />
            <p className="title__brands">MELHORES MARCAS</p>
            <Swiper
            spaceBetween={2}
            slidesPerView={slidePerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper_container'>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={AMD} alt="AMD" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Intel} alt="Intel" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Asus} alt="Asus" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Aorus} alt="Aorus" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Hyperx} alt="Hyperx" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Corsair} alt="Corsair" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Nvidia} alt="Nvidia" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Asrock} alt="Asrock" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={Coolerm} alt="Coolerm" />
                </SwiperSlide>
                <SwiperSlide className='item__swiper-slide'>
                    <img src={MSI} alt="MSI" />
                </SwiperSlide>
            </Swiper>
            <Line/>
        </section>
    )
}

export default BestBrands;