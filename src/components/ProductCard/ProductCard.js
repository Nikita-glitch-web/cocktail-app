import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./ProductCard.module.css";
import { LOCAL_STORAGE_KEY_FAVORITES } from '../../constants';
import { getItemsFromStorage } from '../../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faXmark} />;



export const ProductCard = ({ product, onRemove }) => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => {
    let exisitngIds = getItemsFromStorage();
    if (exisitngIds.includes(product.idDrink) === false) {
      exisitngIds.push(product.idDrink);
      setIsSelected(true);
    } else {
      exisitngIds = exisitngIds.filter((id) => id !== product.idDrink);
      if(onRemove) {
        onRemove(product.idDrink);
      }
      setIsSelected(false);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY_FAVORITES, JSON.stringify(exisitngIds));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getIsSelected = () => {
    let exisitngIds = getItemsFromStorage();
    return exisitngIds.includes(product.idDrink);
  };

  useEffect(() => {
    const isSelected = getIsSelected();
    setIsSelected(isSelected);
    console.log(isSelected);
  }, [getIsSelected]);

  return (
    <div className={style.details_content_greed}>
      <button className={`${style.favourites_btn}`} onClick={clickHandler}>
        {isSelected ? element  : "+"}
      </button>
      <Link
        className={style.link}
        to={`/details/${product.idDrink}`}
        title={product.idDrink}
      >
        <div className={style.details_content_item}>
          <div className={style.drink_img_wrapper}>
            <img
              alt=""
              src={product.strDrinkThumb}
              className={style.meal_img}
            />
          </div>
          <h1 className={style.cocktail_title}>{product.strDrink}</h1>
        </div>
      </Link>
    </div>
  );
};