import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./AlcoholicPage.module.css";
import { ProductCard } from "../ProductCard";

export const AlcoholicPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   *
   * @param {string} category
   */
  const makeCategoriesRequest = async (category) => {
    try {
      const request = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`,
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
      <p className={style.title}>Alcoholic page is working</p>
      <div className={style.card_wrapper}>
        {items.map((item) => {
          console.log(item);
          return <ProductCard product={item} />;
        })}
      </div>
    </div>
  );
};
