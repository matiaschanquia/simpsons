import React, { useState } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    const [character, setCharacter] = useState("");

    const changeHandler = (e) => {
        setCharacter(e.target.value);
    }

    return(
        <header className={style.header}>
            <nav className={style.links}>
                <ul>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? style.linkActive : ""}>
                            <span>Home</span>
                        </NavLink>  
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? style.linkActive : ""}>
                            <span>About</span>
                        </NavLink>  
                    </li>
                </ul>
            </nav>
            <button onClick={props.random}>Random</button>
            <div className={style.add}>
                <input placeholder="Enter the character" type="text" onChange={changeHandler}/>
                <button onClick={() => props.clickHandlerAdd(character)}>Add</button>
            </div>
        </header>
    )
}