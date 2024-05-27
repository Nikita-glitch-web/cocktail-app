import React, { useState } from "react";
import style from "../DetailsPage.module.css";
import image from "../123.jpg"

export const Ingredient = ({ title, measure }) => {
  console.log(title);

  const ingredientTitleArray = title?.split(" ");
  console.log(ingredientTitleArray);
  const thumbnailUrl = `https://www.thecocktaildb.com/images/ingredients/${
    ingredientTitleArray ? (
      ingredientTitleArray[0]
    ) : (  <img src={image} alt=""/>  )
  }-Medium.png`;
  console.log(thumbnailUrl);

  return (
    <div className={style.ingredient_wrapper}>
      <div>
        <img
          className={style.ingredient_img}
          alt=""
          src={thumbnailUrl}
          onError={() => {
            console.log("IMAGE NOT LOADED");
          }}
        />
      </div>
      <div className={style.ingredients_text_wrapper}>
        <p className={style.ingredient_text}>
          {measure}
          {title}
        </p>
      </div>
    </div>
  );
};
