import React from "react";
import style from "./About.module.css";
import img from "../about.jpg";

export default function About(props) {
    return (
        <div className={style.containerAbout}>
            <figure>
                <img src={img} alt="Matias Chanquia"/>
            </figure>
            <div className={style.sobre}>
                <h2>Sobre la web:</h2>
                <p>Esta aplicación web permite agregar un personaje de Los Simpsons al azar y también permite añádir un personaje por su nombre completo (en inglés). A su vez, implemente una forma de navegar entre distintas rutas, haciendo click sobre el nombre se dirige a una ruta con mas detalles sobre el personaje.</p>
                <h2>Sobre mi:</h2>
                <p>Soy Matias Chanquia de Córdoba, Argentina, tengo 21 años y soy desarrollador frontend. Amante de la programación desde el 2020 que empecé con Python.</p>
                <p>Mi email es: <a href="mailto:matiaschanquianahuel@gmail.com">matiaschanquianahuel@gmail.com</a></p>
            </div>
        </div>
    );
}