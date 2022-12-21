import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
    return (
        <div className={style.card}>
            <img src={props.image} alt={props.character}/>
            <h1>Name: {props.character}</h1>
            <p>Quote: {props.quote}</p>
        </div>
    )
}