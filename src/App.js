import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";
import { FavouritesPage } from "./components/FavouritesPage/FavouritesPage";
import { FavouritesMenu } from "./components/FavouritesMenu/FavouritesMenu";
import { PopularIngredients } from "./components/Popular-Ingredients/PopularIngredients"; 
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className={style.content_wrapper}>
      <BrowserRouter>
        <FavouritesMenu />
        <Routes>
          <Route path="/ingredient" element={<PopularIngredients />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

///dish-searcher/two
export default App;
