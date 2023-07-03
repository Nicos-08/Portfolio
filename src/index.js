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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<div className="App">
				<Routes>
					<Route
						exact
						path="/competences"
						element={<PageCompetences theme={"clair"} />}
					></Route>
					<Route
						exact
						path="/contact"
						element={<PageContact theme={"clair"} />}
					></Route>
					<Route
						exact
						path="/creations"
						element={<PageCreations theme={"clair"} />}
					></Route>
				</Routes>
			</div>
		</Router>
	</React.StrictMode>
);
