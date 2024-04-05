import React, { useEffect } from "react";
import style from "./SearchForm.module.css";

export const SearchForm = ({ defaultValue, onSubmit }) => {
  const [inputValue, setInputValue] = React.useState();

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputValue}
        type="text"
        placeholder="Enter ingredient"
        // className={style.search_bar_input}
        onChange={changeHandler}
        className={style.search_form}
      />
    </form>
  );
};
