import './ResumCart.css'

function ResumCart() {
    return (
        <article className='content__ResumCart'>
            <div className="value__ResumCart">
                <p className='pText__ResumCart'>Valor dos Produtos:</p>
                <p className='pValue__ResumCart'>R$ 4.476,90</p>
            </div>
            <div className="line__ResumCart"></div>
            <div className="frete__ResumCart">
                <p className='pText__ResumCart'>Frete:</p>
                <p className='pValue__ResumCart'>R$ 59,90</p>
            </div>

            <div className="price-card__ResumCard">
                <p className='pText-pc__ResumCard'>Valor à vista no <b>PIX:</b></p>
                <h1 className='h1Value__ResumCard'>R$ 4.550,90</h1>
                <p className='pText-pc__ResumCard'>(Economize: <b>R$ 59,99</b> )</p>
            </div>

            <div className="buttons__ResumCard">
                <button className='comprar__ResumCard'>COMPRAR</button>
                <button className='continue-buy__ResumCard'>CONTINUAR COMPRANDO</button>
            </div>
        </article>
    );
}

export default ResumCart; 