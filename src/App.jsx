import "./styles/base/fonts.css";
import "./styles/base/default.css";
import Card from "./components/creations/card/card";
import creations from "./data/creations";

function App() {
	return (
		<div className="App">
			<Card theme="sombre" projet={creations[0]} />
		</div>
	);
}

export default App;
