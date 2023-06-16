import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Sobre from "./Sobre.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Carrinho from "./Carrinho.jsx";
import Agradecimento from "./Agradecimento";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./syles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header /> {/* Componente de cabeçalho */}
      <Routes>
        {/* Rotas para diferentes páginas */}
        <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
        <Route path="/sobre" element={<Sobre />} />{" "}
        {/* Rota para a página "Sobre" */}
        <Route path="/produtos" element={<Produtos />} />{" "}
        {/* Rota para a página "Produtos" */}
        <Route path="/carrinho" element={<Carrinho />} />{" "}
        {/* Rota para a página "Carrinho" */}
        <Route path="/agradecimento" element={<Agradecimento />} />{" "}
        {/* Rota para a página "Agradecimento" */}
        <Route path="*" element={<NotFound />} />{" "}
        {/* Rota para página "Not Found" */}
      </Routes>
      <Footer /> {/* Componente de rodapé */}
    </BrowserRouter>
  </React.StrictMode>
);
