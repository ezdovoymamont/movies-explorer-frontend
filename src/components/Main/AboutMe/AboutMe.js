import "./AboutMe.css"
import foto from "../../../images/foto.svg";

function AboutMe() {
    return(
        <section className="aboutMe">
            <div className="aboutMe__page">
                <h2 className="aboutMe__title">Студент</h2>
                <div className="about__container">
                    <div className="aboutMe__info">
                    <h3 className="aboutMe__name">Виталий</h3>
                    <p className="aboutMe__job">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». 
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className="aboutMe__link" href="https://github.com/ezdovoymamont" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    </div>
                    <img src={foto} className="aboutMe__foto" alt="Фотография меня"/>
                </div>     
            </div>
        </section>

    );
}
export default AboutMe;