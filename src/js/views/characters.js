import React, { useContext, useEffect,} from "react";
import { Link } from "react-router-dom";



const Characters = ({characters, addFav }) => {
    

    return (
    <div className="row container">
        {
           characters.map((item, index) => (
            <div key={index} className="col-3 mb-5">
                    <Link className="cardAll vinculo card cardBody" to={"/paginaCharacter/"+ (index+1)}>
                        <img className="imgCharacters" src={ "https://starwars-visualguide.com/assets/img/characters/" + (index+1) + ".jpg"} alt=""/>
                    </Link>
                        <div className="card-body cardBody text-light text-center">
                              <h5 className="card-title p-2" style={{fontSize: 25}}>{item.name}</h5>
                              <p>Height: {item.height}</p>
                              <p>Gender: {item.gender}</p>
                    <Link to={"/paginaCharacter/"+ (index+1)}>
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
export default Characters