import { useState } from "react";
import PropTypes from "prop-types";
import "./QuantityCart.css";
import { IoIosArrowBack, IoIosArrowForward, IoMdTrash } from "react-icons/io";
import formatCurrency from "../../../../utils/formatCurrency";

function QuantityCart({ quantity, price, onQuantityChange, onRemove }) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const totalPrice = parseFloat((price * currentQuantity).toFixed(2));

    // Função para aumentar a quantidade do item
    const increaseQuantity = () => {
        const newQuantity = currentQuantity + 1;
        setCurrentQuantity(newQuantity);
        onQuantityChange(newQuantity);
        window.location.reload();
    };

    // Função para diminuir a quantidade do item
    const decreaseQuantity = () => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            onQuantityChange(newQuantity);
            window.location.reload();
        }
    };

    // Função para lidar com a remoção do item
    const handleRemove = () => {
        onRemove();
        window.location.reload();
    };

    return (
        <div className="all__QuantityCart">
            <div className="container__QuantityCart">
                <h1 className="h1__ItemsCart">Quant.</h1>
                <div className="count__QuantityCart">
                    <div
                        className={`left-arrow ${
                            quantity === 1 ? "disabled" : ""
                        }`}
                        onClick={decreaseQuantity}
                    >
                        <IoIosArrowBack />
                    </div>
                    <p className="number__QuantityCart">{currentQuantity}</p>
                    <div className="right-arrow" onClick={increaseQuantity}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className="remove__QuantityCart" onClick={handleRemove}>
                    <div className="trash__QuantityCart">
                        <IoMdTrash />
                    </div>
                    <p className="rmtext__QuantityCart">Remover</p>
                </div>
            </div>
            <div className="value__ItemsCart">
                <h1 className="h1__ItemsCart">Preço à Vista:</h1>
                <p className="price__ItemsCart">
                    {formatCurrency(totalPrice, "BRL")}
                </p>
            </div>
        </div>
    );
}

QuantityCart.propTypes = {
    quantity: PropTypes.number.isRequired, // Propriedade que representa a quantidade do item
    price: PropTypes.number.isRequired, // Propriedade que representa o preço do item
    onQuantityChange: PropTypes.func.isRequired, // Função chamada quando a quantidade do item é alterada
    onRemove: PropTypes.func.isRequired, // Função chamada quando o item é removido
};

export default QuantityCart;
