import { Link } from "react-router-dom";
import "./HeaderFilms.css";
import logo from "../../../images/logo_header.svg"


function HeaderFilms() {
  return (
    <div className="headerFilms">
    <div className="headerFilms1">
    <div className="headerFilms__container">
      {/* <div className="headerMain__logo"></div> */}

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <Link className="headerMain__logo" to="/" >
        <img alt="Логотип сайта" src={logo} />
      </Link>
      <div className="headerFilmsMenu__container">


        <div className="headerFilms_fill"></div>

        <ul className="headerFilms__links">
          <li className="headerFilms__item">
            <Link to="/" className="headerFilms__link-menu">
              Главная
            </Link>
          </li>
          <li className="headerFilms__item">
            <Link to="/movies" className="headerFilms__link">
              Фильмы
            </Link>
          </li>
          <li className="headerFilms__item">
            <Link to="/saved-movies" className="headerFilms__link">
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
