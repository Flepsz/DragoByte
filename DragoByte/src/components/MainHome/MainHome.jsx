import { EmblaCarousel } from "../Carousel/EmblaCarousel.jsx";
import Products from "./Products/Products.jsx";
import BestBrands from "../BestBrands/BestBrands.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";

import "swiper/css";
import "./MainHome.css";

function MainHome() {
    return (
        <main>
            <EmblaCarousel />
            <div className="mais__vendidos">MAIS VENDIDOS</div>
            <Products searchProduct="pc gamer" />
            <BestBrands />
            <ContactUs />
        </main>
    );
}

export default MainHome;
