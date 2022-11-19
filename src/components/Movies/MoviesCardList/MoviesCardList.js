import "./MoviesCardList.css";

import HeaderFilms from "../../../components/Header/HeaderFilms/HeaderFilms";
import SearchForm from "../../../components/Movies/SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../../../components/Footer/Footer";
import Preloader from "../Preloader/Preloader";
import {useEffect, useState} from "react";
import {MOVIE_API_PATH} from "../../../utils/constants";

function MoviesCardList({
                            handleSearchSubmit,
                            movies,
                            isLoading,
                            isFailToLoad,
                            handleSaveSummit,
                            savedMovies,
                            savedMoviesToShow,
                            isSavedMovies
                        }) {
    const [moviesToShowCount, setMoviesToShowCount] = useState(3);
    const [moviesToLoad, setMoviesToLoad] = useState(3);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleShowMore = () => {
        setMoviesToShowCount((count) => count + moviesToLoad);
    }

    const moviesToShow = isSavedMovies ? savedMoviesToShow : movies.slice(0, moviesToShowCount);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        if (windowWidth <= 480) {
            setMoviesToShowCount(5);
            setMoviesToLoad(2);
        } else if (windowWidth > 480 && windowWidth <= 768) {
            setMoviesToShowCount(8);
            setMoviesToLoad(2);
        } else if (windowWidth > 768 && windowWidth <= 1280) {
            setMoviesToShowCount(5);
            setMoviesToLoad(2);
        } else {
            setMoviesToShowCount(12);
            setMoviesToLoad(3);
        }
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        };
    }, [windowWidth]);

    const isNotFound = (!Array.isArray(movies) || movies.length === 0) && isSavedMovies === false;

    let message = '';
    if (isFailToLoad) {
        message = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
    } else if (isNotFound && localStorage.getItem('keyword')) {
        message = 'Ничего не найдено';
    }

    return (<>
        <HeaderFilms/>
        <main>
            <SearchForm
                onSubmit={handleSearchSubmit}
            />
            {isLoading ? (<Preloader/>) : (message !== '' ? (<h2>{message}</h2>) // todo верстка
                : (<section className="movies-list">
                    <div className="movies-list__container">
                        {moviesToShow.map((movie) => {
                            //const isSaved = savedMovies?.some((mov) => mov.movieId === movie.id);
                            return <MoviesCard
                                name={movie.nameRU}
                                thumbnail={isSavedMovies ? movie.thumbnail : `${MOVIE_API_PATH}/${movie.image.formats.thumbnail.url}`}
                                duration={movie.duration}
                                id={isSavedMovies ? movie.movieId : movie.id}
                                trailerLink={movie.trailerLink}
                                isSavedMovies={isSavedMovies}
                                savedMovies={savedMovies}
                                handleSaveSummit={handleSaveSummit}
                            />
                        })}

                    </div>
                    {moviesToShowCount < movies.length && isSavedMovies === false ? (<button
                        type='button'
                        className="movies-list__button"
                        onClick={handleShowMore}
                    >
                        Еще
                    </button>) : ('')}
                </section>))}
        </main>
        <Footer/>
    </>);
}

export default MoviesCardList;
