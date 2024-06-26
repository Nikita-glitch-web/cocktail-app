import React from "react";
import style from "./Errors.module.css";


export const ErrorPage = () => {
  return (
    <div className={style.error_wrapper}>
      <h1 className={style.error_text}>Sorry ingredient not found, try another</h1>
    </div>
  );
};

export default ErrorPage;
