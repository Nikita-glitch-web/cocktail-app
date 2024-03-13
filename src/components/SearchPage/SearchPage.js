import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SearchForm } from "../SearchForm/SearchForm";
import style from "./SearchPage.module.css";

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
            <div className={style.details_content_greed}>
              <Link className={style.link} to={`/details/${item.idDrink}`} title={item.idDrink}>
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
    </div>
  );
};
