import "./styles/base/fonts.css";
import "./styles/base/default.css";
import creations from "./data/creations";
import Competence from "./components/competences/competence";
import competences from "./data/competences";

function App() {
	return (
		<div className="App">
			<Competence theme="sombre" competence={competences[6]} />
		</div>
	);
}

export default App;
