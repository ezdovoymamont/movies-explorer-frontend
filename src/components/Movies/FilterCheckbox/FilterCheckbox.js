import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";
import React, {useEffect, useState} from "react";

function FilterCheckbox({handleChecked}) {
    const [checked, setChecked] = useState(false);
    const [checkedSave, setCheckedSave] = useState(false);
    const filterCheckbox = React.useRef();
    const location = useLocation();

    const onChange = (evt) => {
        location.pathname === '/movies' ? setChecked(!checked) : setCheckedSave(!checkedSave);

        handleChecked(evt.target.checked);
    }

    useEffect(() => {
        if(location.pathname === '/movies'){
            setChecked(localStorage.getItem('shortFilms') === 'true')
        } else {
            setCheckedSave(localStorage.getItem('shortFilmsSaved') === 'true')
        }
    }, [location]);

    return (
        <div className="filterCheckbox filterCheckbox__container">
            <input
                type={'checkbox'}
                className="checkbox"
                name="filterCheckbox"
                ref={filterCheckbox}
                checked={location.pathname === '/movies' ?  checked : checkedSave}
                onChange={onChange}
            />
            <label htmlFor="checkbox"></label>
            <p className="filterCheckbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
