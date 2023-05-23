import React from 'react'
import "./ProductCard.css"

function ProductCard() {
    return (
        <section className='product__card'>
            <div className="card__header">
                <div className="card-off">
                    <div className="percent">33%</div>
                    <div className="off">OFF</div>
                </div>
                <div className="card-brand">
                    <div className="name-brand">Apple</div>
                </div>
            </div>

            <img src="https://http2.mlstatic.com/D_879810-MLU54959158743_042023-W.jpg"
            alt="product" className='card__img'/>

            <div className="card__infos">
                <h2 className='card__title'>Processador AMD Ryzen 7 7700X 4.5GHz (5.4GHz Turbo), 8-Cores 16-Threads</h2>
                <h2 className='card__price'>R$ 2.279,00</h2>
            </div>
            <button type='button' className='button__add-cart'>Comprar</button>
        </section>
    );
}

export default ProductCard;