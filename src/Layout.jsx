//React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import PageCompetences from "../src/pages/competences/competences";
import PageContact from "./pages/contact/contact";
import PageCreations from "./pages/creations/creations";
import PageProjet from "./pages/projet/projet";

//Styles
import "./styles/base/default.css";
import "./styles/base/fonts.css";

//Data
import PageNavigation from "./pages/navigation/navigation";
import PageAccueil from "./pages/accueil/accueil";
import { useState } from "react";

const Layout = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	if (theme === null) {
		setTheme("sombre");
		localStorage.setItem("theme", "sombre");
	}
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
						path="/projet/:id"
						element={<PageProjet theme={theme} setTheme={setTheme} />}
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
