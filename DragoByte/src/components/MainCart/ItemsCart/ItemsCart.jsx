import { useState, useEffect } from 'react';
import './ItemsCart.css';
import Fire from "./fire.png";
import QuantityCart from './QuantityCart/QuantityCart';

function ItemsCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = newQuantity;
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  if (cartItems.length === 0) {
    return (
      <div className='empty__ItemsCart'>
        <p className="emptytitle__ItemsCart">Seu carrinho está vazio!</p>
        <a target="_blank" href="/produtos"><button className="continue-buy__ResumCard">CONTINUAR COMPRANDO</button></a>
      </div>
    )
  }

  return (
    <article className="content__ItemsCart">
      {cartItems.map((item, index) => (
        <div className="all__ItemsCart" key={index}>
          <img className="img__ItemsCart" src={item.thumbnail} alt="Product" />
          <div className="desc__ItemsCart">
            <h1 className="h1__ItemsCart">{item.brand}</h1>
            <p className="nameP__ItemsCart">{item.title}</p>
            <div className="oferta__ItemsCart">
              <img className="img-oferta__ItemsCart" src={Fire} alt="Fire" />
              <h1 className="h1__ItemsCart">OFERTA DRAGO</h1>
            </div>
          </div>
          <QuantityCart
            quantity={item.quantity}
            price={item.price}
            onRemove={() => handleRemoveItem(index)}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(index, newQuantity)
            }
          />
        </div>
      ))}
    </article>
  );
}

export default ItemsCart;
