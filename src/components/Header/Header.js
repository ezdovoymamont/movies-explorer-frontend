import {Link} from "react-router-dom"
import "./Header.css"
import logo from "../../images/logo_header.svg";

function header() {
    return (
        <div className="header">
            <div className="header__container">
                <Link className="header__logo" to="/">
                    <img alt="Логотип сайта" src={logo}/>
                </Link>
                <ul className="header__links">
                    <li className="header__item">
                        <Link to="/sign-up" className="header__register">
                            Регистрация
                        </Link>
                    </li>
                    <li className="header_item">
                        <Link to="/sign-in" className="header__login">
                            Войти
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default header;
