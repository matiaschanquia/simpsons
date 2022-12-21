import React, { useState } from "react";
import style from "./Header.module.css";

export default function Header(props) {
    const [character, setCharacter] = useState("");

    const changeHandler = (e) => {
        setCharacter(e.target.value);
    }

    return(
        <header className={style.header}>
            <button onClick={props.random}>Random</button>
            <div className={style.add}>
                <input placeholder="Enter the character" type="text" onChange={changeHandler}/>
                <button onClick={() => props.clickHandlerAdd(character)}>Add</button>
            </div>
        </header>
    )
}