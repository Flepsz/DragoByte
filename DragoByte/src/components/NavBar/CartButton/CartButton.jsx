import {Link} from 'react-router-dom'
import CartIcon from './CartIcon.png'

import "./CartButton.css";

function CardButton() {
    return (
        <Link to="/carrinho" rel="noreferrer">
            <button type="button" className="cart__button">
                <img className='icon__CartButton' src={CartIcon} alt="" />
                <span className="cart-status">1</span>
            </button>
        </Link>
    );
}

export default CardButton;
