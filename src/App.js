import React, { useState } from "react";
import Header from "./components/Header";
import "./global.css";
import style from "./App.module.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Character from "./components/Character";

const chars = [
  {"quote":"Eat my shorts","character":"Bart Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638","characterDirection":"Right"},
  {"quote":"I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.","character":"Abe Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593","characterDirection":"Right"},
  {"quote":"But my mom says I'm cool.","character":"Milhouse Van Houten","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002","characterDirection":"Right"}
]

function App() {

  const [characters, setCharacters] = useState(chars)

  const clickHandlerAdd = (name) => {
    name = name.toLowerCase();
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${name}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.length === 0) {
        alert("No se pudo encontrar el personaje");
      } else if(data[0].character.toLowerCase() === name) {
        let existe = false;
        characters.forEach(elem => {
          if(elem.character.toLowerCase() === name) {
            existe = true;
          }
        })
        if(existe) {
          alert("Ese personaje ya existe!")
        } else {
          setCharacters([
            ...characters,
            data[0]
          ])
        }
      } else {
        alert("No se pudo encontrar el personaje")
      }
    });
  } 

  const random = () => {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=999999`)
    .then((response) => response.json())
    .then((data) => {
      let numRandom = Math.floor((Math.random()*(50)));
      let existe = true;
      while(existe) {
        existe = false;
        for(let i = 0; i < characters.length; i++) {
          if(characters[i].character === data[numRandom].character)existe = true;
        }
        if(existe) {
          numRandom = Math.floor((Math.random()*(50)));
        }
      }
      setCharacters([
        ...characters,
        data[numRandom]
      ])
    });
  }

  const deleteChar = (index) => {
    const arrayAux = [...characters];
    arrayAux.splice(index, 1);
    setCharacters([...arrayAux]);
  }

  return (
    <>
      <div className={style.container}>
        <Header random={random} clickHandlerAdd={clickHandlerAdd}/>
        <Routes>
          <Route path="/home" element={ <Cards characters={characters} deleteChar={deleteChar}/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/character/:name" element={ <Character /> }/>
          <Route path="/" element={ <Navigate to="/home" replace/> }/>
        </Routes>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
