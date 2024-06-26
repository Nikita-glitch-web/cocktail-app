import React from "react";
import style from "./Errors.module.css";

export const ServerErrorPage = () => {
  return (
    <div className={style.error_wrapper}>
      <h1 className={style.error_text}>
        Sorry our server is broken...
      </h1>
    </div>
  );
};

export default ServerErrorPage;
