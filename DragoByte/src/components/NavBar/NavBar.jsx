import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./dragobyte-logo.png";
import "./NavBar.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
  const [active, setActive] = useState("nav__menu"); // Estado que controla a classe CSS para o menu de navegação
  const [toggleIcon, setToggleIcon] = useState("nav__toggler"); // Estado que controla a classe CSS para o ícone do menu

  const navToggle = () => {
    // Função que altera as classes CSS do menu e do ícone ao ser acionado o clique no ícone do menu

    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link to="/" rel="noreferrer" className="nav__brand">
        <img className="nav__brand" src={Logo} alt="DragoByte Logo" />
      </Link>
      <ul className={active}>
        {/* Links para as diferentes páginas */}
        <li className="nav__item">
          <Link to="/" rel="noreferrer" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/produtos" rel="noreferrer" className="nav__link">
            Produtos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/sobre" rel="noreferrer" className="nav__link">
            Sobre
          </Link>
        </li>
      </ul>
      <SearchBar /> {/* Componente de barra de pesquisa */}
      {/* Ícone do menu responsivo */}
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
