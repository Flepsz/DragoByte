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
            <Products searchProduct="placa mãe b550" />
            <BestBrands />
        </main>
    );
}

export default MainHome;