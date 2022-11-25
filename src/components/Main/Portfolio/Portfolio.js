import "./Portfolio.css"

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__page">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__links">
                    <li className="portfolio__item">
                        <a className="portfolio__website" href="https://github.com/ezdovoymamont/how-to-learn"
                           target="_blank" rel="noreferrer">
                            Статичный сайт
                        </a>
                        <a className="portfolio__arrow" href="https://github.com/ezdovoymamont/how-to-learn"
                           target="_blank" rel="noreferrer">
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a className="portfolio__website" href="https://ezdovoymamont.github.io/russian-travel/"
                           target="_blank" rel="noreferrer">
                            Адаптивный сайт
                        </a>
                        <a className="portfolio__arrow" href="https://ezdovoymamont.github.io/russian-travel/"
                           target="_blank" rel="noreferrer">
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a className="portfolio__website" href="https://github.com/ezdovoymamont/react-mesto-api-full"
                           target="_blank" rel="noreferrer">
                            Одностраничное приложение
                        </a>
                        <a className="portfolio__arrow" href="https://github.com/ezdovoymamont/react-mesto-api-full"
                           target="_blank" rel="noreferrer">
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
