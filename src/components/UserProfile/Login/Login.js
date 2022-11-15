import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import logo_header from "../../../images/logo_header.svg"


function Login() {

  return (
    <div className="login">
      {/* <img src={logo_header} alt="Логотип" className="login__header" /> */}
      <form className="login__form">
        <header className="login__header"></header>
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__field">
        <span className="login__label">E-mail</span>
        <input
          className="login__input"
          minLength="10"
          maxLength="50"
          type="email"
          name="email"
          id="email"
          required
        />
        <span className="login__input-error" />
        </label>

        <label className="login__field">
        <span className="login__label">Пароль</span>
        <input
          className="login__input"
          minLength="10"
          maxLength="50"
          type="password"
          name="password"
          id="password"
          required
        />
        <span className="login__input-error" />
        </label>
        
        <button type="submit" className="login__save-button">
          Войти
        </button>
      </form>

      <div className="block__register">
        <p className="block__register-text">Еще не зарегистрированы?</p>
        <Link to="/sign-up" className="block__register-link">
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;