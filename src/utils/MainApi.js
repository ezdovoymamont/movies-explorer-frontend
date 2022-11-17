
const BASE_URL = 'https://api.garry.students.nomoredomains.icu';
const MOVIE_API_PATH_FOR_THUMBNAIL = 'https://api.nomoreparties.co/'; //todo move to const

const checkError = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    })
        .then(checkError);
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then(checkError);
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(checkError);
};

export const addMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: MOVIE_API_PATH_FOR_THUMBNAIL + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: MOVIE_API_PATH_FOR_THUMBNAIL + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        })
    }).then(checkError);
};
