import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Categories.module.css";
import { SearchPage } from "../SearchPage/SearchPage";
import { ProductCard } from "../ProductCard";

export const CategoriesPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   *
   * @param {string} category
   */
  const makeCategoriesRequest = async (category) => {
    try {
      const request = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
      console.log(data);
      setItems(data.drinks);
    } catch (e) {
      console.error(e);
      alert("ERROR");
    }
  };

  useEffect(() => {
    const category = searchParams.get("c");
    console.log(">>>>>>", category);
    makeCategoriesRequest(category);
    if (category) {
      console.log("!!!", category);
    }
  }, [searchParams]);

  //   const submitHandler = (value) => {
  //     console.log(value);
  //     setSearchParams({ q: value });
  //   };
  return (
    <div>
      <div className={style.main_ingredient_wrapper}>
      </div>
      <div className={style.card_wrapper}>
        {items.map((item) => {
          console.log(item);
          return <ProductCard product={item} />;
        })}
      </div>
    </div>
  );
};

// api = "www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
