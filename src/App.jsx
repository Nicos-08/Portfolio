import "./styles/base/fonts.css";
import "./styles/base/default.css";
import ReseauSocial from "./components/contact/reseau_social/reseau_social";

function App() {
	return (
		<div className="App">
			<ReseauSocial theme={"clair"} reseau="instagram" />
		</div>
	);
}

export default App;
