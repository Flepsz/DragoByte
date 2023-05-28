import ItemsCart from './ItemsCart/ItemsCart.jsx'
import ResumCart from './ResumCart/ResumCart.jsx'
import cartIcon from './img/carticon.png'
import resumIcon from './img/icon.png'

import './MainCart.css'

function MainCart() {
    return ( 
        <main className='mainCart'>
            <section className='container__ItemsCart'>
                <div className='title__ItensCart'>
                    <img src={cartIcon} alt="Carrinho icon" />
                    <h1>Carrinho de Compras</h1>
                </div>
                <ItemsCart />   
            </section>
            <section className='container__ResumCart'>
                <div className='title__ResumCart'>
                    <img src={resumIcon} alt="Resumo icon" />
                    <h1>Resumo</h1>
                </div>
                <ResumCart />
            </section>
        </main>
    );
}

export default MainCart;