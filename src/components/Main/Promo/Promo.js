import "./Promo.css"
import logo_text from "../../../images/logo_text.svg"

function Promo() {
    return(
        <section className="promo">
            <div className="promo__page">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <div className="promo__logo" />
                {/* <img src={logo_text} className="promo__image" alt="красивая картинка"/> */}
            </div>
        </section>
    );
}

export default Promo;