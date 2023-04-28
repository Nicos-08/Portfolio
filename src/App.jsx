import "./styles/base/fonts.css";
import "./styles/base/default.css";
import TagProjet from "./components/projets/tag_projet/tag_projet";

function App() {
	return (
		<div className="App">
			<TagProjet tagNom="React" />
		</div>
	);
}

export default App;
