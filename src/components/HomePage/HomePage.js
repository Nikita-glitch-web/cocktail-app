import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { SearchForm } from "../SearchForm/SearchForm";
import { FavouritesBtn } from "../FavouritesBtn/FavouritesBtn"; 

const HomePage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // const mealRequest = () => {
  //   return `www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  // };
  // mealRequest();

  const submitHandler = (value) => {
    console.log(value);
    navigate(`/search?q=${value}`);
  };

  //   const SubmitFormChange = () => {
  //     console.log(
  //         "Form is submitted"
  //     )
  //   }

  console.log(items);

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
    makeRandomRequest();
    console.log('UseEffect for RandomRequest');
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
          <div className={style.details_content_greed}>
            <Link
              className={style.link}
              to={`/details/${item.idDrink}`}
              title={item.idDrink}
            >
              <div className={style.details_content_item}>
                <FavouritesBtn />
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
                    <div className={style.sub_text_row}>
                      <p className={style.sub_text}>{item.strIngredient1}</p>
                      <p className={style.sub_text}>{item.strMeasure1}</p>
                    </div>
                    <div className={style.sub_text_row}>
                      <p className={style.sub_text}>{item.strIngredient2}</p>
                      <p className={style.sub_text}>{item.strMeasure2}</p>
                    </div>
                    <div className={style.sub_text_row}>
                      <p className={style.sub_text}>{item.strIngredient3}</p>
                      <p className={style.sub_text}>{item.strMeasure3}</p>
                    </div>
                    <div className={style.sub_text_row}>
                      <p className={style.sub_text}>{item.strIngredient4}</p>
                      <p className={style.sub_text}>{item.strMeasure4}</p>
                    </div>
                    <div className={style.sub_text_row}>
                      <p className={style.sub_text}>{item.strIngredient5}</p>
                      <p className={style.sub_text}>{item.strMeasure5}</p>
                    </div>
                    <div className={style.sub_text_row}>
                      <p className={style.sub_text}>{item.strIngredient5}</p>
                      <p className={style.sub_text}>{item.strMeasure5}</p>
                    </div>
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

export const Home = () => HomePage();
