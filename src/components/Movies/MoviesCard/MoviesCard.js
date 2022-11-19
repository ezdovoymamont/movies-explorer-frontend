import "./MoviesCard.css"

function MoviesCard({
                        id,
                        name,
                        duration,
                        thumbnail,
                        trailerLink,
                        isSavedMovies,
                        savedMovies,
                        handleSaveSummit
                    }) {


    let saveButtonClassName = savedMovies.some(m => m.movieId === id)
        ? "movieCard__button movieCard__button_save"
        : "movieCard__button movieCard__button_unlock";
    if (isSavedMovies) {
        saveButtonClassName = "movieCard__button movieCard__button_delete";
    }
    let durationString = Math.floor(duration / 60) + 'ч' + duration % 60 + 'м';

    return (
        <li className="movieCard__item">
            <div className="movieCard__block">
                <div className="movieCard__description">
                    <h3 className="movieCard__title">{name}</h3>
                    <button
                        className={saveButtonClassName}
                        onClick={() => {
                            handleSaveSummit(id);
                        }}
                        type="button"
                    ></button>

                </div>
                <p className="movieCard__time">
                    {durationString}
                </p>
            </div>
            <a
                href={trailerLink}
                target='_blank'
                rel='noreferrer'
            >
                <img src={thumbnail} alt={name} className='movieCard__image' />
            </a>
        </li>


    );
}

export default MoviesCard;
