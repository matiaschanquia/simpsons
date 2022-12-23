import React from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
    return (
        <div className={style.card}>
            <button onClick={() => props.deleteChar(props.index)}>X</button>
            <img src={props.image} alt={props.character}/>
            <NavLink to={`/character/${props.character}`}>
                <h1 className={style.name}>Name: {props.character}</h1>
            </NavLink>
            <p>Quote: {props.quote}</p>
        </div>
    )
}