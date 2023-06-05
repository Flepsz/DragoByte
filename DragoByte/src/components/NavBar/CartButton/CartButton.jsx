import { Link } from 'react-router-dom';
import CartIcon from './CartIcon.png';
import { useState, useEffect } from 'react';

import './CartButton.css';

function CardButton() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const cartItemCount = cartItems.length;

  return (
    <Link to="/carrinho" rel="noreferrer">
      <button type="button" className="cart__button">
        <img className="icon__CartButton" src={CartIcon} alt="" />
        {cartItemCount > 0 && <span className="cart-status">{cartItemCount}</span>}
      </button>
    </Link>
  );
}

export default CardButton;