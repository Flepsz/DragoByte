import './MainAgradecimento.css'
import Logo from './logo.png'

function MainAgradecimento() {
    return (
        <section className='container__MainAgradecimento'>
            <div className="content__MainAgradecimento">
                <img className='img__MainAgradecimento' src={Logo} alt="DragoByte Logo" />
                <div className="line__MainAgradecimento"></div>
                <div className="text__MainAgradecimento">
                    <h1 className='h1__MainAgradecimento'>OBRIGADO PELA SUA COMPRA</h1>
                    <p className='p__MainAgradecimento'>
                    Agradecemos por sua compra no DragoByte! Valorizamos sua preferência e esperamos que aproveite ao máximo sua nova peça de computador. Em caso de dúvidas ou assistência, estamos aqui para ajudar. Tenha uma ótima experiência! Equipe DragoByte
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MainAgradecimento;