import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchForm } from "../SearchForm/SearchForm";
import style from "./SearchPage.module.css";
import { ProductCard } from "../ProductCard";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useNavigate } from "react-router-dom";

export const SearchPage = (index) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  console.log(items);

  const makeSearchRequest = async (inputValue) => {
    try {
      const request = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
       if (!data?.drinks?.length) {
         navigate("/404");
         return;
       }
      console.log(data);
      setItems(data.drinks);
    } catch (e) {
      console.error(e);
    }
  };

  const searchByIngredient = async (inputValue) => {
    try {
      const request = await fetch(
        `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
      if (!data?.drinks?.length) {
        navigate("/404");
        return;
      }
      console.log(data);
      setItems(data.drinks);
    } catch (e) {
      console.error(e);
      navigate("/400");
      return
    }
  };

  useEffect(() => {
    console.log("RENDERD", searchParams.get("q"));
    const queryParamsValue = searchParams.get("q");
    const category = searchParams.get("c");
    console.log(category);
    // тут виклик нової функціїї з фетч
    searchByIngredient();
    if (queryParamsValue) {
      // call search by ingredients
      setInputValue(queryParamsValue);
      makeSearchRequest(queryParamsValue);
    } else if (category) {
      console.log(">>>>>>>>.", category);
    }
  }, [searchParams]);

  const submitHandler = (value) => {
    console.log(value);
    setSearchParams({ q: value });
  };

  return (
    <div className={style.search_page_box}>
      <h1 className={style.search_page_title}>Find your perfect cocktail!</h1>
      <div className={style.form_wrapper}>
        <SearchForm defaultValue={inputValue} onSubmit={submitHandler} />
      </div>
      <div className={style.search_page_form_wrapper}>
        {items.map((item) => {
          console.log(item);
          <div className={style.ingredient_box}></div>;
          return <ProductCard product={item} />;
        })}
      </div>
    </div>
  );
};
