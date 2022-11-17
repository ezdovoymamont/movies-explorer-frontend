import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {useFormWithValidation} from "../../../utils/useFormWithValidation";


function Login({onLogin, loginError}) {
  const validation = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = validation.values;
    onLogin( email, password);
    validation.resetForm();
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
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
          onChange={validation.handleChange}
          value={validation?.values?.email || ''}
          pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
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
          onChange={validation.handleChange}
          value={validation?.values?.password || ''}
        />
        <span className="login__input-error" >{loginError}</span>
        </label>

        <button
            type="submit"
            className="login__save-button"
            disabled={validation.isValid === false}
        >
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
