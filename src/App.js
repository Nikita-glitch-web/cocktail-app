import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";
import { FavouritesPage } from "./components/FavouritesPage/FavouritesPage";
import { FavouritesMenu } from "./components/FavouritesMenu/FavouritesMenu";
import { PopularIngredients } from "./components/Popular-Ingredients/PopularIngredients";
import { Footer } from "./components/Footer/Footer";
import { HomeMenu } from "./components/Home-Nav-Btn/Home_nav_btn";
import { CategoriesPage } from "./components/CategoriesPage/CategoriesPage";
import { AlcoholicPage } from "./components/AlcoholicPage/AlcoholicPage";

function App() {
  return (
    <div className={style.content_wrapper}>
      <BrowserRouter basename="/cocktail-app">
        <div className={style.menu_wrapper}>
          <HomeMenu />
          <FavouritesMenu />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ingredient" element={<PopularIngredients />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/alcoholic" element={<AlcoholicPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

///dish-searcher/two
export default App;
