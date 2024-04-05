import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SearchForm } from "../SearchForm/SearchForm";
import style from "./SearchPage.module.css";
import { ProductCard } from '../ProductCard';
export const SearchPage = (index) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
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
      console.log(data);
      setItems(data.drinks);
    } catch (e) {
      console.error(e);
      alert("ERRRO");
    }
  };

  useEffect(() => {
    console.log("RENDERD", searchParams.get("q"));
    const queryParamsValue = searchParams.get("q");
    // тут виклик нової функціїї з фетч
    if (queryParamsValue) {
      setInputValue(queryParamsValue);
      makeSearchRequest(queryParamsValue);
    }
  }, [searchParams]);

  const submitHandler = (value) => {
    console.log(value);
    setSearchParams({ q: value });
  };

  return (
    <div className={style.search_page_box}>
      <h1 className={style.search_page_title}>
        Create your <br></br>perfect cocktail!
      </h1>
      <div className={style.form_wrapper}>
        <SearchForm defaultValue={inputValue} onSubmit={submitHandler} />
      </div>
      <div className={style.search_page_form_wrapper}>
        {items.map((item) => {
         
          console.log(item);
          return (
            <ProductCard product={item}/>
          );
        })}
      </div>
    </div>
  );
};
