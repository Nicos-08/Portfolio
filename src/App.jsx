import "./styles/base/fonts.css";
import "./styles/base/default.css";
import HeaderAvecFiltres from "./components/general/header_avec_filtres/header_avec_filtres";

function App() {
	return (
		<div className="App">
			<HeaderAvecFiltres theme="sombre" type="Mes créations" />
		</div>
	);
}

export default App;
