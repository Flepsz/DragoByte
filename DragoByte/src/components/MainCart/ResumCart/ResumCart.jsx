import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ResumCart.css";
import {Link} from 'react-router-dom'
import formatCurrency from "../../../utils/formatCurrency";

function ResumCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("cartItems");
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const calculateTotalWithFreight = () => {
        const total = calculateTotal();
        const freight = 59.9;
        return total + freight;
    };


    return (
        <article className="content__ResumCart">
            <div className="value__ResumCart">
                <p className="pText__ResumCart">Valor dos Produtos:</p>
                <p className="pValue__ResumCart">
                    {formatCurrency(calculateTotal(), "BRL")}
                </p>
            </div>
            <div className="line__ResumCart"></div>
            <div className="frete__ResumCart">
                <p className="pText__ResumCart">Frete:</p>
                <p className="pValue__ResumCart">R$ 59,90</p>
            </div>

            <div className="price-card__ResumCard">
                <p className="pText-pc__ResumCard">
                    Valor à vista no <b>PIX:</b>
                </p>
                <h1 className="h1Value__ResumCard">
                    {formatCurrency(calculateTotalWithFreight(), "BRL")}
                </h1>
                <p className="pText-pc__ResumCard">
                    (Economize: <b>{formatCurrency((calculateTotalWithFreight() * 0.05), "BRL")}</b> )
                </p>
            </div>

            <div className="buttons__ResumCard">
                <Link to='/agradecimento'><button className="comprar__ResumCard">COMPRAR</button></Link>
                <a target="_blank" href="/produtos"><button className="continue-buy__ResumCard">CONTINUAR COMPRANDO</button></a>
            </div>
        </article>
    );
}

ResumCart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ResumCart;
