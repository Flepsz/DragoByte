import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import CardButton from "../CartButton/CartButton";


import "./SearchBar.css";

function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="nav__end">
            <form className="search-bar">
                <input
                    type="search"
                    value={searchValue}
                    className="search__input"
                    onChange={({ target }) => setSearchValue(target.value)}
                    required
                />
                <button type="submit" className="search__button">
                    <BiSearch />
                </button>
            </form>
            <CardButton />
        </div>
    );
}

export default SearchBar;
