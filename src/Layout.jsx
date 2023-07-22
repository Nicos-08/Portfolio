//React
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
import { useState } from "react";

const Layout = () => {
	const [theme, setTheme] = useState("sombre");
	return (
		<div className={`App App--${theme}`}>
			<Router>
				<Routes>
					<Route
						exact
						path="/competences"
						element={<PageCompetences theme={theme} setTheme={setTheme} />}
					></Route>
					<Route
						exact
						path="/contact"
						element={<PageContact theme={theme} setTheme={setTheme} />}
					></Route>
					<Route
						exact
						path="/creations"
						element={<PageCreations theme={theme} setTheme={setTheme} />}
					></Route>
					<Route
						exact
						path="/projet"
						element={
							<PageProjet
								theme={theme}
								projet={creations[3]}
								setTheme={setTheme}
							/>
						}
					></Route>
					<Route
						exact
						path="/navigation"
						element={<PageNavigation theme={theme} setTheme={setTheme} />}
					></Route>
					<Route
						exact
						path="/"
						element={<PageAccueil theme={theme} setTheme={setTheme} />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default Layout;
