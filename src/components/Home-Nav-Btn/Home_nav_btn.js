import React from "react";
import style from "./Home-Nav-Btn.module.css";
import { Link } from "react-router-dom";

export const HomeMenu = () => {
  return (
    <div className={style.link_style}>
      <Link to={`/`} className={style.link} title="favsLink">
        Home
      </Link>
    </div>
  );
};
