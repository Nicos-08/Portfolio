import LiensItems from "./components/navigation/liens_items/liens_items";
import "./styles/base/fonts.css";
import "./styles/base/default.css";

function App() {
	return (
		<div className="App">
			<LiensItems theme="clair" nombre="2" texte="Creations" />
		</div>
	);
}

export default App;
