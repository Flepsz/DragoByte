import React, {useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import carGeek from "./cargeek.webp";
import carMaio from "./carmaio.webp";
import "./EmblaCarousel.css";
import Line from "../Line/Line.jsx"

export const EmblaCarousel = (props) => {
    const options = props;
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    const [img1, setImg1] = useState(carGeek)
    const [img2, setImg2] = useState(carMaio)

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
