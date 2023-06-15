import "./ContactUs.css"

function ContactUS() {
    return (
        <section className="main__contactus">
            <p className="title__brands">FALE CONOSCO</p>
            <div className="container__contactus">
                <form className='form__contactus' action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">Nome</label>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required />
                            <div className="underline"></div>
                            <label htmlFor="">E-mail</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Digite sua mensagem</label>
                            <br />
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <div className="inner"></div>
                                    <input type="submit" value="Enviar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUS;