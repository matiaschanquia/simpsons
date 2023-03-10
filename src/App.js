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
  const [loading, setLoading] = useState(false);

  const clickHandlerAdd = (name) => {
    setLoading(true);
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
      setLoading(false);
    });
  } 

  const random = () => {
    if(characters.length === 23) {
      alert("Ya estan todos los personajes existentes!");
      return;
    }
    setLoading(true);
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=999999`)
    .then((response) => response.json())
    .then((data) => {
      var hash = {};
      data = data.filter(function(current) {
        var exists = !hash[current.character];
        hash[current.character] = true;
        return exists;
      });
      const max = data.length
      let numRandom = Math.floor((Math.random()*(max)));
      let charsArray = ["hola"];
      /*eslint-disable */
      while(charsArray.length > 0) {
        charsArray = [];
        charsArray = characters.filter(char => char.character === data[numRandom].character);
        if(charsArray.length > 0) {
          numRandom = Math.floor((Math.random()*(max)));
        }
      }
      /*eslint-enable */
      setCharacters([
        ...characters,
        data[numRandom]
      ])
      setLoading(false);
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
        <h1 className={style.title}>The Simpsons App</h1>
        <Header random={random} clickHandlerAdd={clickHandlerAdd}/>
        <Routes>
          <Route path="/home" element={ <Cards characters={characters} deleteChar={deleteChar}/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/character/:name" element={ <Character /> }/>
          <Route path="/" element={ <Navigate to="/home" replace/> }/>
        </Routes>
        {
          loading ? <div className={style.loading}> <img src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="loading"/> </div> : <></>
        }
        
      </div>
      <Footer />
    </>
  );
}

export default App;
