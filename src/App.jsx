import MenuDeNavigation from "./components/navigation/menu_de_navigation/menu_de_navigation";
import "./styles/base/fonts.css";
import "./styles/base/default.css";

function App() {
	return (
		<div className="App">
			<MenuDeNavigation
				theme="sombre"
				arborescence={["Page de projet", "Choixpeau magique"]}
			/>
		</div>
	);
}

export default App;
