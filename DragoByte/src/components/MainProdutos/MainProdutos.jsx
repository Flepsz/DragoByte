import { EmblaCarousel } from '../Carousel/EmblaCarousel.jsx'
import Products from "../MainHome/Products/Products.jsx";
import BestBrands from "../BestBrands/BestBrands.jsx";

import "swiper/css";
import "./MainProdutos.css";

function MainHome() {
    return (
        <main>
            <EmblaCarousel />
            <div className="mais__vendidos">PRODUTOS</div>
            <Products searchProduct="ps5" />
            <BestBrands />
        </main>
    );
}

export default MainHome;