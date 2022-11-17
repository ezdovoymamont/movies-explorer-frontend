import React, { Profiler } from "react";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App";
import Main from "../Main/Main";
import Login from "../UserProfile/Login/Login";
import Register from "../UserProfile/Register/Register";
import Profile from "../UserProfile/Profile/Profile";
import Error404 from "../Error404/Error404";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import moviesApi from "../../utils/MoviesApi";
import {authorize, register} from "../../utils/MainApi";


function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [currentUser, setCurrentUser] = useState({
        loggedIn: false,
        name: '',
        email: '',
        _id: '',
    });

    const navigate = useNavigate();

    const handleSearchSubmit = (keyword, isShortFilms) => {
        moviesApi.getAllMovies()
            .then((movies) => {
                setIsLoading(true);
                let filteredMovies =
                    movies.filter((movie) => movie.nameRU.toUpperCase().includes(keyword.toUpperCase()));
                if(keyword === '000') // todo remove and make const
                {
                    filteredMovies = movies;
                }
                setMovies(filteredMovies);
                localStorage.setItem('filteredMovies', filteredMovies);
                localStorage.setItem('shortFilms', isShortFilms);
                localStorage.setItem('keyword', keyword)

                setTimeout(() => setIsLoading(false), 500);
            });
    };

    const handleSaveSummit = () => {

    };

    const onRegister = (name, email, password) => {
        register(name, email, password)
            .then((user) => {
                if(user) {
                    onLogin(email, password);
                }
                setRegisterError('');
            })
            .catch((err) => {
                if(err.errorCode == 409)
                {
                    setRegisterError('Пользователь с таким email уже существует');
                } else {
                    setRegisterError('Произошла ошибка');
                }
            });
    }

    const onLogin = (email, password) => {
        authorize(email, password)
            .then((res) => {
                if (res.jwt) {
                    localStorage.setItem('jwt', res.jwt);
                    setLoginError('');
                    setCurrentUser({
                        loggedIn: true,
                        name: res.name,
                        email: res.email,
                        _id: res._id,
                    });
                }
            })
            .then(() => navigate('/movies'))
            .catch((err) => {
                if (err.errorCode === 404) {
                    setLoginError('Вы ввели неправильный логин или пароль.');
                    return;
                }
                setLoginError('Ошибка логина');
            });
    };

    return(
        <CurrentUserContext.Provider>
        <div>
          <Routes>
            <Route
              path="/"
              element={ <Main /> }
            />

            <Route
              path="/sign-in"
              element={
                <>
                  <Login
                  onLogin={onLogin}
                  loginError={loginError}/>
                </>
              }
            />

            <Route
              path="/sign-up"
              element={
                <>
                  <Register
                    onRegister={onRegister}
                    registerError = {registerError}/>
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Profile />
                </>
              }
            />
            <Route
              path="/404"
              element={
                <>
                  <Error404 />
                </>
              }
            />

            <Route
              path="/movies"
              element={
                <>
                  <MoviesCardList
                      handleSearchSubmit = {handleSearchSubmit}
                      movies = {movies}
                      isLoading = {isLoading}
                      handleSaveSummit = {handleSaveSummit}
                  />
                </>
              }
            />

            <Route
              path="/saved-movies" // todo rename
              element={
                <>
                  <SavedMovies />
                </>
              }
            />

            <Route path="/" element={<></>} />
          </Routes>

        </div>
      </CurrentUserContext.Provider>

    );
}

export default App;
