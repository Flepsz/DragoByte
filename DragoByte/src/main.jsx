import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Sobre from "./Sobre.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
// import { CartProvider } from './utils/CartContext.jsx';
import Carrinho from "./Carrinho.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import Cart from './components/MainCart/ItemsCart/CartPage.jsx'
import "./syles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename='/dragobyte'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
