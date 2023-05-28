import Test from "./test.png";
import Fire from "./fire.png";
import "./ItemsCart.css";
import QuantityCart from "./QuantityCart/QuantityCart";

function ItemsCart() {
    return (
        <article className="content__ItemsCart">
            <img className="img__ItemsCart" src={Test} alt="Product" />
            <div className="desc__ItemsCart">
                <h1 className="h1__ItemsCart">AMD</h1>
                <p className="nameP__ItemsCart">
                    Processador AMD Ryzen 7 7700X 4.5GHz (5.4GHz Turbo), 8-Cores
                    16-Threads
                </p>
                <div className="oferta__ItemsCart">
                    <img className="img-oferta__ItemsCart" src={Fire} alt="Fire" />
                    <h1 className="h1__ItemsCart">OFERTA DRAGO</h1>
                </div>
            </div>
            <QuantityCart />
            <div className="value__ItemsCart">
                <h1 className="h1__ItemsCart">Preço à Vista:</h1>
                <p className="price__ItemsCart">R$ 2.279,00</p>
            </div>
        </article>
    );
}

export default ItemsCart;
