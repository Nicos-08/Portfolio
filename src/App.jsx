import "./styles/base/fonts.css";
import "./styles/base/default.css";
import creations from "./data/creations";
import Visualisateur from "./components/projets/visualisateur/visualisateur";

function App() {
	return (
		<div className="App">
			<Visualisateur projet={creations[1]} />
		</div>
	);
}

export default App;
