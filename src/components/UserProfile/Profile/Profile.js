import "./Profile.css";
import HeaderFilms from "../../Header/HeaderFilms/HeaderFilms"
import React, {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../../utils/useFormWithValidation";

function Profile({onUpdateUser, handleLogout, profileError}) {
    const currentUser = useContext(CurrentUserContext);
    const validation = useFormWithValidation();
    const {name, email} = validation.errors;


    const handleSubmit = (evt) => {
        evt.preventDefault();
        let {name, email} = validation.values;
        if(!email)
        {
            email = currentUser.email;
        }
        if(!name)
        {
            name = currentUser.name;
        }
        onUpdateUser(name, email);
        validation.resetForm();
    };

    return (<div className="profile">
        <HeaderFilms/>
        <div className="profile__container">
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
                <h1 className="profile__title"> Привет, {currentUser.name}!</h1>
                <label className="profile__field">
                    <span className="profile__label">Имя</span>
                    <input
                        type="text"
                        className="profile__input"
                        name="name"
                        minLength="3"
                        maxLength="20"
                        placeholder={currentUser.name}
                        required
                        onChange={validation.handleChange}
                        value={validation?.values?.name || ''}
                        pattern='[A-Za-zА-Яа-яЁё\s-]+'
                    />
                    <span className="profile__input-error">{name}</span>

                </label>

                <label className="profile__field">
                    <span className="profile__label">E-mail</span>
                    <input
                        type="email"
                        className="profile__input"
                        name="email"
                        minLength="10"
                        maxLength="50"
                        placeholder={currentUser.email}
                        required
                        onChange={validation.handleChange}
                        value={validation?.values?.email || ''}
                        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                    />
                    <span className="profile__input-error">{email}</span>

                </label>
                <div className="profile__button">
                    <span className="profile__input-error">{profileError}</span>

                    <button
                        className="profile__edit"
                        disabled={
                               ((validation?.values?.name !== currentUser.name) && name)
                            || ((validation?.values?.email !== currentUser.email) && email)
                            || (currentUser.name === validation?.values?.name && currentUser.email === validation?.values?.email)

                        }
                    >Редактировать</button>
                    <button
                        className="profile__logout"
                        onClick={handleLogout}
                    >Выйти из аккаунта
                    </button>
                </div>
            </form>
        </div>



    </div>);
}

export default Profile;
