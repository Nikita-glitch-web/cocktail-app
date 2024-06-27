import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./FavouritesPage.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { getItemsFromStorage } from "../../utils";
import { SearchForm } from "../SearchForm/SearchForm";

export const FavouritesPage = () => {
  const [items, setItems] = useState([]);

  const readData = async () => {
    const drinkIds = getItemsFromStorage();
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

    setItems(itemsToSet);
  };

  useEffect(() => {
    console.log("UseEffect works");
    readData();
    console.log("useEffect for empty array");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeItemFromStorage = (productId) => {
    const newItemsToSet = items.filter(({ idDrink }) => productId !== idDrink);
    setItems(newItemsToSet);
  };

  return (
    <div className={style.search_page_form_wrapper}>
      {items.length === 0 ? (
        <div className={style.empty_wrapper}>
          <p className={style.empty_text}>
            Your favorites is empty, let's find your dream cocktail
          </p>
          <Link to={`/home`} className={style.back_btn_link}>
            <button className={style.back_btn}>Back to home</button>
          </Link>
        </div>
      ) : (
        items.map((item) => {
          return (
            <ProductCard
              key={item.idDrink}
              product={item}
              onRemove={removeItemFromStorage}
            />
          );
        })
      )}
    </div>
  );
};
