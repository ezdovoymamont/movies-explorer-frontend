class MoviesApi {
    constructor({ url }) {
        this._url = url;
    }

    getAllMovies() {
        return fetch(`${this._url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => this.checkError(res));
    }

    checkError(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
}

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;

