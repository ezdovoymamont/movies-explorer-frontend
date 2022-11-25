import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__page">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>

                <div className="footer__container">
                    <p className="footer__copyright">© {new Date().getFullYear()}</p>
                    <ul className="footer__links">
                        <li className="footer__item">
                            <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank"
                               rel="noreferrer">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ezdovoymamont/" className="footer__link" target="_blank"
                               rel="noreferrer">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
