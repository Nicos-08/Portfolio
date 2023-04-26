import TagCardProjet from "./components/creations/tag_card_projet/tag_card_projet";
import "./styles/base/fonts.css";
import "./styles/base/default.css";

function App() {
	return (
		<div className="App">
			<TagCardProjet theme="sombre" texte="Ceci est un rêve" />
		</div>
	);
}

export default App;
