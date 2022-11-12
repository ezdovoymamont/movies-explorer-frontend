import "./Profile.css";
import HeaderFilms from "../../Header/HeaderFilms/HeaderFilms"

function Profile() {
    return (
    <div className="profile">
      <HeaderFilms />
      <div className="profile__container">
        <form className="profile__form" noValidate>
             <h1 className="profile__title"> Привет, Виталий!</h1>
             <label className="profile__field">
             <span className="profile__label">Имя</span>
               <input
                 type="text"
                 className="profile__input"
                 name="name"
                 minLength="3"
                 maxLength="20"
                 placeholder= "Имя"
                 value={"Виталий"}
               />
             </label>

             <label className="profile__field">
               <span className="profile__label">E-mail</span>
               <input
                 type="email"
                 className="profile__input"
                 name="email"
                 minLength="10"
                 maxLength="50"
                 placeholder= "Email"
                 value={"pochta@yandex.ru"}
               />
             </label>
         </form>
      </div>

           

          <div className="profile__button">
            <button className="profile__edit">Редактировать</button>
            <button className="profile__logout">Выйти из аккаунта</button>
        </div> 
        </div>
      );  
}

export default Profile;