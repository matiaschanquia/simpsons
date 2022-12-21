import React from "react";
import style from "./Footer.module.css";

export default function Footer(props) {
    return (
        <footer className={style.footer}>
            <div className={style.redes}>
                <a href="https://www.linkedin.com/in/matias-chanquia/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo linkedin"/></a>
                <a href="https://github.com/matiaschanquia" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo github"/></a>
            </div>
            <p>&copy; Copyright Simpsons API - Matias Chanquia Dev</p>
        </footer>
    )
}