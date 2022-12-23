import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Character.module.css";

export default function Character(props) {
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${name}`)
        .then((response) => response.json())
        .then((char) => {
            setCharacter(char[0]);
        })
    }, [name])

    const backToHome = () => {
        navigate("/home")
    }

    return (
        <div className={style.containerCharacter}>
            <div>
                <h1>Name: {character.character}</h1>
                <h2>Quote: {character.quote}</h2>
                <h2>Direction: {character.characterDirection}</h2>
            </div>
            <figure>
                <img src={character.image} alt={character.character} />
            </figure>
            <button onClick={backToHome}>Volver</button>
        </div>
    )
}