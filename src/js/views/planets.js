import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";



const Planets = ({planets, addFav}) => {
    
   

    return (
        <div className="row container">
        {
           planets.map((item, index) => (
                <div key={index} className="col-3 mb-5">
                <Link className="cardAll vinculo card cardBody" to={"/paginaPlanet/" + (index+2)}>
                    <img className="imgCharacters"
                    src={ "https://starwars-visualguide.com/assets/img/planets/" + (index+2) + ".jpg"} alt="" />
                </Link>
                    <div className="card-body cardBody text-light text-center">
                        <h5 className="card-title p-2">{item.name}</h5>
                        <hr />
                        <p>Climate {item.climate}</p>
                        <p>Terrain {item.terrain}</p>
                
                        
                        <Link to={"/paginaPlanet/"+ (index+2)}>
                           <button type="button" className="buttonLikeRead boton btn btn-warning  p-2">Read more</button>
                        </Link>
                        <button onClick={()=> addFav(item.name)} type="button" className="buttonLike p-2 ms-3"><i className="iconHeart fa fa-heart text-danger" /> {" "}</button>      
                    </div>
                
                    
            </div>
            
            )) 
        }
        
    </div>
    )
}
export default Planets