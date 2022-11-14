import React, { Profiler } from "react";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App";
import Main from "../Main/Main";
import Login from "../UserProfile/Login/Login";
import Register from "../UserProfile/Register/Register";
import Profile from "../UserProfile/Profile/Profile";
import Error404 from "../Error404/Error404";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {

    return(
        <CurrentUserContext.Provider>
        <div>
          <Routes>
            <Route
              path="/"
              element={ <Main /> }
            />

            <Route
              path="/sign-in"
              element={
                <>
                  <Login />
                </>
              }
            />

            <Route
              path="/sign-up"
              element={
                <>
                  <Register />
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Profile />
                </>
              }
            />
            <Route
              path="/404"
              element={
                <>
                  <Error404 />
                </>
              }
            />

            <Route
              path="/movies"
              element={
                <>
                  <MoviesCardList />
                </>
              }
            />

            <Route
              path="/saved-movies" // todo rename
              element={
                <>
                  <SavedMovies />
                </>
              }
            />

            <Route path="/" element={<></>} />
          </Routes>

        </div>
      </CurrentUserContext.Provider>

    );
}

export default App;