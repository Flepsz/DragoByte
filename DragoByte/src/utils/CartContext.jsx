// Importação das dependências e componentes necessários
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Criação do contexto do carrinho de compras
export const CartContext = createContext();

// Componente de provedor do carrinho de compras
export const CartProvider = ({ children }) => {
  // Estado para armazenar os itens do carrinho usando um Map
  const [cartItems, setCartItems] = useState(new Map());

  // Função para adicionar um item ao carrinho
  const addToCart = (productData) => {
    // Cria uma cópia atualizada do carrinho
    const updatedCart = new Map(cartItems);
    // Adiciona o novo item ao carrinho
    updatedCart.set(productData.title, {
      brand: productData.brand,
      thumbnail: productData.thumbnail,
      title: productData.title,
      price: productData.price,
    });
    // Atualiza o estado do carrinho com o novo carrinho atualizado
    setCartItems(updatedCart);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (title) => {
    // Cria uma cópia atualizada do carrinho
    const updatedCart = new Map(cartItems);
    // Remove o item do carrinho com base no título
    updatedCart.delete(title);
    // Atualiza o estado do carrinho com o novo carrinho atualizado
    setCartItems(updatedCart);
  };

  // Renderiza o provedor do contexto do carrinho de compras com os valores e componentes filhos
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Propriedades esperadas para o componente CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
