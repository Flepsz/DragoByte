import React, {useState, useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import carGeek from "./cargeek.webp";
import carGeekMb from "./cargeekmb.webp"
import carMaio from "./carmaio.webp";
import carMaioMb from "./carmaiomb.webp"
import "./EmblaCarousel.css";
import Line from "../Line/Line.jsx"

export const EmblaCarousel = (props) => {
    const options = props;
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
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
    if (screenWidth < 450) {
        setImg1(carMaioMb);
        setImg2(carGeekMb);
    } else {
        setImg1(carMaio);
        setImg2(carGeek);
    }
    }, [screenWidth]);

    return (
        <div>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <img src={img1} alt="Carrosel Geek" />
                        </div>
                        <div className="embla__slide">
                            <img src={img2} alt="Carrosel Maio" />
                        </div>
                    </div>
                </div>
            </div>
            <Line />
        </div>
        
    );
};
