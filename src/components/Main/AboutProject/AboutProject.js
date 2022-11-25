import "./AboutProject.css"

function AboutProject() {
    return (
        <section className="aboutProject">
            <div className="aboutProject__page">
                <h2 className="aboutProject__title">О проекте</h2>
                <div>
                    <div className="aboutProject__container">
                        <div className="aboutProject__list">
                            <p className="aboutProject__title_item">
                                Дипломный проект включал 5 этапов
                            </p>
                            <p className="aboutProject__text">
                                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                                доработки.
                            </p>
                        </div>
                        <div className="aboutProject__list">
                            <p className="aboutProject__title_item">
                                На выполнение диплома ушло 5 недель
                            </p>
                            <p className="aboutProject__text">
                                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
                                успешно защититься.
                            </p>
                        </div>
                    </div>
                    <div className="aboutProject__time">
                        <div className="aboutProject__blok-green">1 неделя</div>
                        <div className="aboutProject__blok-grey">4 недели</div>
                        <div className="aboutProject__time-text">Back-end</div>
                        <div className="aboutProject__time-text">Front-end</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
