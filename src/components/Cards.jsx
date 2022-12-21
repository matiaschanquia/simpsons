import React from "react";
import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards(props) {
    return (
        <div className={style.cards}>
            {
                props.characters.map((char, index) => {
                    return <Card key={index} image={char.image} character={char.character} quote={char.quote} deleteChar={props.deleteChar} index={index}/>
                })
            }
        </div>
    )
}