import Logo from "./logord.png";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="notFound-container">
            <img className="notFound-img" src={Logo} alt="Prpldg" />
            <div className="notFound-text">
                <h2 className="notFound-inside">
                    Ops! Não encontramos essa página
                </h2>
            </div>
        </section>
    );
}

export default NotFound;
