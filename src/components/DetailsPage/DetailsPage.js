import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./DetailsPage.module.css";
import { Ingredient } from "./Details_Ingredients/Ingredient";
import { Instruction } from "./Details_Instruction/Instruction";
import { CategoriesPage } from "../CategoriesPage/CategoriesPage";

const getVluesByKeys = (obj, initialKey) => {
  const result = [];
  for (let i = 1; i <= 15; i++) {
    const key = initialKey + i;
    if (!!obj[key]) {
      result.push(obj[key]);
    }
  }

  return result;
};

export const DetailsPage = () => {
  const [item, setDetails] = useState(undefined);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const detail = useState([]);
  console.log(detail);

  if (useState() !== undefined) {
  }

  const params = useParams();
  console.log(params);
  const makeSearchByIngredientRequest = async () => {
    try {
      const request = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
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
    makeSearchByIngredientRequest();
    console.log("Details request works");
  }, []);

  useEffect(() => {
    if (!item) {
      return;
    }
    const ingr = getVluesByKeys(item, "strIngredient");
    const meas = getVluesByKeys(item, "strMeasure");

    setIngredients(ingr);
    setMeasures(meas);
  }, [item]);

  if (!item) {
    return <div>Loading...</div>;
  }

  console.log(ingredients, measures);

  return (
    <div>
      <div className={style.details_wrapper}>
        <div className={style.details_content}>
          <div className={style.details_big_img_box}>
            <h1 className={style.details_title}>{item.strDrink}</h1>
            <img
              alt=""
              className={style.details_big_img}
              src={item.strDrinkThumb}
            />
            <div className={style.categories_wrapper}>
              <Link to={`/categories?c=alcoholic`}>
                <p className={style.categories_text}>{item.strAlcoholic}</p>
              </Link>
              <Link to={`/categories?c=category`}>
                <p className={style.categories_text}>{item.strCategory}</p>
              </Link>
            </div>
          </div>
          <div className={style.details_part}>
            <h1 className={style.ingredients_title}>Ingredients</h1>
            <div className={style.ingredient_content}>
              {ingredients.map((ingredient, i) => {
                return (
                  <Link className={style.link} to={`/search?q=${ingredient}`}>
                    <Ingredient title={ingredient} measure={measures[i]} />
                  </Link>
                );
              })}
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
