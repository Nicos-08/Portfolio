import "./styles/base/fonts.css";
import "./styles/base/default.css";
import CadreInfosProjet from "./components/projets/cadre_infos_projet/cadre_infos_projet";
import creations from "./data/creations";

function App() {
	return (
		<div className="App">
			<CadreInfosProjet theme="sombre" projet={creations[1]} />
		</div>
	);
}

export default App;
