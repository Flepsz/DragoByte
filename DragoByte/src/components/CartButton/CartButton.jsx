import React from "react";
import { BsCart3 } from "react-icons/bs";

import "./CartButton.css";

function CardButton() {
    return (
        <button type="button" className="cart__button">
            <BsCart3 />
            <span className="cart-status">1</span>
        </button>
    );
}

export default CardButton;
