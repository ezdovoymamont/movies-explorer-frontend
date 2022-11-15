import { Link } from "react-router-dom";
import "./Register.css";
// import logo_header from "../../../images/logo_header.svg"

function Register() {
  
  return (
    <div className="register">
      {/* <img alt="Логотип" className="register__header" /> */}
      <form className="register__form">
      <header className="register__header"></header>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__field">
        <span className="register__label">Имя</span>
        <input
          className="register__input"
          minLength="3"
          maxLength="20"
          type="name"
          name="name"
          id="name"
          required
        />
        <span className="register__input-error" />
        </label>

        <label className="register__field">
        <span className="register__label">E-mail</span>
        <input
          className="register__input"
          minLength="10"
          maxLength="50"
          type="email"
          name="email"
          id="email"
          required
        />
        <span className="register__input-error" />
        </label>

        <label className="register__field">
        <span className="register__label">Пароль</span>
        <input
          className="register__input"
          minLength="10"
          maxLength="50"
          type="password"
          name="password"
          id="password"
          required
        />
        <span className="register__input-error" />
        </label>

        <button type="submit" className="register__save-button">
          Зарегистрироваться
        </button>
      </form>

      <div className="block__login">
        <p className="block__login-text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="block__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
