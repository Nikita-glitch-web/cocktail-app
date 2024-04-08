import { PopularIngredient1 } from "./PopularIngredient-1"
import { PopularIngredient2 } from "./PopularIngredient-2"
import { PopularIngredient3 } from "./PopularIngredient-3"
import { PopularIngredient4 } from "./PopularIngredient-4";
import style from "./Popular-Ingredients.module.css";


export const PopularIngredients = () => {
    return (
      <div className={style.ingredients_wrapper}>
        <PopularIngredient1 />
        <PopularIngredient2 />
        <PopularIngredient3 />
        <PopularIngredient4 />
      </div>
    );
    
}
