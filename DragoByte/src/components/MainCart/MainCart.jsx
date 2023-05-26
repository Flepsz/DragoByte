import ItemsCart from '../ItemsCart/ItemsCart.jsx'
import carticon from './img/carticon.png'

import './MainCart.css'

function MainCart() {
    return ( 
        <main>
            <section className='container__ItemsCart'>
                <div className='title__ItensCart'>
                    <img src={carticon} alt="Carrinho icon" />
                    <h1>Carrinho de Compras</h1>
                </div>
                    <ItemsCart />   
            </section>
        </main>
    );
}

export default MainCart;