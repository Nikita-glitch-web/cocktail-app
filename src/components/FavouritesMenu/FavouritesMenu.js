import React from "react";
import style from "./FavouriteMenu.module.css";
import { Link } from "react-router-dom";

export const FavouritesMenu = () => {
  return (
    <div className={style.link_style}>
      <Link to={`/favourites`} className={style.link} title="favsLink">
        Favorites
      </Link>
    </div>
  );
};
