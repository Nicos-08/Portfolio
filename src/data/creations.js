// Choixpeau magique
import choixpeau_magique_image_principale from "../assets/img/creations/programmation/choixpeau_magique/image_principale_choixpeau_magique.png";
import choixpeau_magique_image_1 from "../assets/img/creations/programmation/choixpeau_magique/image_1_choixpeau_magique.png";
import choixpeau_magique_image_2 from "../assets/img/creations/programmation/choixpeau_magique/image_2_choixpeau_magique.png";
import choixpeau_magique_image_3 from "../assets/img/creations/programmation/choixpeau_magique/image_3_choixpeau_magique.jpg";
import choixpeau_magique_image_4 from "../assets/img/creations/programmation/choixpeau_magique/image_4_choixpeau_magique.png";
import choixpeau_magique_image_5 from "../assets/img/creations/programmation/choixpeau_magique/image_5_choixpeau_magique.png";

//ToDo List
import todo_list_image_principale from "../assets/img/creations/programmation/todo_list/image_principale_todo_list.png";
import todo_list_image_1 from "../assets/img/creations/programmation/todo_list/image_1_todo_list.png";
import todo_list_image_2 from "../assets/img/creations/programmation/todo_list/image_2_todo_list.png";

//Header
import header_image_principale from "../assets/img/creations/programmation/header/image_principale_header.png";
import header_image_1 from "../assets/img/creations/programmation/header/image_1_header.png";
import header_image_2 from "../assets/img/creations/programmation/header/image_2_header.png";
import header_image_3 from "../assets/img/creations/programmation/header/image_3_header.png";

//Leaflet
import leaflet_image_principale from "../assets/img/creations/programmation/leaflet/image_principale_leaflet.png";
import leaflet_image_1 from "../assets/img/creations/programmation/leaflet/image_1_leaflet.png";

//TCL
import tcl_image_principale from "../assets/img/creations/programmation/tcl/image_principale_tcl.png";
import tcl_image_1 from "../assets/img/creations/programmation/tcl/image_1_tcl.png";

//Motifs
import motifs_pdf from "../assets/files/creations/design/motifs.pdf";
import motifs_image_principale from "../assets/img/creations/design/motifs/image_principale_motifs.png";
import motifs_image_1 from "../assets/img/creations/design/motifs/image_1_motifs.png";
import motifs_image_2 from "../assets/img/creations/design/motifs/image_2_motifs.png";

//Architecture
import architecture_pdf from "../assets/files/creations/design/architecture.pdf";
import architecture_image_principale from "../assets/img/creations/design/architecture/image_principale_architecture.png";
import architecture_image_1 from "../assets/img/creations/design/architecture/image_1_architecture.png";
import architecture_image_2 from "../assets/img/creations/design/architecture/image_2_architecture.png";

//Portfolio
import portfolio_image_principale from "../assets/img/creations/design/portfolio/image_principale_portfolio.png";
import portfolio_image_1 from "../assets/img/creations/design/portfolio/image_1_portfolio.png";
import portfolio_image_2 from "../assets/img/creations/design/portfolio/image_2_portfolio.png";
import portfolio_image_3 from "../assets/img/creations/design/portfolio/image_3_portfolio.png";
import portfolio_image_4 from "../assets/img/creations/design/portfolio/image_4_portfolio.png";
import portfolio_image_5 from "../assets/img/creations/design/portfolio/image_5_portfolio.png";

//App musique
import app_musique_xd from "../assets/files/creations/design/app_musique.xd";
import app_musique_image_principale from "../assets/img/creations/design/app_musique/image_principale_app_musique.png";
import app_musique_image_1 from "../assets/img/creations/design/app_musique/image_1_app_musique.mov";
import app_musique_image_2 from "../assets/img/creations/design/app_musique/image_2_app_musique.png";
import app_musique_image_3 from "../assets/img/creations/design/app_musique/image_3_app_musique.png";
import app_musique_image_4 from "../assets/img/creations/design/app_musique/image_4_app_musique.png";
import app_musique_image_5 from "../assets/img/creations/design/app_musique/image_5_app_musique.png";

const themes = {
	programmation: "Programmation",
	design: "Design",
	films: "Films",
};

const tags = {
	programmation: {
		react: "React",
		javascript: "Javascript",
		sass: "Sass",
		css: "Css",
		html: "Html",
		database: "DataBase",
		leaflet: "Leaflet",
		projet_perso: "Projet perso",
		bem: "BEM",
	},
	design: {
		maquette: "Maquette",
		vecteur: "Vecteur",
		figma: "Figma",
		illustrator: "Illustrator",
		photoshop: "Photoshop",
		tumo: "Tumo",
		projet_perso: "Projet perso",
	},
	films: {
		tournage: "Tournage",
		acteur: "Acteur",
		montage: "Montage",
		documentaire: "Documentaire",
		court_métrage: "Court Métrage",
		storyboard: "Storyboard",
		bande_annonce: "Bande annonce",
		tumo: "Tumo",
		projet_perso: "Projet perso",
	},
};

const creations = [
	{
		nom: "Choixpeau magique",
		description: `Étant un grand fan de la saga Harry Potter 🧙‍♂️, j’ai voulu créer mon propre Choixpeau magique pour savoir dans quelle maison de Poudlard je serais envoyé si jamais (j’attends toujours ⌚) je recevais ma lettre d’admission à Poudlard.

        L’objectif était également de me familiariser avec React 🌐. C’était la première fois que je l’utilisais pour un projet et c’était, jusqu’à présent, la technologie la plus difficile que j’ai appris 🥵. Je suis allé assez rapidement sur le design en ne faisant qu’un wireframe (ce qui explique que ça ne soit pas très esthétique 😬) pour me focaliser sur l’écriture du code.
        
        Le test est fonctionnel et, pour ceux qui se le demanderaient, prend réellement en compte les réponses que vous inscrivez (vous n’avez qu’à aller voir le code 😂). Je vous invite à faire le test, même si vous n’êtes pas un ‘Potterhead’, pour savoir dans quelle maison vous iriez.`,
		theme: themes.programmation,
		tags: [
			tags.programmation.react,
			tags.programmation.javascript,
			tags.programmation.css,
			tags.programmation.projet_perso,
		],
		dates: {
			debut: {
				mois: "11",
				annee: "2022",
			},
			fin: {
				mois: "02",
				annee: "2023",
			},
		},
		lien: "https://nicos-08.github.io/choixpeau-magique/",
		imagePricipale: choixpeau_magique_image_principale,
		imagePricipalePosition: "center",
		images: [
			choixpeau_magique_image_1,
			choixpeau_magique_image_2,
			choixpeau_magique_image_3,
			choixpeau_magique_image_4,
			choixpeau_magique_image_5,
		],
	},
	{
		nom: "ToDo List",
		description: `Ceci est mon premier vrai projet de programmation 💪. Après avoir appris les bases du développement web avec HTML et CSS et après avoir créé des sites statiques, j’ai voulu apprendre le Javascript. Je dois vous confier que ce n’était pas simple car les notions sont très abstraites 😭.

        Pour rendre cela plus humain (rien de plus inhumain qu’un terminal de commandes 🧟), la création d’un projet était nécessaire. J’ai choisi de faire une application de ToDo list qui permettrait d’ajouter et de cocher des taches à faire.
        
        J’ai tout d’abord commencé par faire une ‘V1’ qui était très basique, où l’on pouvait seulement ajouter, cocher et supprimer des tâches 👍. Puis j’ai voulu améliorer le projet et, après avoir fait une maquette très propre, j’ai ajouté de nombreuses fonctionnalités comme les catégories, la personnalisation, la modification de tâches etc.
        
        Ce projet a duré longtemps (99% de débogage sérieux 😡) mais je suis très fier du résultat. Seul petit bémol, il n’y a pas de local storage, ce qui signifie que si l’on recharge la page…tout disparaît. Remarquez que c’est une bonne fonctionnalité pour terminer toutes ses tâches d’un coup 💡.`,
		theme: themes.programmation,
		tags: [
			tags.programmation.javascript,
			tags.programmation.css,
			tags.programmation.html,
			tags.programmation.projet_perso,
		],
		dates: {
			debut: {
				mois: "09",
				annee: "2022",
			},
			fin: {
				mois: "11",
				annee: "2022",
			},
		},
		lien: "https://nicos-08.github.io/to-do-list/",
		imagePricipale: todo_list_image_principale,
		imagePricipalePosition: "left",
		images: [todo_list_image_1, todo_list_image_2],
	},
	{
		nom: "Header site",
		description: `Le CSS mal structuré, quelle galère 😡. J’ai décidé de mettre un point final au désordre et de dire bonjour à SASS 👋. SASS est un préprocesseur CSS qui permet, grâce à ses nombreuses fonctionnalités, une meilleure organisation et maintenance d’une feuille de style 👍.

        Pour m’entraîner à utiliser SASS, j’ai débuté un petit projet. L’objectif est de créer un header pour un site quelconque. Le header est responsive, c’est-à-dire qu’il fonctionne peu importe la taille de l’écran 💻.
        
        L’utilisation d’un peu de Javascript (même s’il n’est pas hyper optimisé) est également nécessaire pour faire fonctionner le menu hamburger 🍔 en format mobile.`,
		theme: themes.programmation,
		tags: [
			tags.programmation.sass,
			tags.programmation.javascript,
			tags.programmation.html,
			tags.programmation.projet_perso,
		],
		dates: {
			debut: {
				mois: "02",
				annee: "2023",
			},
			fin: {
				mois: "03",
				annee: "2023",
			},
		},
		lien: "https://nicos-08.github.io/header_sass/",
		imagePricipale: header_image_principale,
		imagePricipalePosition: "right",
		images: [header_image_1, header_image_2, header_image_3],
	},
	{
		nom: "Carte interactive",
		description: `J’ai réalisé mon stage de troisième (et oui je ne suis pas déscolarisé, les apparences sont trompeuses) dans l’entreprise Heva qui traite des données médicales 💉 sensibles. Passionné par le développement web comme je suis, j’ai été obligé de me coltiner des développeurs à longueur de journée (non je rigole ils étaient hypers sympas ☺️). Parfois, ces développeurs ont besoin de représenter les données de façon cartographiques. Pour cela, ils utilisent Leaflet, une bibliothèque Javascript open source 😍. 

        J’ai donc décidé de, moi aussi, créer ma propre carte avec Leaflet. Cette dernière représente la densité de population de ma ville (Lyon pour les intimes 😏) en fonction des arrondissements. Les arrondissements sont donc colorés plus ou moins foncés en fonction du nombre d’habitants au kilomètre carré. De plus quand on clique sur un des arrondissements on peut avoir les données précises (magie 🪄).
        
        Leaflet est assez facile à prendre en main et les nombreux tutoriels sont très utiles. Mais je pense que ça peut être assez compliqué sur de plus gros projets.`,
		theme: themes.programmation,
		tags: [
			tags.programmation.leaflet,
			tags.programmation.javascript,
			tags.programmation.database,
		],
		dates: {
			debut: {
				mois: "12",
				annee: "2022",
			},
			fin: {
				mois: "12",
				annee: "2022",
			},
		},
		lien: "https://nicos-08.github.io/leaftlet/",
		imagePricipale: leaflet_image_principale,
		imagePricipalePosition: "center",
		images: [leaflet_image_1],
	},
	{
		nom: "Lignes de bus TCL",
		description: `Depuis moi plus jeune âge je suis intéressé par les transports en commun (je voulais même devenir chauffeur de bus quand j’étais tout petit 🫢). En cherchant un peu sur internet, j’ai trouvé une base de données qui répertorie l’ensemble des lignes de bus de ma ville (Lyon pour les intimes 😏).

        À partir de ces données j’ai réussi à créer une interface très simple qui indique l’ensemble des lignes de bus triées par catégories avec leur trajet 👍. Le but était simplement d’apprendre à tirer des informations d’un fichier type JSON en JavaScript.`,
		theme: themes.programmation,
		tags: [
			tags.programmation.database,
			tags.programmation.javascript,
			tags.programmation.css,
			tags.programmation.html,
			tags.programmation.projet_perso,
		],
		dates: {
			debut: {
				mois: "02",
				annee: "2022",
			},
			fin: {
				mois: "02",
				annee: "2022",
			},
		},
		lien: "https://nicos-08.github.io/lignes-de-bus-tcl/",
		imagePricipale: tcl_image_principale,
		imagePricipalePosition: "left",
		images: [tcl_image_1],
	},
	{
		nom: "Motifs",
		description: `J’ai réalisé ce projet dans mon activité d’informatique organisée par ma région (du nom de Tumo). Le but de Tumo est de former les jeunes aux compétences du numérique (on n’a pas tous les mêmes activités extra-scolaires 😂). Ils proposent différentes thématiques (que vous pouvez retrouver sur leur site) et, après avoir réalisé une activité de découverte de chacune d’entre elles, les jeunes peuvent choisir 3 thématiques pour faire des activités et des projets avancés sur la thématique. Parmi ces 3 activités, j’ai donc choisis le design graphique (évidemment ☺️).

        Le premier projet sur lequel nous devions travailler était la réalisation de motifs. C’était vraiment très difficile mais très plaisant à réaliser. Effectivement j’ai, pour la première fois de ma vie, utilisé Adobe Illustrator 😍. C’est vraiment un logiciel incroyable mais que je ne peux malheureusement pas m’acheter 💸. Alors, quel plaisir de pouvoir l’utiliser à Tumo ! 
        
        Il fallait tout d’abord créer la forme initiale, en partant d’une esquisse sur papier. Ensuite il fallait étudier la fréquence à laquelle la forme allait se répéter. Et, après avoir choisi si on colorait l’intérieur ou les bordures des formes, il était nécessaire de créer la palette de couleurs. Aidé de Adobe Colors et de Coolors, j’ai pu étudier les différents types de palettes : monochromes, triadiques, complémentaire… c’est une partie du design très intéressante 👍.
        
        Finalement, j’ai réalisé 3 versions différentes, en utilisant la même forme de départ sur chacune des versions mais en faisant varier la fréquence et les couleurs. Je trouve le résultat très sympathique, cependant je ne porterais pas un T-Shirt avec ce motif 🤣.`,
		theme: themes.design,
		tags: [tags.design.illustrator, tags.design.vecteur, tags.design.tumo],
		dates: {
			debut: {
				mois: "05",
				annee: "2022",
			},
			fin: {
				mois: "06",
				annee: "2022",
			},
		},
		lien: motifs_pdf,
		imagePricipale: motifs_image_principale,
		imagePricipalePosition: "center",
		images: [motifs_image_1, motifs_image_2],
	},
	{
		nom: "Architecture",
		description: `J’ai réalisé ce projet dans mon activité d’informatique organisée par ma région (du nom de Tumo). Le but de Tumo est de former les jeunes aux compétences du numérique (on n’a pas tous les mêmes activités extra-scolaires 😂). Ils proposent différentes thématiques (que vous pouvez retrouver sur leur site) et, après avoir réalisé une activité de découverte de chacune d’entre elles, les jeunes peuvent choisir 3 thématiques pour faire des activités et des projets avancés sur la thématique. Parmi ces 3 activités, j’ai donc choisis le design graphique (évidemment ☺️).

        Ce projet portait sur la vectorisation d’une architecture. Ce projet se réalisait en 3 étapes :
        
        - Une architecture nous était affichée pendant 5 minutes 🥵. Il fallait recopier du mieux que l’on pouvait l’architecture sur une feuille de papier.
        - Nous devions “vectoriser” notre croquis grâce au magnifique et sublime Illustrator✨ ! Il ne fallait garder que les éléments les plus importants.
        - Il fallait créer 3 palettes de couleurs différentes grâce à Adobe Colors et Coolors. La première est dans les tons jaune-beige-bleu, la seconde utilise les 3 couleurs primaires et la dernière est monochrome 😍.
        
        J’ai adoré travailler sur ce projet. Tout d’abord parce qu’Illustrator est un logiciel incroyable et très pratique à utiliser dans des projets comme celui-ci. Ensuite parce que la création de palette de couleurs est quelque chose qui m’intéresse beaucoup. C’est en même temps très libre et imaginatif mais aussi très strict et minutieux. C’est l’un de mes designs que je trouve le mieux réalisé, alors j’en suis très fier 🌟 !`,
		theme: themes.design,
		tags: [tags.design.illustrator, tags.design.vecteur, tags.design.tumo],
		dates: {
			debut: {
				mois: "05",
				annee: "2022",
			},
			fin: {
				mois: "06",
				annee: "2022",
			},
		},
		lien: architecture_pdf,
		imagePricipale: architecture_image_principale,
		imagePricipalePosition: "center",
		images: [architecture_image_1, architecture_image_2],
	},
	{
		nom: "Interface de mon Portfolio",
		description: `Avant d’être le site que vous voyez actuellement, j’ai dû coder et designer mon Portfolio (hé oui ça ne se fait pas en un claquement de doigts 🫰). Pour designer l’interface d’un site ou d’une appli j’utilise le saint Graal, Figma 😍. C’est un outil gratuit, spécialisé dans le design de maquettes de sites.

        La première étape est de réaliser les wireframes. Ce sont des schémas qui, pour chaque page d’un site, définissent le placement de chaque élément et leurs dimensions approximatives. L’objectif est d’avoir une idée d’à quoi va ressembler le site.
        
        La deuxième étape consiste à faire le mood board 😜. Pour faire un mood board, il faut choisir des images sur internet qui ont la même ambiance que le site que l’on veut créer. Sur ce projet, il y a de la 3D, du glassmorphism, du neumorphism, des dégradés dans les tons violets, bleu foncé et rose… En s’inspirant du mood board, on peut créer la charte graphique qui informe des couleurs, typographies et du logo du site.
        
        La troisième étape est de créer la maquette finale. Elle correspond à l’apparence que le site web final doit avoir. Tous les éléments sont positionnés très précisément (au pixel près vous avez bien entendu 🥵), ont les bonnes dimensions et couleurs. À partir de cette maquette statique, on vient coder le site fonctionnel en essayant d’être le plus semblable à la maquette (on essaye tant bien que mal 😬).
        
        J’ai pris beaucoup de plaisir à réaliser ce projet car le design d’interface est quelque chose qui me passionne. J’ai essayé de faire un Portfolio très propre et qui me corresponde 🌟.`,
		theme: themes.design,
		tags: [tags.design.figma, tags.design.maquette, tags.design.projet_perso],
		dates: {
			debut: {
				mois: "03",
				annee: "2023",
			},
			fin: {
				mois: "04",
				annee: "2023",
			},
		},
		lien: "https://www.figma.com/file/kpBYBvbNxZUpMyNabLl1NI/Portfolio---Maquette?node-id=6%3A10&t=aaRWg1pX0icCBjfw-1",
		imagePricipale: portfolio_image_principale,
		imagePricipalePosition: "center",
		images: [
			portfolio_image_1,
			portfolio_image_2,
			portfolio_image_3,
			portfolio_image_4,
			portfolio_image_5,
		],
	},
	{
		nom: "Design app musique",
		description: `J’ai réalisé ce projet dans mon activité d’informatique organisée par ma région (du nom de Tumo). Le but de Tumo est de former les jeunes aux compétences du numérique (on n’a pas tous les mêmes activités extra-scolaires 😂). Ils proposent différentes thématiques (que vous pouvez retrouver sur leur site) et, après avoir réalisé une activité de découverte de chacune d’entre elles, les jeunes peuvent choisir 3 thématiques pour faire des activités et des projets avancés sur la thématique. Parmi ces 3 activités, j’ai donc choisis le design graphique (évidemment ☺️).

        Ce projet était un projet d’équipe entre jeunes designers de Tumo 🤝. Tout d’abord nous avons choisi ensemble l’application que nous allions designer. Nous nous sommes mis d’accord sur la création d’une appli de streaming musical comme Deezer ou Spotify (pensez-vous qu’on va leur faire de la concurrence 👀 ?).
        
        Dans le design de l’application je me suis occupé de ces tâches-ci :
        
        - Créer le mood board. Pour faire un mood board, il faut choisir des images sur internet qui ont la même ambiance que le site que l’on veut créer. Sur ce projet, il y a des ondes, de la 3D, des couleurs dans les tons bleu foncé et violet et des dégradés 😍. Ce moodboard a permis par la suite de donner une ambiance à la maquette.
        - Designer certaines icônes et le logo de l’appli. Après avoir dessiné sur papier, j’ai vectorisé sur Illustrator, les icônes et le logo. La création du logo était la partie la plus difficile 🥵 car il faut faire quelque chose de simple mais qui véhicule le message de l’appli.
        - Élaborer la charte graphique. Aidé par le mood board, j’ai fait ressortir les couleurs, les icônes et les typographies que nous allions utiliser pour le design final.
        - Création des pochettes d’albums. Après que quelqu’un d’autre ait recherché sur internet des images en lien avec des styles de musique (merci à toi 🙏), j’ai créé, grâce au fameux Photoshop, des pochettes d’albums à mettre sur l’appli. On peut les retrouver sur la page d’accueil dans les menus déroulants.
        
        Même si tout le monde n’avait pas le même niveau, c’était très plaisant de pouvoir se répartir les tâches et donc de travailler sur ce qui nous plaisait le plus. J’ai pu découvrir beaucoup d’aspects différents du design d’interface (et je me suis rendu compte que ce n’était pas si simple que ça 😂).`,
		theme: themes.design,
		tags: [
			tags.design.maquette,
			tags.design.illustrator,
			tags.design.photoshop,
			tags.design.tumo,
		],
		dates: {
			debut: {
				mois: "01",
				annee: "2023",
			},
			fin: {
				mois: "01",
				annee: "2023",
			},
		},
		lien: app_musique_xd,
		imagePricipale: app_musique_image_principale,
		imagePricipalePosition: "top",
		images: [
			app_musique_image_1,
			app_musique_image_2,
			app_musique_image_3,
			app_musique_image_4,
			app_musique_image_5,
		],
	},
];

export default creations;
