import Pix from './img/Pix.png'
import Nu from './img/Nubank.png'
import Card  from './img/Card.png'
import SegRa from './img/SegRa.png'
import Blindado from './img/Blindado.png'
import SegGoogle from './img/SegGoogle.png'
import Insta from './img/Insta.png'
import Twitter from './img/Twitter.png'
import Yt from './img/Yt.png'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section className='main-ft'>
                <div className="payments">
                    <h1>Formas de Pagamento</h1>
                    <div className="payments-img">
                        <img src={Pix} alt="Pix" />
                        <img src={Nu} alt="Nubank" />
                        <img src={Card} alt="Cartão" />
                    </div>
                </div>
                <div className="security">
                    <h1>Segurança</h1>
                    <div className="security-img">
                        <img src={SegRa} alt="Ra1000" />
                        <img src={Blindado} alt="Blindado" />
                        <img src={SegGoogle} alt="Google Site Seguro" />
                    </div>
                </div>
            </section>
            <section className='social-media'>
                <a href="/" target="_blank" rel="noreferrer">
                    <img src={Insta} alt="Instagram" />
                </a>
                <a href="https://twitter.com/ByteDrago" target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.youtube.com/watch?v=ub82Xb1C8os" target="_blank" rel="noreferrer">
                    <img src={Yt} alt="Youtube" />
                </a>
            </section>
        </footer>
    );
};

export default Footer;
