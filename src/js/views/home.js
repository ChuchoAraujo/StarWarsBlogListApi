import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Characters from "./characters.js";
import Planets from "./planets.js";


export const Home = ({addFav}) => {

	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])

	const urlInitial = "https://swapi.dev/api/people/"
	const urlPlanets = "https://swapi.dev/api/planets/"

	const fetCharacters = (url) => {
		fetch(url)
	       .then(response => response.json())
	       .then(data=> setCharacters(data.results))
	       .catch(error => console.log(error))
	}

	const fetchPlanets = (url) => {
		fetch(url)
		   .then(response => response.json())
		   .then(data=> setPlanets(data.results))
		   .catch(error => console.log(error))
	}

	useEffect(() => {
		fetCharacters(urlInitial)
		fetchPlanets(urlPlanets)
	   },[])

  return (
	<>
	   
	  <div className="container">
	       <h1 className="tituloPagina text-light">Characters :</h1>
	       <Characters characters = {characters} addFav={addFav}/>
	  </div>
	  <div className="container text-light mt-5">
	       <h1 className="tituloPagina p-2 mb-5">Planets</h1>
		   <Planets planets = {planets} addFav={addFav}/>
	  </div>
	</>
);
  }
