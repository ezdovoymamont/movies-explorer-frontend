import "./FilterCheckbox.css";

function FilterCheckbox() {

  return (
    <div className="filterCheckbox filterCheckbox__container">
      <input
          type="checkbox"
          className="checkbox"
          name="filterCheckbox"
          defaultValue="yes"
        />
      <label for="checkbox"></label>
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
