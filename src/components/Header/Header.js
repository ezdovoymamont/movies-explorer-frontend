import {Link} from "react-router-dom"
import "./Header.css"

function header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo"></div>
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
