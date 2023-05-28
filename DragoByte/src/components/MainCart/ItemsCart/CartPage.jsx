import React, { useContext } from 'react';
import { CartContext } from '../../../utils/CartContext.jsx';
import formatCurrency from '../../../utils/formatCurrency';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (title) => {
    removeFromCart(title);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {Array.from(cartItems.values()).map((item) => (
        <div key={item.title}>
          <img src={item.thumbnail} alt="product" />
          <h3>{item.title}</h3>
          <p>{formatCurrency(item.price, 'BRL')}</p>
          <button type="button" onClick={() => handleRemoveFromCart(item.title)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
