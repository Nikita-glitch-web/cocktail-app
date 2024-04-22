import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./DetailsPage.module.css";
import { Ingredient } from "./Details_Ingredients/Ingredient";
import { Instruction } from "./Details_Instruction/Instruction";

export const DetailsPage = () => {
  const [item, setDetails] = useState(undefined);
  const detail = useState([]);
  console.log(detail);

  if (useState() !== undefined) {
  }

  const params = useParams();
  console.log(params);
  const makeDetailsRequest = async () => {
    try {
      const request = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
      debugger;
      console.log(data);
      console.log(request);
      if (data.drinks) {
        setDetails(data.drinks[0]);
      }
    } catch (e) {
      console.error(e);
      alert("ERROR");
    }
  };

  useEffect(() => {
    makeDetailsRequest();
    console.log("Details request works");
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div >
      <div className={style.details_wrapper}>
        <div className={style.details_content}>
          <div className={style.details_big_img_box}>
            <h1 className={style.details_title}>{item.strDrink}</h1>
            <img
              alt=""
              className={style.details_big_img}
              src={item.strDrinkThumb}
            />
          </div>
          <div className={style.details_part}>
            <h1 className={style.ingredients_title}>Ingredients</h1>
            <div className={style.ingredient_content}>
              <Ingredient title={item.strIngredient1} />
              <Ingredient title={item.strIngredient2} />
              <Ingredient title={item.strIngredient3} />
              <Ingredient title={item.strIngredient4} />
              <Ingredient title={item.strIngredient5} />
              <Ingredient title={item.strIngredient6} />
              <Ingredient title={item.strIngredient7} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.instruction_wrapper}>
        <div className={style.instruction_content}>
          <h2 className={style.instruction_title}>Instructions</h2>
          <Instruction text={item.strInstructions} />
        </div>
      </div>
    </div>
  );
};
