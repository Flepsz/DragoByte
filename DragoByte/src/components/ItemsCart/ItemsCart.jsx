import Test from './test.png'
import './ItemsCart.css'

function ItemsCart() {
    return (
        <article className='content__ItemsCart'>
            <img className='img__ItemsCart' src={Test} alt="Product" />
            <div className="desc__ItemsCart">
                <h1 className='brand'></h1>
            </div>
        </article>
    );
}

export default ItemsCart;