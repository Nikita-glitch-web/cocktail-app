import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";
import { FavouritesPage } from "./components/FavouritesPage/FavouritesPage";
import { Menu } from "./components/Menu/Menu";
import { PopularIngredients } from "./components/Popular-Ingredients/PopularIngredients";
import { Footer } from "./components/Footer/Footer";
import { CategoriesPage } from "./components/CategoriesPage/CategoriesPage";
import { AlcoholicPage } from "./components/AlcoholicPage/AlcoholicPage";
import BurgerMenu from "./components/Burger-menu/BurgerMenu";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ServerErrorPage from "./components/ErrorPage/ServerErrorPage";

function App() {
  return (
    <div className={style.content_wrapper}>
      <HashRouter path="/cocktail-app">
        <div className={style.menu_wrapper}>
          <BurgerMenu />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ingredient" element={<PopularIngredients />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/alcoholic" element={<AlcoholicPage />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/400" element={<ServerErrorPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

///dish-searcher/two
export default App;
