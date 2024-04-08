import style from "./Popular-Ingredients.module.css";
import img from "../../images/Rum.png";
import { Link } from "react-router-dom";

export const PopularIngredient3 = () => {
  return (
    <Link className={style.link} to={`/search?q=rum`}>
      <div className={style.ingredient}>
        <div className={style.ingredient_content}>
          <img className={style.img} src={img} alt="" />
          <h1 className={style.ingredient_title}>Rum</h1>
        </div>
      </div>
    </Link>
  );
};
