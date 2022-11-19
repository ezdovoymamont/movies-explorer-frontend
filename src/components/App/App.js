import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

import "./App";
import Main from "../Main/Main";
import Login from "../UserProfile/Login/Login";
import Register from "../UserProfile/Register/Register";
import Profile from "../UserProfile/Profile/Profile";
import Error404 from "../Error404/Error404";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import {addMovie, authorize, checkToken, deleteMovie, getMovies, register, updateUser} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function App() {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [savedMoviesToShow, setSavedMoviesToShow] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [profileError, setProfileError] = useState('');
    const [currentUser, setCurrentUser] = useState({
        loggedIn: false,
        name: '',
        email: '',
        _id: '',
    });

    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchSubmit = (keyword, isShortFilms) => {
        if (location.pathname === '/movies') {
            moviesApi.getAllMovies()
                .then((movies) => {
                    setIsLoading(true);
                    let filteredMovies =
                        movies.filter((movie) => movie.nameRU.toUpperCase().includes(keyword.toUpperCase()));
                    if(isShortFilms){
                        filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
                    }
                    setMovies(filteredMovies);
                    localStorage.setItem('filteredMovies', filteredMovies);
                    localStorage.setItem('shortFilms', isShortFilms);
                    localStorage.setItem('keyword', keyword)

                    setTimeout(() => setIsLoading(false), 500);
                });
        }
        if (location.pathname === '/saved-movies') {
            setSavedMoviesToShow(savedMovies.filter(
                (m) => m.nameRU.toUpperCase().includes(keyword.toUpperCase())));
        }
    };

    const handleSaveSummit = (id) => {
        const isSaved = savedMovies.some(m => m.movieId === id);
        if (isSaved) {
            const _id = savedMovies.find((m) => m.movieId === id)._id;
            deleteMovie(_id)
                .then((data) => {
                    setSavedMovies(savedMovies.filter((m) => m.movieId !== id));
                    setSavedMoviesToShow(savedMoviesToShow.filter((m) => m.movieId !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            addMovie(movies.find(m => m.id === id))
                .then((data) => {
                    setSavedMovies([data.data, ...savedMovies]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const onRegister = (name, email, password) => {
        register(name, email, password)
            .then((user) => {
                if (user) {
                    onLogin(email, password);
                }
                setRegisterError('');
            })
            .catch((err) => {
                if (err.includes(409)) {
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
                    checkToken(res.jwt)
                        .then((res) => {
                            setCurrentUser({
                                loggedIn: true,
                                name: res.data.name,
                                email: res.data.email,
                                _id: res.data._id,
                            });
                            setLoginError('');
                        })
                        .then(() => {
                            navigate('/movies');
                            setLoginError('');
                        })
                        .catch((err) => {
                            if (err.includes(404)) {
                                setLoginError('Вы ввели неправильный логин или пароль.');
                                return;
                            }
                            setLoginError('Ошибка логина');
                        });
                }
            })
            .catch((err) => {
                if (err.includes(404)) {
                    setLoginError('Вы ввели неправильный логин или пароль.');
                    return;
                }
                setLoginError('Ошибка логина');
            });
    };

    const onUpdateUser = (name, email) => {
        console.log(name)
        updateUser(name, email)
            .then((res) => {
                setCurrentUser({
                    loggedIn: true,
                    name: res.data.name,
                    email: res.data.email,
                    _id: res.data._id,
                });
                setProfileError('Данные успешно обновлены');
            })
            .catch((err) => {
                if (err.includes(404)) {
                    setProfileError('Вы ввели неправильный логин или пароль.');
                    return;
                }
                setProfileError('Ошибка логина');
            });
    }

    const handleLogout = () => {
        setCurrentUser({
            loggedIn: false,
            name: '',
            email: '',
            _id: '',
        });
        localStorage.setItem('filteredMovies', '');
        localStorage.setItem('shortFilms', false);
        localStorage.setItem('keyword', '')
        navigate('/');
    }

    useEffect(() => {
        getMovies()
            .then(movies => {
                setSavedMovies(movies);
                setSavedMoviesToShow(movies)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [location])



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<Main/>}
                    />

                    <Route
                        path="/sign-in"
                        element={
                            <ProtectedRoute loggedIn={!currentUser.loggedIn}>
                                <Login
                                    onLogin={onLogin}
                                    loginError={loginError}/>
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/sign-up"
                        element={
                            <ProtectedRoute loggedIn={!currentUser.loggedIn}>
                                <Register
                                    onRegister={onRegister}
                                    registerError={registerError}/>
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute loggedIn={currentUser.loggedIn}>
                                <Profile
                                    onUpdateUser={onUpdateUser}
                                    handleLogout={handleLogout}
                                    profileError={profileError}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <>
                                <Error404/>
                            </>
                        }
                    />

                    <Route
                        path="/movies"
                        element={
                            <ProtectedRoute loggedIn={currentUser.loggedIn}>
                                <MoviesCardList
                                    handleSearchSubmit={handleSearchSubmit}
                                    movies={movies}
                                    savedMovies={savedMovies}
                                    isLoading={isLoading}
                                    handleSaveSummit={handleSaveSummit}
                                    isSavedMovies={false}
                                />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/saved-movies"
                        element={
                            <ProtectedRoute loggedIn={currentUser.loggedIn}>
                                <MoviesCardList
                                    handleSearchSubmit={handleSearchSubmit}
                                    movies={movies}
                                    savedMovies={savedMovies}
                                    isLoading={false}
                                    isSavedMovies={true}
                                    handleSaveSummit={handleSaveSummit}
                                    savedMoviesToShow={savedMoviesToShow}
                                />
                            </ProtectedRoute>
                        }
                    />
                </Routes>

            </div>
        </CurrentUserContext.Provider>

    );
}

export default App;
