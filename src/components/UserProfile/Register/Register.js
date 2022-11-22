import {Link} from "react-router-dom";
import "./Register.css";
import {useFormWithValidation} from "../../../utils/useFormWithValidation";
import logo from "../../../images/logo_header.svg";
import React from "react";

function Register({onRegister, registerError}) {
    const validation = useFormWithValidation();
    const {name, email, password} = validation.errors;


    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = validation.values;
        onRegister(name, email, password);
        validation.resetForm();

    };

    return (
        <div className="register">
            {/* <img alt="Логотип" className="register__header" /> */}
            <form className="register__form" onSubmit={handleSubmit}>
                <header className="register__header">
                    <header className="login__header">
                        <Link className="" to="/">
                            <img alt="Логотип сайта" src={logo}/>
                        </Link>
                    </header>
                </header>
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
                        onChange={validation.handleChange}
                        value={validation?.values?.name || ''}
                        pattern='[A-Za-zА-Яа-яЁё\s-]+'
                    />
                    <span className="register__input-error">{name}</span>
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
                        onChange={validation.handleChange}
                        value={validation?.values?.email || ''}
                        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                    />
                    <span className="register__input-error">{email}</span>
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
                        onChange={validation.handleChange}
                        value={validation?.values?.password || ''}
                        required
                    />
                    <span className="register__input-error">{password}</span>
                </label>

                <span className="register__input-error">{registerError}</span>
                <button
                    type="submit"
                    className="register__save-button"
                    disabled={!validation.isValid}
                >
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
