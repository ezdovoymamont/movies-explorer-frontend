import Checkbox from "../FilterCheckbox/FilterCheckbox"
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="searchForm searchForm__page">
        <div className="searchForm__container">
        <form
          action="#"
          noValidate
          className="searchForm__form"
        >
          <input
            type="text"
            className="searchForm__input"
            placeholder="Фильм"
            required
            minLength="3"
            maxLength="30"
          />
          <button type="submit" className="searchForm__button"></button>
          <span className="searchForm__error"></span>
        </form>
        <Checkbox />
      </div>  
    </section>
  );
}

export default SearchForm;
