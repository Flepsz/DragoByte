import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import carGeek from "./img/cargeek.webp";
import carGeekMb from "./img/cargeekmb.webp";
import carGeekMb550 from "./img/cargeekmb550.png";
import carMaio from "./img/carmaio.webp";
import carMaioMb from "./img/carmaiomb.webp";
import carMaioMb550 from "./img/carmaiomb550.png";
import "./EmblaCarousel.css";
import Line from "../Line/Line.jsx";

export const EmblaCarousel = (props) => {
    const options = props;

    // Inicializa o carrossel Embla Carousel
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Atualiza o estado de screenWidth quando a janela é redimensionada
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Remove o evento de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Atualiza as imagens com base no tamanho da tela
    useEffect(() => {
        if (screenWidth < 450) {
            setImg1(carMaioMb);
            setImg2(carGeekMb);
        } else if (screenWidth > 550) {
            setImg1(carMaio);
            setImg2(carGeek);
        } else {
            setImg1(carMaioMb550);
            setImg2(carGeekMb550);
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
