import {Link, useLocation} from "react-router-dom";
import "./HeaderFilms.css";
import logo from "../../../images/logo_header.svg"
import {useEffect, useState} from "react";
import searchForm from "../../Movies/SearchForm/SearchForm";


function HeaderFilms() {
    const location = useLocation();

    const [mainClasses, setMainClasses] = useState('');
    const [moviesClasses, setMoviesClasses] = useState('');
    const [savedMoviesClasses, setSavedMoviesClasses] = useState('');


    useEffect(() => {

        setMainClasses("headerFilms__link");
        setMoviesClasses("headerFilms__link");
        setSavedMoviesClasses("headerFilms__link");
        if(location.pathname === '/'){
            setMainClasses("headerFilms__link-menu headerFilms__link_type_active");
        }
        if(location.pathname === '/movies'){
            setMoviesClasses ("headerFilms__link-menu headerFilms__link_type_active");
        }
        if(location.pathname === '/saved-movies'){
            setSavedMoviesClasses("headerFilms__link-menu headerFilms__link_type_active");
        }
        console.log(mainClasses)
        console.log(moviesClasses)
        console.log(savedMoviesClasses)



    }, [location])
    return (
        <div className="headerFilms">
            <div className="headerFilms1">
                <div className="headerFilms__container">

                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <Link className="headerMain__logo" to="/">
                        <img alt="Логотип сайта" src={logo}/>
                    </Link>
                    <div className="headerFilmsMenu__container">


                        <div className="headerFilms_fill"></div>

                        <ul className="headerFilms__links">
                            <li className="headerFilms__item">
                                <Link to="/" className={mainClasses}>
                                    Главная
                                </Link>
                            </li>
                            <li className="headerFilms__item">
                                <Link to="/movies" className={moviesClasses}>
                                    Фильмы
                                </Link>
                            </li>
                            <li className="headerFilms__item">
                                <Link to="/saved-movies" className={savedMoviesClasses}>
                                    Сохранённые фильмы
                                </Link>
                            </li>
                        </ul>
                        <ul className="headerFilms__accountItem">
                            <li className="headerFilms__item">
                                <Link to="/profile" className="headerFilms__account">
                                    Аккаунт
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default HeaderFilms;
