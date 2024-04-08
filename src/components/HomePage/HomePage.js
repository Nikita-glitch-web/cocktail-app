import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { ProductCard } from "../ProductCard";
import { PopularIngredients } from "../Popular-Ingredients/PopularIngredients";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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
      console.log(data);
      setItems(data.drinks);
    } catch (e) {
      console.error(e);
      alert("ERRRO");
    }
  };


  useEffect(() => {
  for (let i = 0; i < 4; i++) {
    makeRandomRequest();
    const randomCocktails = [];
    randomCocktails[i] ++;
    // randomCocktails
    console.log(randomCocktails)
  }
  }, []);

  return (
    <div className={style.search_bar_container}>
      <h1 className={style.search_page_title}>
        Create your <br></br>perfect cocktail!
      </h1>
      <SearchForm onSubmit={submitHandler} />
      {items.map((item) => {
        console.log(item);
        return (
          <div className={style.drink_of_day_wrapper}>
            <p className={style.home_title}>Drink of the day!</p>
            <ProductCard product={item} />
          </div>
        );
      })}
      <div className={style.populars_wrapper}>
        <PopularIngredients />
      </div>
    </div>
  );
};

export const Home = () => HomePage();
