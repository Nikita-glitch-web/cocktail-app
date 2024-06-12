// src/components/MenuItems.js
import React from "react";
import "./MenuItems.css";
import { Link } from "react-router-dom"
 
const MenuItems = () => {
  return (
    <div className="menu-items">
      <Link className="link" to={`/home`}>
        Home
      </Link>
      <Link className="link" to={`/favourites`}>
        Favourites
      </Link>
    </div>
  );
};

export default MenuItems;
