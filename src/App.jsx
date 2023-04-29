import "./styles/base/fonts.css";
import "./styles/base/default.css";
import DureeProjet from "./components/projets/duree_projet/duree_projet";

function App() {
	return (
		<div className="App">
			<DureeProjet
				dates={{
					debut: {
						mois: "01",
						annee: "2023",
					},
					fin: {
						mois: "05",
						annee: "2023",
					},
				}}
			/>
		</div>
	);
}

export default App;
