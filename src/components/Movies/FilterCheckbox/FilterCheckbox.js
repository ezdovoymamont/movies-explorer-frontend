import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

function FilterCheckbox({onChecked}) {
    const [checked, setChecked] = useState(false);
    const location = useLocation;

    const handleChecked = (evt) => {
        setChecked(evt.target.checked);
        onChecked(evt.target.checked);
    }

    useEffect(() => {
        if (location.pathname === '/movies') {
            console.log("loc")
        }
    }, [location]);

    // useEffect(() => {
    //         console.log("loc")
    // }, [location])

    return (
        <div className="filterCheckbox filterCheckbox__container">
            <input
                type="checkbox"
                className="checkbox"
                name="filterCheckbox"
              
                checked={checked}
                onClick={handleChecked}
            />
            <label htmlFor="checkbox"></label>
            <p className="filterCheckbox__title">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
