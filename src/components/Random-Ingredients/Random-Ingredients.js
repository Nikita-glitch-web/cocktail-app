import React, { useEffect, useState } from "react";
import style from "./Random-Ingredients.module.css";

export const RandomIngredient = ({ product }) => {
    const [items, setItems] = useState([]);


     const makeRandomRequest = async () => {
       try {
         const request = await fetch(
           `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
           {
             method: "GET",
           }
         );
         const data = await request.json();
         console.log(data);
         setItems(data.drinks);
       } catch (e) {
         console.error(e);
         alert("ERRRO");
       }
     };

     useEffect(() => {
       for (let i = 0; i < 4; i++) {
         makeRandomRequest();
         const randomCocktails = [];
         randomCocktails[i]++;
         // randomCocktails
         console.log(randomCocktails);
       }
     }, []);

     return (
       <div className={style.random_ingredients_box}>
         <div className={style.random_ingredients_content}>
           <img alt="" src={product.strDrinkThumb} className={style.meal_img} />
           <h1 className={style.random_ingredient_title}>
             {product.strIngredient1}
           </h1>
         </div>
       </div>
     );
}