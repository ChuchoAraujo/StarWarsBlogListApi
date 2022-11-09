import React from "react";
import { Link } from "react-router-dom";
import logoStarWars from "../../img/logoStarWars.png"
import { VscTwitter, VscGithubInverted } from "react-icons/vsc";
import { BsFacebook, BsYoutube,BsFillTrashFill } from "react-icons/bs";



export const Navbar = ({fav, favs, deleteFav}) => {
	return (
		<>
		  <nav className="navbar p-4 row navegador">

			<div className="iconos col-2">
				<VscTwitter />
				<VscGithubInverted/>
				<BsFacebook/>
				<BsYoutube/>
			</div>
			<div className="col-8 text-center">
			   <Link to="/">
			        <img src={logoStarWars} className="logoStarWars"/>
			   </Link>
			</div>
			   
         
			<div className="ml-auto col-2">
				   <Link to="/">
				   <div className="dropdown p-3">
                        <button className="buttonFavorites dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Favorites <i className="iconHeart fa fa-heart text-danger" /> {" "}
                        </button>
                        <ul className="dropdown-menu p-3 cajaFavoritos">
				           <div>
							{favs.map((item, index)=> {
					            return <li key={index}>{item} 
											 <BsFillTrashFill className="iconTrash ms-3" onClick={()=> deleteFav(index)}/>
											 <hr/>
								             </li>
											  
								
				               })}
							</div>
                        </ul>
</div>
					   
				   </Link>
			</div>


		  </nav>
		</>
	);
};
