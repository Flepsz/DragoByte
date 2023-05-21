import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'

import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <NavBar />
            </div>
        </header>
    )
}

export default Header
