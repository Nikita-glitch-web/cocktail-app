import React, { useState, useEffect } from "react";
import style from "./FavouritesPage.module.css";
import { Link } from "react-router-dom";
import { DeleteBtn } from "../DeleteBtn/DeleteBtn";

export const FavouritesPage = () => {
  const [items, setItems] = useState([]);

  const dataReader = async (e) => {
    const existingsId = localStorage.getItem("favourite-Drink"); // считав с ЛокалСторедж
    const drinkIds = existingsId ? JSON.parse(existingsId) : [];
    let itemsToSet = [];
    for (let item of drinkIds) {
      try {
        console.log("Send request");
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item}`
        );
        if (response.status !== 200) {
          throw Error("Wrong status");
        }
        const { drinks } = await response.json();
        if (drinks.length === 0) {
          return;
        }
        console.log(items);
        itemsToSet = [...itemsToSet, drinks[0]];
      } catch (e) {
        alert(e);
      }
    }
    console.log(itemsToSet);
    setItems(itemsToSet);
  };

  useEffect(() => {
    console.log("UseEffect works");
    dataReader();
    console.log("useEffect for empty array")
  }, []);

  const removeItem = (id) => {
    const existingsId = localStorage.getItem("favourite-Drink"); // считав с ЛокалСторедж
    const drinkIds = existingsId ? JSON.parse(existingsId) : [];
    console.log(id);

    const newArr = drinkIds.filter((item) => {
      return item !== id;
    });

    console.log(newArr);

    localStorage.setItem("favourite-Drink", JSON.stringify(newArr));

    const newItems = items.filter((item) => {
      console.log(item.idDrink);
      return item.idDrink !== id;
    });

    setItems(newItems);
    console.log(newItems);
  };

  return (
    <div className={style.search_page_form_wrapper}>
      {items.map((item) => {
        console.log(item);
        return (
          <div className={style.details_content_greed}>
            <DeleteBtn
            className={style.delete_btn}
              onClick={(e) => {
                e.stopPropagation();
                removeItem(item.idDrink);
              }}
            />
            <Link
              className={style.link}
              to={`/details/${item.idDrink}`}
              title={item.idDrink}
            >
              <div className={style.details_content_item}>
                <div className={style.drink_img_wrapper}>
                  <img
                    alt=""
                    src={item.strDrinkThumb}
                    className={style.meal_img}
                  />
                </div>
                <h1 className={style.cocktail_title}>{item.strDrink}</h1>
                <div className={style.ingredients_column}>
                  <p className={style.main_text}>{item.strInstructions}</p>
                  <div className={style.subtext_column}>
                    <p className={style.sub_text}>{item.strIngredient1}</p>
                    <p className={style.sub_text}>{item.strIngredient2}</p>
                    <p className={style.sub_text}>{item.strIngredient3}</p>
                    <p className={style.sub_text}>{item.strIngredient4}</p>
                    <p className={style.sub_text}>{item.strIngredient5}</p>
                    <p className={style.sub_text}>{item.strIngredient6}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
