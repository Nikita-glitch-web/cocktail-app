import React, { useState } from "react";
import style from "../DetailsPage.module.css";

export const Ingredient = ({ title }) => {
  console.log(title);

  // console.log(detail);
  // const params = useParams();
  // console.log(params);

  // const detailsRequest = async () => {
  //   try {
  //     const request = await fetch(
  //       `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?id=${params.id}`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await request.json();
  //     console.log(data);
  //     console.log(request);
  //     setDetails(data.drinks[0])
  //   } catch (e) {
  //     console.error(e);
  //     alert("ERROR");
  //   }
  // };

  // useEffect(() => {
  //   detailsRequest();
  //   console.log("Details request works");
  // }, []);

  return (
    <div className={style.ingredient_wrapper}>
      <p className={style.ingredient_text}>{title}</p>
    </div>
  );
};
