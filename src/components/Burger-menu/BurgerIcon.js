// src/components/BurgerIcon.js
import React from "react";
import "./BurgerIcon.css";


const BurgerIcon = ({ toggleMenu, isOpen }) => {
  
  return (
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
      </div>
  );
};

export default BurgerIcon;
