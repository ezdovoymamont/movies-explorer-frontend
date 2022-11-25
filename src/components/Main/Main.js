import Header from "../Header/Header"
import Promo from "../Main/Promo/Promo"
import AboutProject from "./AboutProject/AboutProject"
import Techs from "../Main/Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import Footer from "../Footer/Footer"

import "./Main.css"
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import React from "react";
import HeaderFilms from "../Header/HeaderFilms/HeaderFilms";

function Main() {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <>
            {currentUser.loggedIn
                ? (<HeaderFilms/>)
                : (<Header/>)
            }

            <main>
                <Promo/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
            <Footer/>
        </>
    );
}

export default Main;
