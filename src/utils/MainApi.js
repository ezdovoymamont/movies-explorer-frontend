import {BASE_URL, MOVIE_API_PATH} from "./constants";

const checkError = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            name: name, email: email, password: password,
        }),
    })
        .then(checkError);
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            email: email, password: password,
        }),
    })
        .then(checkError);
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET', headers: {
            'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,
        }
    })
        .then(checkError);
};

export const updateUser = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH', headers: {
            'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }, body: JSON.stringify({
            name: name, email: email,
        }),
    })
        .then(checkError);
}

export const addMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST", headers: {
            'Content-Type': 'application/json', "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        }, body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: MOVIE_API_PATH + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: MOVIE_API_PATH + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        })
    }).then(checkError);
};

export const deleteMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE', headers: {
            'Content-type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
    }).then(checkError);
}

export const getMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        headers: {
            'Content-type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
    }).then(checkError);
}
