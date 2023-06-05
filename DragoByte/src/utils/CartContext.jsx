import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(new Map());

  const addToCart = (productData) => {
    const updatedCart = new Map(cartItems);
    updatedCart.set(productData.title, {
      brand: productData.brand,
      thumbnail: productData.thumbnail,
      title: productData.title,
      price: productData.price,
    });
    setCartItems(updatedCart);
  };

  const removeFromCart = (title) => {
    const updatedCart = new Map(cartItems);
    updatedCart.delete(title);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
