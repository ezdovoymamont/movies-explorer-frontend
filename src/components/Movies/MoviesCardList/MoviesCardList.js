import "./MoviesCardList.css";

import HeaderFilms from "../../../components/Header/HeaderFilms/HeaderFilms";
import SearchForm from "../../../components/Movies/SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../../../components/Footer/Footer";

function MoviesCardList() {
    return(
        <>
        <HeaderFilms />
        <main>
        <SearchForm />
        <section className="movies-list">
            <div className="movies-list__container">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button type="button" className="movies-list__button">Еще</button>
        </section>
        </main>
        <Footer />
        </>
    );
}

export default MoviesCardList;