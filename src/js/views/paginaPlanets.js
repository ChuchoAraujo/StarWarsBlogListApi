import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaginaPlanets = () => {

    const params = useParams()
    const [singlePlanet, setPlanet]= useState([])

    useEffect(()=> {
        fetch("https://swapi.dev/api/planets/"  + params.idPlanet)
        .then(response => response.json())
        .then(data => setPlanet(data))
        .catch(error => console.log(error))
 }, [])


    return(
        <>
        <div className="text-light container-fluid row mt-5">
           <div className="col-1"></div>

           <div className="col-5 text-center">
                <img className="imageSingle"
                src={ "https://starwars-visualguide.com/assets/img/planets/" + params.idPlanet + ".jpg"} />
           </div>
            
           <div className="col-5 mt-5">
            <h1>Name: {singlePlanet.name}</h1>
            <hr/>
            <h5>Mass: {singlePlanet.diameter}</h5>
            <h5>Hair color: {singlePlanet.climate}</h5>
            <h5>Skin: {singlePlanet.terrain}</h5>
            <h5>Eyes: {singlePlanet.population}</h5>
            <h6>Birth year: {singlePlanet.surface_water}</h6>
            <h6>Gender: {singlePlanet.rotation_period}</h6>
        
        </div>

        <div className="col-1"></div>

        </div>

       
        </>
    )
}

export default PaginaPlanets