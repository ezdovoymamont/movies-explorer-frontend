import "./MoviesCard.css"
import imgFilm from "../../../images/imgFilm.svg"
import save from "../../../images/save.svg"

function MoviesCard() {

    // let buttonClassName =
    //   ? "movieCard__button movies-card__button_save"
    //   : "movieCard__button";


    return(
        <div className="movieCard__item">
        <div className="movieCard__block">
          <div className="movieCard__description">
            <h3 className="movieCard__title">33 слова о дизайне</h3>
  
            {/* {location.pathname === "/movies" && ( */}
              <button
                // className={buttonClassName}
                className="movieCard__button_save"
                type="button"
              ></button>
            {/* )} */}
            {/* {location.pathname === "/saved-movies" && ( */}
              {/* <button
                className="movieCard__button movieCard__button_delete"
                type="button"
              ></button> */}
            {/* )} */}
          </div>
          <p className="movieCard__time">
            1ч 47м
          </p>
        </div>
        <img src={imgFilm} alt="Заставка фильма" className='movieCard__image' />
        </div>
        
       
    );
}

export default MoviesCard;
