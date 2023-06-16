import { Link } from "react-router-dom";
import CartIcon from "./CartIcon.png";
import { useState, useEffect } from "react";

import "./CartButton.css";

function CardButton() {
  const [cartItems, setCartItems] = useState([]); // Estado que armazena os itens do carrinho

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems"); // Obtém os itens do carrinho armazenados no localStorage
    if (storedItems) {
      setCartItems(JSON.parse(storedItems)); // Atualiza o estado cartItems com os itens obtidos do localStorage, convertendo-os de JSON para um array
    }
  }, []); // O array de dependências vazio indica que o efeito será executado somente uma vez, durante a montagem do componente

  const cartItemCount = cartItems.length; // Contagem do número de itens no carrinho

  return (
    <Link to="/carrinho" rel="noreferrer">
      <button type="button" className="cart__button">
        <img className="icon__CartButton" src={CartIcon} alt="" />{" "}
        {/* Ícone do carrinho */}
        {cartItemCount > 0 && (
          <span className="cart-status">{cartItemCount}</span>
        )}{" "}
        {/* Exibe o número de itens no carrinho, somente se for maior que zero */}
      </button>
    </Link>
  );
}

export default CardButton;
