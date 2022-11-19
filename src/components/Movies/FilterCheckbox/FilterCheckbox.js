import "./FilterCheckbox.css";

function FilterCheckbox({checked, handleChecked}) {
    return (
        <div className="filterCheckbox filterCheckbox__container">
            <input
                type="checkbox"
                className="checkbox"
                name="filterCheckbox"
                defaultValue="yes"
                checked={checked}
                onChange={handleChecked}
            />
            <label htmlFor="checkbox"></label>
            <p className="filterCheckbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
