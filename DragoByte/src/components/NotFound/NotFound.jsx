import React from 'react'
import Logo from './logord.png'
import Footer from '../Footer/Footer.jsx'
import "./NotFound.css";


function NotFound() {
    return (
        <section>
            <article className='notFound-container'>
                <img className='notFound-img' src={Logo} alt="Prpldg" />
                <div className="notFound-text">
                    <h1 className='notFound-404'>404</h1>
                    <h2 className='notFound-inside'>Ops! Não encontramos essa página</h2>
                </div>
            </article>
        </section>
    )
};

export default NotFound;

