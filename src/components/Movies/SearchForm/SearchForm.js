import Checkbox from "../FilterCheckbox/FilterCheckbox"
import "./SearchForm.css";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function SearchForm({
    onCheckbox,
    checked,
    checkedSaveMovies,
    onSubmit,
    initKeyword}) {

    const [error, setError] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setKeyword(initKeyword);
    }, []);

    const handleInputChange = (evt) => {
        setKeyword(evt.target.value);
        setIsFormValid(evt.target.closest('form').checkValidity());
    }

    const handleFormSubmit = (evt) =>
    {
        evt.preventDefault();
        setIsFormValid(evt.target.closest('form').checkValidity());
        if (!isFormValid) {
            return setError('Нужно ввести ключевое слово');
        }
        onSubmit(keyword);
    }

  return (
    <section className="searchForm searchForm__page">
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
                onCheckbox={onCheckbox}
                checked={checked}
                checkedSaveMovies={checkedSaveMovies}
            ></Checkbox>
      </div>
    </section>
  );
}

export default SearchForm;
