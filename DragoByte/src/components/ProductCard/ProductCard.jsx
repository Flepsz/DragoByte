import React from 'react'
import propTypes from 'prop-types';
import "./ProductCard.css"

function ProductCard({ data }) {

    function desconto() {
        return Math.floor(Math.random() * (50 - 1) ) + 1;
    }


    const { title, thumbnail, price, attributes } = data;

    return (
        <section className='product__card'>
            <div className="card__header">
                <div className="card-off">
                    <div className="percent">{desconto()}%</div>
                    <div className="off">OFF</div>
                </div>
                <div className="card-brand">
                    
                    <div className="name-brand">{attributes[1].value_name}</div>
                </div>
            </div>

            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
            alt="product" className='card__img'/>

            <div className="card__infos">
                <h2 className='card__title'>{title}</h2>
                <h2 className='card__price'>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h2>
            </div>
            <button type='button' className='button__add-cart'>COMPRAR</button>
        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({})
}.isRequired;