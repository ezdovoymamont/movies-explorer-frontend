import {Link} from "react-router-dom"
import "./Error404.css"

function Error404() {
    return (
        <div className="error404">
            <div className="error404__page">
                <h2 className="error404__title">404</h2>
                <p className="error404__text">Страница не найдена</p>
                <Link to={-1} className="error404__link">
                    Назад
                </Link>
            </div>
        </div>
    );
}

export default Error404;
