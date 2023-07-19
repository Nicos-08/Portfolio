//React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import PageCompetences from "../src/pages/competences/competences";
import PageContact from "./pages/contact/contact";
import PageCreations from "./pages/creations/creations";

//Styles
import "./styles/base/default.css";
import "./styles/base/fonts.css";
import PageProjet from "./pages/projet/projet";

//Data
import creations from "./data/creations";
import PageNavigation from "./pages/navigation/navigation";
import PageAccueil from "./pages/accueil/accueil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<div className="App">
				<Routes>
					<Route
						exact
						path="/competences"
						element={<PageCompetences theme={"sombre"} />}
					></Route>
					<Route
						exact
						path="/contact"
						element={<PageContact theme={"sombre"} />}
					></Route>
					<Route
						exact
						path="/creations"
						element={<PageCreations theme={"sombre"} />}
					></Route>
					<Route
						exact
						path="/projet"
						element={<PageProjet theme={"sombre"} projet={creations[3]} />}
					></Route>
					<Route
						exact
						path="/navigation"
						element={<PageNavigation theme={"clair"} />}
					></Route>
					<Route
						exact
						path="/"
						element={<PageAccueil theme={"clair"} />}
					></Route>
				</Routes>
			</div>
		</Router>
	</React.StrictMode>
);
