import { useState } from "react";
import SearchIcon from "./search.png";
import CartButton from "../CartButton/CartButton";

import "./SearchBar.css";

function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="nav__end">
            {/* <form className="search-bar">
                <input
                    type="search"
                    value={searchValue}
                    className="search__input"
                    onChange={({ target }) => setSearchValue(target.value)}
                    required
                />
                <button type="submit" className="search__button">
                    <img
                        className="icon__SearchBar"
                        src={SearchIcon}
                        alt="Botão Pesquisa"
                    />
                </button>
            </form> */}
            <CartButton />
        </div>
    );
}

export default SearchBar;
