import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";
import formatCurrency from "../../../../utils/formatCurrency";

function ProductCard({ data }) {
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = localStorage.getItem("cartItems");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    function desconto() {
        return Math.floor(Math.random() * (50 - 1)) + 1;
    }

    const { title, thumbnail, price, attributes } = data;
    const brand = attributes[1].value_name;

    const handleAddToCart = () => {
        const existingItem = cartItems.find(
            (cartItem) => cartItem.title === title
        );

        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.title === title) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            setCartItems(updatedCartItems);
        } else {
            const newItem = {
                title,
                thumbnail,
                price,
                brand,
                quantity: 1,
            };
            setCartItems([...cartItems, newItem]);
        }
        window.location.reload();
    };

    React.useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="product__card">
            <div className="card__header">
                <div className="card-off">
                    <div className="percent">{desconto()}%</div>
                    <div className="off">OFF</div>
                </div>
                <div className="card-brand">
                    <div className="name-brand">{brand}</div>
                </div>
            </div>

            <img
                src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="product"
                className="card__img"
            />

            <div className="card__infos">
                <h2 className="card__title">{title}</h2>
                <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
            </div>
            <button
                type="button"
                className="button__add-cart"
                onClick={handleAddToCart}
            >
                COMPRAR
            </button>
        </section>
    );
}

ProductCard.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        attributes: PropTypes.arrayOf(
            PropTypes.shape({
                value_name: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
};

export default ProductCard;
