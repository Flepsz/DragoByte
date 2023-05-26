import { useState } from "react";
import {Link} from 'react-router-dom'
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
            <Link to="/" rel="noreferrer" className="nav__brand">
                <img className="nav__brand" src={Logo} alt="DragoByte Logo" />
            </Link>
            <ul className={active}>
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
