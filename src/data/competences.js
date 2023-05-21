const themes = {
	programmation: "Programmation",
	design: "Design",
	films: "Films",
};

const competences = [
	{
		nom: "Organiser ses projets",
		details: [
			"Sauvegarder l'ensemble des projets sur GitHub",
			"Utiliser le système 7.1 pour les dossiers",
			"Utiliser la méthode BEM",
		],
		theme: themes.programmation,
	},
	{
		nom: "Créer un code modulable",
		details: [
			"Créer des composants React réutilisables et personnalisable grâce aux props",
			"Utiliser les variables et mixins SASS",
		],
		theme: themes.programmation,
	},
	{
		nom: "Créer un site web statique",
		details: ["Utiliser le HTML ou le JSX (React)", "Utiliser SASS (CSS)"],
		theme: themes.programmation,
	},
	{
		nom: "Créer un site web dynamique",
		details: [
			"Manipuler du JavaScript côté web",
			"Utiliser la bibliothèque React",
		],
		theme: themes.programmation,
	},
	{
		nom: "Choisir une belle palette de couleurs",
		details: [
			"Créer des palettes monochromes, complémentaires ou triadiques",
			"Utiliser Adobe Colors",
		],
		theme: themes.design,
	},
	{
		nom: "Créer des illustrations vectorielles",
		details: ["Vectoriser une photo", "Utiliser Adobe Illustrator"],
		theme: themes.design,
	},

	{
		nom: "Créer des maquettes pour sites/applis",
		details: [
			"Utiliser Figma ou Adobe XD",
			"Créer des composants réutilisables",
			"Gérer le prototypage de la maquette pour la rendre dynamique",
			"Créer des formats responsive grâce aux contraintes",
			"Créer des formats desktop et mobile",
		],
		theme: themes.design,
	},
	{
		nom: "Créer un univers graphique",
		details: [
			"Choisir une ou plusieurs typographie/s",
			"Créer un moodboard",
			"Créer la charte graphique d'un projet",
		],
		theme: themes.design,
	},
	{
		nom: "Monter un film/une vidéo",
		details: [
			"Utiliser Adobe Premiere Pro ou DaVinci Resolve",
			"Faire le derush des plans",
			"Utiliser des effets et transitions pour dynamiser un film",
			"Créer des éléments graphiques animés grâce à des outils comme Fusion",
		],
		theme: themes.films,
	},
	{
		nom: "Tourner un film",
		details: ["Jouer dans un film", "Préparer le matériel et filmer"],
		theme: themes.films,
	},
	{
		nom: "Imaginer un film",
		details: [
			"Ecrire un scénario",
			"Créer un storyboard",
			"Ecrire le texte d'une vidéo",
		],
		theme: themes.films,
	},
];

export default competences;
