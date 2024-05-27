import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Categories.module.css";

export const CategoriesPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

    
  const makeCategoriesRequest = async (categories) => {
    try {
      const request = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${categories}`,
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
    console.log(category);
    makeCategoriesRequest();
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
        <p className={style.title}>
            Categories page is working
        </p>
    </div>
  )
};

// api = "www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
