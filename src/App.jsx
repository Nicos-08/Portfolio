import "./styles/base/fonts.css";
import "./styles/base/default.css";
import creations from "./data/creations";
import ProjetsSimilaires from "./components/projets/projets_similaires/projets_similaires";

function App() {
	return (
		<div className="App">
			<ProjetsSimilaires theme="clair" projet={creations[1]} />
		</div>
	);
}

export default App;
