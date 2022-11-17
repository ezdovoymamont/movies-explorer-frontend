import "./MoviesCard.css"

function MoviesCard({
    name,
    duration,
    thumbnail,
    trailerLink,
    isSaved,
    handleSaveSummit,
    onDelete,
    movie}) {

    let saveButtonClassName = isSaved
      ? "movieCard__button  movieCard__button_save"
      : "movieCard__button movieCard__button_unlock";
    let durationString = Math.floor(duration / 60) + 'ч' + duration % 60 + 'м';

    return(
      <li className="movieCard__item">
        <div className="movieCard__block">
          <div className="movieCard__description">
            <h3 className="movieCard__title">{name}</h3>

            {/* {location.pathname === "/movies" && ( */}
              <button
                // className={buttonClassName}
                className={saveButtonClassName}
                onClick={handleSaveSummit}
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
              {durationString}
          </p>
        </div>
        <img src={thumbnail} alt={name} className="movieCard__image" />
      </li>


    );
}

export default MoviesCard;
