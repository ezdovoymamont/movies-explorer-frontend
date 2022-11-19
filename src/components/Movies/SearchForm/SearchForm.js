import Checkbox from "../FilterCheckbox/FilterCheckbox"
import "./SearchForm.css";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function SearchForm({
                        onSubmit
                    }) {

    const [error, setError] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const location = useLocation();
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        if (location.pathname === '/movies') {
            setKeyword(localStorage.getItem('keyword'));
            setChecked(localStorage.getItem('shortFilms'));
        }
    }, [location]);

    const handleInputChange = (evt) => {
        setKeyword(evt.target.value);
        setIsFormValid(evt.target.closest('form').checkValidity());
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        setIsFormValid(evt.target.closest('form').checkValidity());
        if (!isFormValid) {
            return setError('Нужно ввести ключевое слово');
        }
        onSubmit(keyword, checked);
    }

    const handleChecked = (evt) => {
        setChecked(evt.target.checked);
        if(keyword){
            onSubmit(keyword, evt.target.checked);
        }
    };

    return (<section className="searchForm searchForm__page">
        <div className="searchForm__container">
            <form
                action="#"
                className="searchForm__form"
                noValidate
                onSubmit={handleFormSubmit}
            >
                <input
                    type="text"
                    className="searchForm__input"
                    placeholder="Фильм"
                    required
                    minLength="3"
                    maxLength="30"
                    onChange={handleInputChange}
                    value={keyword}
                />
                <button type="submit" className="searchForm__button"></button>
                <span className="searchForm__error">{!isFormValid && error}</span>
            </form>
            <Checkbox
                handleChecked={handleChecked}
                checked={checked}
            ></Checkbox>
        </div>
    </section>);
}

export default SearchForm;
