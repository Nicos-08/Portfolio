import TagCardProjetList from "./components/creations/tag_card_projet_list/tag_card_projet_list";
import "./styles/base/fonts.css";
import "./styles/base/default.css";

function App() {
	return (
		<div className="App">
			<TagCardProjetList
				theme="sombre"
				tags={["React", "JavaScript", "SASS"]}
			/>
		</div>
	);
}

export default App;
