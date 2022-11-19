import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

function FilterCheckbox({handleChecked, checked, checkedSave}) {
    const location = useLocation();
    const val = location.pathname === '/movies' ? checked : checkedSave;
    return (
        <div className="filterCheckbox filterCheckbox__container">
            <input
                type="checkbox"
                className="checkbox"
                name="filterCheckbox"
                checked={val}
                onChange={handleChecked}
            />
            <label htmlFor="checkbox"></label>
            <p className="filterCheckbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
