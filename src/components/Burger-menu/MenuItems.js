import React, { useState } from "react";
import "./MenuItems.css";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="menu-items">
        <Link className="link" to="/home" onClick={handleClick}>
          Home
        </Link>
        <Link className="link" to="/favourites" onClick={handleClick}>
          Favourites
        </Link>
      </div>
    )
  );
};

export default MenuItems;
