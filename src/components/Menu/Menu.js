import React, { useState } from "react";
import style from "./FavouriteMenu.module.css";

import { Link } from "react-router-dom";

export  const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div className={style.menu_icon} onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
        <nav className={`menu ${isOpen ? "show" : ""}`}>
          <Link to={"/home"}>
           Home
          </Link>
          <Link to={"/favourites"}>
            Favourites
          </Link>
        </nav>
      </div>
    );
  };