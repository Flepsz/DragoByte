import './QuantityCart.css'
import {IoIosArrowBack, IoIosArrowForward, IoMdTrash} from 'react-icons/io'

function QuantityCart() {
    return ( 
        <div className="container__QuantityCart">
            <h1 className="h1__ItemsCart">Quant.</h1>
            <div className="count__QuantityCart">
                <div className="left-arrow"><IoIosArrowBack /></div>
                <p className="number__QuantityCart">1</p>
                <div className="right-arrow"><IoIosArrowForward /></div>
            </div>
            <div className="remove__QuantityCart">
                <div className="trash__QuantityCart"><IoMdTrash /></div>
                <p className='rmtext__QuantityCart'>Remover</p>
            </div>
        </div>
    );
}

export default QuantityCart;