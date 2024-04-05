import React from "react";
import style from "./DeleteBtn.module.css";
import image from "./X-img.png";

export const DeleteBtn = ({ onClick }) => {
  return (
    <div className={style.delete_btn_wrapper}>
      <button className={style.delete_btn} onClick={onClick}>
        Remove
      </button>
    </div>
  );
};
