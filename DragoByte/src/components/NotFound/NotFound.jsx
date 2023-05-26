import React from 'react'
import Logo from './logord.png'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import "./NotFound.css";


function NotFound() {
    return (
        <div>
            <section className='notFound-container'>
                <img className='notFound-img' src={Logo} alt="Prpldg" />
                <div className="notFound-text">
                    <h2 className='notFound-inside'>Ops! Não encontramos essa página</h2>
                </div>
            </section>
        </div>
    )
};

export default NotFound;

