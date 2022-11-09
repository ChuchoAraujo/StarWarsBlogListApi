import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PaginaCharacter } from "./views/paginaCharacter.js"
import PaginaPlanets from "./views/paginaPlanets.js";


const Layout = () => {
const [favs, setFavs]= useState([])

const deleteFav = (index) => {
	setFavs(favs.filter((favs, fav) => fav !== index))
} 

const addFav = (fav) => {
	setFavs([...favs, fav])
}

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favs={favs}  deleteFav={deleteFav}
					 />
					<Switch>
						<Route exact path="/">
							<Home addFav= {addFav}  favs={favs} deleteFav={deleteFav}/>
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/paginaCharacter/:idCharacter">
							<PaginaCharacter addFav= {addFav} deleteFav={deleteFav} />
						</Route>
						<Route exact path="/paginaPlanet/:idPlanet">
							<PaginaPlanets addFav= {addFav} deleteFav={deleteFav}/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
