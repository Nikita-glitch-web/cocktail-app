// src/components/BurgerMenu.js
import React, { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import MenuItems from "./MenuItems";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <BurgerIcon toggleMenu={toggleMenu} isOpen={isOpen} />
      {isOpen && <MenuItems />}
    </div>
  );
};

export default BurgerMenu;
