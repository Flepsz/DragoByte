import { useState, useEffect } from "react";
import "./ContactUs.css";

function ContactUS() {
  const [showPopup, setShowPopup] = useState(false); // Estado que controla a exibição do popup de mensagem enviada
  const [messageSent, setMessageSent] = useState(""); // Estado que armazena a mensagem de confirmação de envio
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  }); // Estado que armazena os valores do formulário

  // Função para resetar os valores do formulário
  const handleFormReset = () => {
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if (name && email && message) {
      setMessageSent("A mensagem foi enviada!");
      setShowPopup(true);

      handleFormReset();
    }
  };

  // Efeito colateral que controla a exibição do popup por 4 segundos e o fecha
  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  return (
    <section className="main__contactus">
      <p className="title__brands">FALE CONOSCO</p>
      <div className="container__contactus">
        <form className="form__contactus" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                name="name"
                value={formValues.name}
                maxLength={70}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
              <div className="underline"></div>
              <label htmlFor="">Nome</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                name="email"
                value={formValues.email}
                maxLength={70}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
              <div className="underline"></div>
              <label htmlFor="">E-mail</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="8"
                cols="80"
                required
                name="message"
                value={formValues.message}
                maxLength={1000}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
              ></textarea>
              <br />
              <div className="underline"></div>
              <label htmlFor="">Digite sua mensagem</label>
              <br />
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="Enviar" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content" style={{ top: 0 }}>
            <h3>{messageSent}</h3>
            <button onClick={() => setShowPopup(false)}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactUS;
