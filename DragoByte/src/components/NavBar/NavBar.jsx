import React, { useState } from "react";
import Logo from "./dragobyte-logo.png";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");

        toggleIcon === "nav__toggler"
            ? setToggleIcon("nav__toggler toggle")
            : setToggleIcon("nav__toggler");
    };


    return (
        <nav className="nav">
            <a href="/" className="nav__brand">
                <img className="nav__brand" src={Logo} alt="DragoByte Logo" />
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Produtos
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Sobre
                    </a>
                </li>
            </ul>
            <SearchBar />
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default NavBar;
