import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { ProductCard } from "../ProductCard";
import { PopularIngredients } from "../Popular-Ingredients/PopularIngredients";
import { RandomIngredients } from "../Random-Ingredients/Random-Ingredients";

export const HomePage = () => {
  const [randomCoctails, setRandomCoctails] = useState([]);
  const navigate = useNavigate();
  const randomCocktail = useState([]);

  const submitHandler = (value) => {
    console.log(value);
    navigate(`/search?q=${value}`);
  };

  const makeRandomRequest = async () => {
    try {
      const request = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
      if (data.drinks?.length > 0) {
        return data.drinks;
      }
    } catch (e) {
      console.error(e);
      alert("ERRRO");
    }
  };

  const fetchRandomCoctails = async () => {
    let coctailsToSet = [];
    for (let i = 0; i < 4; i++) {
      const coctails = await makeRandomRequest();
      console.log(coctails);
      coctailsToSet = [...coctailsToSet, ...coctails];
    }

    console.log(coctailsToSet);
    setRandomCoctails(coctailsToSet);
  };
  window.randomCocktail = randomCocktail;
  useEffect(() => {
    fetchRandomCoctails();
  }, []);

  return (
    <div className={style.search_bar_container}>
      <h1 className={style.search_page_title}>Find your perfect cocktail!</h1>
      <SearchForm onSubmit={submitHandler} />
      <div className={style.drink_of_day_wrapper}>
        <p className={style.home_title}>Drinks of the day!</p>
        <div className={style.row}>
          {randomCoctails.map((item) => {
            console.log(item);
            return <ProductCard product={item} />;
          })}
        </div>
      </div>
      <div className={style.populars_wrapper}>
        <PopularIngredients />
      </div>
    </div>
  );
};

