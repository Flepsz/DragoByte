import { useState, useEffect } from 'react';
import './ItemsCart.css';
import QuantityCart from './QuantityCart/QuantityCart';

function ItemsCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = newQuantity;
      return updatedItems;
    });
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };


  return (
    <article className="content__ItemsCart">
      {cartItems.map((item, index) => (
        <div className='all__ItemsCart' key={index}>
          <img className="img__ItemsCart" src={item.thumbnail} alt="Product" />
          <div className="desc__ItemsCart">
            <h1 className="h1__ItemsCart">{item.brand}</h1>
            <p className="nameP__ItemsCart">{item.title}</p>
            <div className="oferta__ItemsCart">
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
