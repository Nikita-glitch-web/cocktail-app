import React from "react";
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer_box}>
            <div className={style.footer_content}>
                <h1 className={style.footer_text}>
                    Made by Nikita Lytvynov in 2024
                </h1>
                <h2 className={style.footer_text}>
                    nikitalytvynov0506@gmail.com
                </h2>
            </div>
        </footer>
    )
}