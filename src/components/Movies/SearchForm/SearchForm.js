import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import "./SearchForm.css";
import {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function SearchForm({
                        onSubmit
                    }) {

    const [error, setError] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const location = useLocation();
    const [checked, setChecked] = useState(false);
    const [checkedSaved, setCheckedSaved] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies') {
            setKeyword(localStorage.getItem('keyword'));
        }
    }, [location]);

    const handleInputChange = (evt) => {
        setKeyword(evt.target.value);
        setIsFormValid(evt.target.closest('form').checkValidity() && evt.target.value.trim().length > 0);
    }

    const handleFormSubmit = (evt) => {
        const keywordTrim = keyword.trim();
        evt.preventDefault();
        setIsFormValid(evt.target.closest('form').checkValidity());
        if (!isFormValid) {
            return setError('Нужно ввести ключевое слово');
        }
        if(location.pathname === '/movies') {
            onSubmit(keywordTrim, checked);
        } else {
            onSubmit(keywordTrim, checkedSaved);
        }
    }

    const handleChecked = (isShort) => {
        if(location.pathname === '/movies'){
            setChecked(isShort);
        } else {
            setCheckedSaved(isShort);
        }
        if(keyword){
            onSubmit(keyword, isShort);
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
                    minLength="1"
                    maxLength="30"
                    onChange={handleInputChange}
                    value={keyword}
                />
                <button type="submit" className="searchForm__button"></button>
                <span className="searchForm__error">{!isFormValid && error}</span>
            </form>
            <FilterCheckbox
                handleChecked={handleChecked}
            ></FilterCheckbox>
        </div>
    </section>);
}

export default SearchForm;
