import React, { useEffect, useState } from "react";
import style from "./Random-Ingredients.module.css";

export const RandomIngredients = () => {
    const [randomIngredients, setRandomIngredients] = useState([]);
    const RandomIngredient = useState([]);


     const makeRandomIngredientRequest = async () => {
          try {
            const request = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
              {
                method: "GET",
              }
            );
            const data = await request.json();
            if (data.drinks?.length > 0) {
              return data.drinks;
            }
          } catch (e) {
            console.error(e);
            alert("ERRRO");
          }
     };
  const fetchRandomIngredient = async () => {
    let ingredientToSet = [];
    for (let i = 0; i < 4; i++) {
      const ingredients = await makeRandomIngredientRequest();
      console.log(ingredients);
      ingredientToSet = [...ingredientToSet, ...ingredients];
    }
    console.log(ingredientToSet);
    setRandomIngredients(ingredientToSet);
  };
  window.randomCocktail = RandomIngredient;
  useEffect(() => {
    fetchRandomIngredient();
  }, []);
  

    

     return (
       <div className={style.random_ingredients_box}>
         {randomIngredients.map((item) => {
          return (
            <div>
              <div className={style.random_ingredients_content}>
                <img
                  alt=""
                  src={item.strDrinkThumb}
                  className={style.meal_img}
                />
                <h1 className={style.random_ingredient_title}>
                  {item.strIngredient1}
                </h1>
              </div>
              ;
            </div>
          );   
         })}
       </div>
     );
}