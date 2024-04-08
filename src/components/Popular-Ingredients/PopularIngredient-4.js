import style from "./Popular-Ingredients.module.css";
import img from "../../images/Tequila.png";
import { Link } from "react-router-dom";

export const PopularIngredient4 = () => {
  return (
    <Link className={style.link} to={`/search?q=tequila`}>
      <div className={style.ingredient}>
        <div className={style.ingredient_content}>
          <img className={style.img} src={img} alt="" />
          <h1 className={style.ingredient_title}>Tequila</h1>
        </div>
      </div>
    </Link>
  );
};
