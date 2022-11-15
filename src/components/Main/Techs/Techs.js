import "./Techs.css"

function Techs() {
    return(
        <section className="techs">
            <div className="techs__page">
                <h2 className="techs__title"> Технологии</h2>

                <div className="techs__container">
                    <p className="techs__tech">7 технологий</p>
                    <p className="techs__text">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                    <ul className="techs__links">
                        <li className="techs__item">
                            <a className="techs__link" href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank"rel="noreferrer">
                                HTML
                            </a>
                        </li>
                        <li className="techs__item">
                            <a className="techs__link" href="https://developer.mozilla.org/ru/docs/Web/CSS" target="_blank"rel="noreferrer">
                                CSS
                            </a>
                        </li>
                        <li className="techs__item">
                            <a className="techs__link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"rel="noreferrer">
                                JS
                            </a>
                        </li>
                        <li className="techs__item">
                            <a className="techs__link" href="https://reactjs.org/" target="_blank"rel="noreferrer">
                                React
                            </a>
                        </li>
                        <li className="techs__item">
                            <a className="techs__link" href="https://github.com/" target="_blank"rel="noreferrer">
                            Git  
                            </a>
                        </li>
                        <li className="techs__item">
                            <a className="techs__link" href="https://expressjs.com/ru/" target="_blank"rel="noreferrer">
                            Express.js   
                            </a>
                        </li>
                        <li className="techs__item">
                            <a className="techs__link" href="https://www.mongodb.com/" target="_blank"rel="noreferrer">
                            mongoDB   
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default Techs;