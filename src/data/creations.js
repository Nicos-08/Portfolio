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

//Leaflet
import leaflet_image_principale from "../assets/img/creations/programmation/leaflet/image_principale_leaflet.png";
import leaflet_image_1 from "../assets/img/creations/programmation/leaflet/image_1_leaflet.png";

//TCL
import tcl_image_principale from "../assets/img/creations/programmation/tcl/image_principale_tcl.png";
import tcl_image_1 from "../assets/img/creations/programmation/tcl/image_1_tcl.png";

//Motifs
import motifs_image_principale from "../assets/img/creations/design/motifs/image_principale_motifs.png";
import motifs_image_1 from "../assets/img/creations/design/motifs/image_1_motifs.png";
import motifs_image_2 from "../assets/img/creations/design/motifs/image_2_motifs.png";

//Architecture
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
import app_musique_image_principale from "../assets/img/creations/design/app_musique/image_principale_app_musique.png";
import app_musique_image_2 from "../assets/img/creations/design/app_musique/image_2_app_musique.png";
import app_musique_image_3 from "../assets/img/creations/design/app_musique/image_3_app_musique.png";
import app_musique_image_4 from "../assets/img/creations/design/app_musique/image_4_app_musique.png";
import app_musique_image_5 from "../assets/img/creations/design/app_musique/image_5_app_musique.png";

//Chocolaterie
import chcolaterie_image_principale from "../assets/img/creations/design/chocolaterie/chocolaterie_image_principale.png";
import chcolaterie_image_1 from "../assets/img/creations/design/chocolaterie/chocolaterie_image_1.png";
import chcolaterie_image_2 from "../assets/img/creations/design/chocolaterie/chocolaterie_image_2.png";
import chcolaterie_image_3 from "../assets/img/creations/design/chocolaterie/chocolaterie_image_3.png";
import chcolaterie_image_4 from "../assets/img/creations/design/chocolaterie/chocolaterie_image_4.png";

//Branding emotion
import branding_emotion_image_principale from "../assets/img/creations/design/branding_emotion/branding_emotion_image_principale.png";
import branding_emotion_image_1 from "../assets/img/creations/design/branding_emotion/branding_emotion_image_1.png";
import branding_emotion_image_2 from "../assets/img/creations/design/branding_emotion/branding_emotion_image_2.png";
import branding_emotion_image_3 from "../assets/img/creations/design/branding_emotion/branding_emotion_image_3.png";

//Bande annonce film
import bande_annonce_film_image_principale from "../assets/img/creations/films/bande_annonce_film_image_principale.jpg";

//Film d'horreur
import film_horreur_image_principale from "../assets/img/creations/films/film_horreur_image_principale.jpg";

//Le braquage
import le_braquage_image_principale from "../assets/img/creations/films/le_braquage_image_principale.jpg";

//Documentaire 3D
import documentaire_3D_image_principale from "../assets/img/creations/films/documentaire_3D_image_principale.jpg";

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
		branding: "branding",
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
		nom: "Branding emotion",
		description: `J'ai réalisé ce projet durant un stage de design graphique avec Martin Zarian, designer d'identités de marques qui est le co-fondateur de l'entreprise Factory 39. Ce stage était organisé par Tumo, une organisation de la région pour apprendre aux jeunes les compétences du numérique. Nous avions une semaine pour créer l'identité de marque d'une émotion. Et tout cela en anglais 🥵, car Martin ne parlait que cette langue. 
		Mon émotion était la tristesse 😭. Nous avons commencé par inventer le nom de notre marque. Pour ma part j'ai choisi DEPRIM' car cela évoquait bien la tristesse. J'ai également eu pleins d'autres idées comme Achlys 🤔 (déesse romaine de la tristesse) ou Tristous mais il ne fallait en garder qu'un !		
		Ensuite, il fallait imaginer et designer le logo avec papier et crayon. Au début, la quantité était plus importante que la qualité : il fallait essayer le maximum de possibilités de logo, garder toutes les idées et enfin choisir celles qui nous plaisaient le plus. Quand nous avions à peut près l'idée de à quoi notre logo allait ressembler, nous sommes passés sur Adobe Illustrator 🤩, un logiciel de graphisme vectoriel pour redesigner notre logo sur l'ordinateur. Là aussi, il fallait faire plusieurs variantes et ne pas rester focaliser sur la même idée. Mon logo représente un D (pour la première lettre de DEPRIM') avec une apostrophe au milieu (pour PRIM') qui ressemble un peu à une larme et qui semble seule et perdue au milieu de ce grand D 🥺. J'ai appris qu'un logo ne peut pas seulement être bon parce qu'il nous plait mais aussi parce qu'il a du sens.		
		Pour la palette de couleurs, j'ai choisi des couleurs bleues foncées, très désaturées et pas très gaies. Croyez moi, vivre une semaine avec ces couleurs est très déprimant 😅.
		Enfin nous avons pu passer à la partie la plus sympa : les posters et les mockups 😍. L'objectif était de donner vie à la marque en créant des produits, des affiches publicitaires, des éléments graphiques liés à la marque... Même si mon émotion était la tristesse, j'ai voulu créer des produits drôles comme des médicaments à prendre si on se sent trop bien, un guide pour être dépressif et une canette de larmes 100% naturelles. Malgré cette émotion, je me suis beaucoup amusé, et j'ai surtout appris beaucoup de choses 👍 !!!`,
		theme: themes.design,
		tags: [tags.design.branding, tags.design.tumo],
		id: "0",
		dates: {
			debut: {
				mois: "07",
				annee: "2023",
			},
			fin: {
				mois: "07",
				annee: "2023",
			},
		},
		lien: "https://www.behance.net/gallery/185124543/Design-branding-emotion",
		imagePrincipale: [{ original: branding_emotion_image_principale }],
		imagePrincipalePosition: "left",
		images: [
			{ original: branding_emotion_image_1 },
			{ original: branding_emotion_image_2 },
			{ original: branding_emotion_image_3 },
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
		id: "1",
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
		lien: "https://nicolas-frzt.github.io/to-do-list/",
		imagePrincipale: [{ original: todo_list_image_principale }],
		imagePrincipalePosition: "left",
		images: [{ original: todo_list_image_1 }, { original: todo_list_image_2 }],
	},
	{
		nom: "Documentaire modelisation 3D",
		description: `J'ai réalisé ce projet durant un stage à Tumo, une organisation de la région pour apprendre les compétences du numérique aux jeunes. Ce stage avait comme objectif la création d'un documentaire de 3min maximum sur le métier de concepteur 3D. Tumo participait à un concours (Filme le métier qui te plaît) qui est organisé chaque année avec comme objectif de faire concourir des jeunes pour qu'ils présentent un métier en vidéo. Nous étions une dizaine jeunes à participer à ce stage.		
		Après avoir analysé plusieurs documentaires, nous sommes allés rendre visite à deux entreprises de modélisation 3D, SWARM et DIWI, toutes deux situées dans le campus de Tumo. Nous avons visité les lieux, posé des questions aux employés et observé certaines activités afin d'en apprendre plus sur le métier de concepteur 3D 🖥️.		
		Ensuite, nous avons réfléchi à la façon dont nous allions pouvoir présenter le métier. Nous devions penser à ce que nous voulions que les employés disent, aux plans que nous allions intégrer, aux éléments graphiques... Nous avons voulu faire un documentaire fictionnel avec une petite histoire qui explique la raison pour laquelle nous avions besoin d'utiliser la modélisation 3D (et parce que c'est drôle hihihi 😁).		
		Lorsque notre storyboard fut prêt, nous nous sommes répartis les rôles : cadreur, réalisateur, ingénieur du son... La journée de tournage fut très intense 🥵 car nous avions beaucoup de plans à tourner et nous voulions que tout soit parfait ⭐. Les employés de SWARM et de DIWI étaient vraiment très sympathiques et je les remercie du temps qu'ils nous ont accorder.		
		Pour finir, nous avions une journée de montage. J'ai décidé de me mettre en binome avec une amie : cela permet de travailler 2 fois plus vite sur certaines tâches et d'avoir un point de vue critique différent. Au final je suis très fier du résultat 😄. J'ai appris beaucoup de choses pendant cette semaine autant sur le métier de concepteur 3D que sur les étapes de la création d'un film.		
		Bien entendu, nous nous sommes rendus à la cérémonie de remise des prix qui était au Grand Rex à Paris 🤯 !!! Les films proposés par certains candidats étaient vraiment époustouflants 🤩 mais nous n'avons malheuresement pas gagné de prix 🥲 (comme lot de consolation on a eu des Kitkat je trouve que c'est déjà bien 🤣).`,
		theme: themes.films,
		tags: [
			tags.films.tournage,
			tags.films.montage,
			tags.films.storyboard,
			tags.films.documentaire,
			tags.films.tumo,
		],
		id: "2",
		dates: {
			debut: {
				mois: "04",
				annee: "2023",
			},
			fin: {
				mois: "04",
				annee: "2023",
			},
		},
		lien: "https://www.youtube.com/watch?v=guae-KkdtCQ",
		imagePrincipale: [{ original: documentaire_3D_image_principale }],
		imagePrincipalePosition: "center",
		video: "https://www.youtube.com/embed/guae-KkdtCQ?si=YMsIUFy9N2KbRZ50",
	},
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
		id: "3",
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
		lien: "https://nicolas-frzt.github.io/choixpeau-magique/",
		imagePrincipale: [{ original: choixpeau_magique_image_principale }],
		imagePrincipalePosition: "center",
		images: [
			{ original: choixpeau_magique_image_1 },
			{ original: choixpeau_magique_image_2 },
			{ original: choixpeau_magique_image_3 },
			{ original: choixpeau_magique_image_4 },
			{ original: choixpeau_magique_image_5 },
		],
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
		id: "4",
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
		lien: "https://www.behance.net/gallery/185123615/Design-architecture",
		imagePrincipale: [{ original: architecture_image_principale }],
		imagePrincipalePosition: "center",
		images: [
			{ original: architecture_image_1 },
			{ original: architecture_image_2 },
		],
	},
	{
		nom: "Motifs",
		description: `J’ai réalisé ce projet dans mon activité d’informatique organisée par ma région (du nom de Tumo). Le but de Tumo est de former les jeunes aux compétences du numérique (on n’a pas tous les mêmes activités extra-scolaires 😂). Ils proposent différentes thématiques (que vous pouvez retrouver sur leur site) et, après avoir réalisé une activité de découverte de chacune d’entre elles, les jeunes peuvent choisir 3 thématiques pour faire des activités et des projets avancés sur la thématique. Parmi ces 3 activités, j’ai donc choisis le design graphique (évidemment ☺️).
        Le premier projet sur lequel nous devions travailler était la réalisation de motifs. C’était vraiment très difficile mais très plaisant à réaliser. Effectivement j’ai, pour la première fois de ma vie, utilisé Adobe Illustrator 😍. C’est vraiment un logiciel incroyable mais que je ne peux malheureusement pas m’acheter 💸. Alors, quel plaisir de pouvoir l’utiliser à Tumo !         
        Il fallait tout d’abord créer la forme initiale, en partant d’une esquisse sur papier. Ensuite il fallait étudier la fréquence à laquelle la forme allait se répéter. Et, après avoir choisi si on colorait l’intérieur ou les bordures des formes, il était nécessaire de créer la palette de couleurs. Aidé de Adobe Colors et de Coolors, j’ai pu étudier les différents types de palettes : monochromes, triadiques, complémentaire… c’est une partie du design très intéressante 👍.        
        Finalement, j’ai réalisé 3 versions différentes, en utilisant la même forme de départ sur chacune des versions mais en faisant varier la fréquence et les couleurs. Je trouve le résultat très sympathique, cependant je ne porterais pas un T-Shirt avec ce motif 🤣.`,
		theme: themes.design,
		tags: [tags.design.illustrator, tags.design.vecteur, tags.design.tumo],
		id: "5",
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
		lien: "https://www.behance.net/gallery/185124027/Motifs",
		imagePrincipale: [{ original: motifs_image_principale }],
		imagePrincipalePosition: "center",
		images: [{ original: motifs_image_1 }, { original: motifs_image_2 }],
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
		id: "6",
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
		lien: "https://nicolas-frzt.github.io/lignes-de-bus-tcl/",
		imagePrincipale: [{ original: tcl_image_principale }],
		imagePrincipalePosition: "left",
		images: [{ original: tcl_image_1 }],
	},
	{
		nom: "Le braquage",
		description: `J'ai réalisé ce projet dans le cadre d'un LAB de cinéma à Tumo, un centre de formation pour les jeunes aux compétences du numérique.		
		L'objectif était de créer un petit court-métrage 🤩. Comme base, nous avions juste un dialogue entre deux personnages que nous devions utiliser dans le film. A partir de cela, nous avons inventé toute l'histoire ! Nous étions 4 ados accompagnés par 2 professionnels du cinéma et nous avons chacun partagé et mélangé nos idées.		
		Nous avons commencé par créer un storyboard comprenant une case pour chaque plan avec les angles de prises de vue, les dialogues, les accessoires nécessaires et toutes autres instructions pour le caméraman 🎥.		
		Après avoir appris notre texte, nous avons pu nous rendre sur le lieu de tournage et filmer nos scènes. Nous étions tous acteurs et nous avons donc dû apprendre à nous mettre dans la peau des personnages 😉. A certains moments c'était vraiment hyper dûr de ne pas rigoler 🤣. Quand nous n'étions pas dans la scène, nous nous relayions à la place du caméraman et du réalisateur qui donnait des ordres et des conseils aux acteurs. C'était vraiment hyper intéressant de pouvoir tester tous les rôles 👍.		
		Quand toutes les scènes ont été tournées, nous sommes passé chacun de notre côté à la partie montage sur Adobe Première Pro. Nous n'avions qu'une séance de 2 heures pour tout monter, alors il ne fallait pas trainer 🤯. Nous étions tous vraiment très fiers du résultat et de tout ce que nous avions appris à faire.`,
		theme: themes.films,
		tags: [
			tags.films.tournage,
			tags.films.acteur,
			tags.films.montage,
			tags.films.storyboard,
			tags.films.tumo,
		],
		id: "7",
		dates: {
			debut: {
				mois: "01",
				annee: "2023",
			},
			fin: {
				mois: "02",
				annee: "2023",
			},
		},
		lien: "https://www.youtube.com/watch?v=8TjOhwCepHM",
		imagePrincipale: [{ original: le_braquage_image_principale }],
		imagePrincipalePosition: "center",
		video: "https://www.youtube.com/embed/8TjOhwCepHM?si=oo_2odxqdOWk44Fv",
	},
	{
		nom: "Branding chocolaterie",
		description: `Durant les vacances d'été, j'ai décidé de passer une semaine sur des "projets" (je suis le seul à me dire ça mdr). J'avais dédié chaque jour à un thème particulier et l'objectif était de finaliser un projet avant la fin de la journée. Autant dire que c'était assez court ⌚. J'ai réalisé certains projets dans des thèmes que je ne connaissais pas du tout (modélisation 3D par exemple) ce qui m'a permis d'apprendre les bases et de voir si ça m'intéressait. J'ai aussi réalisé d'autres projets dans des thèmes que j'avais déjà pratiqué (ce qui est ici le cas avec le design) ce qui m'a permis de réaliser de plus petits projets en parallèles de plus grands projets.		
		J'ai demandé à mes parents de m'imaginer une entreprise et de m'en donner ses caractéristiques. Gourmands comme ils sont 😋, l'entreprise fut une chocolaterie de chocolat de qualité avec les couleurs vert et marron. Leur description était très courte et m'a donc permis de laisser place à mon imagination.		
		Tout d'abord, j'ai commencé par le nom de l'entreprise. J'ai eu plusieurs idées mais je suis parti sur "Kyoko". L'histoire derrière ce nom est la suivante (accrochez-vous bien 🥱) : le cacao (ingrédient principal du chocolat) est majoritairement produit au Ghana, un pays d'Afrique de l'Ouest. En Twi, la langue officielle du Ghana, chocolat se dit "[kyoko]late". J'ai trouvé que ce nom était adapté à cette entreprise car le lieu d'origine de la matière première du chocolat indique qu'il est de qualité.		
		Ensuite, j'ai créé le logo. J'ai fait beaucoup de tests, notamment en ajoutant comme élément graphique une fêve de cacao pour renforcer cette idée de matière première. Finalement je suis resté sur un design beaucoup plus simple et chic avec cette police d'écriture qui peut faire penser à celle de Lindt.		
		Enfin, j'ai réalisé des mockups et des posters afin de donner vie à la marque ⭐. Les mockups sont des objets que la marque pourrait produire (ici des tablettes de chocolat et du cacao en poudre). Pour les posters, j'ai eu besoin de rechercher des images d'illustrations sur des banques d'images libres de droits en ligne.		
		Durant ce "challenge" j'ai dû faire face à un problème que je n'avais pas envisagé : les logiciels. Si vous regardez mes autres projets de design, vous trouverez des projets réalisés avec Illustrator, Photoshop et d'autres outils payants. Cependant, j'ai réalisé ce projet chez moi, ce qui signifie sans aucun de ces outils (et oui je ne suis pas Picsou 💰). J'ai dû tout réaliser sur Figma, un logiciel qui est plutôt spécialisé dans le desgin de maquettes d'applis mobiles / sites web. Je n'avais pas non plus de licence sur des banques de mockups. Je n'ai pu en trouver que quelques-uns avec une qualité et une facilité d'utilisation à désirer... 😬		
		Finalement, je suis assez fier du résultat même si je trouve que je suis parti un peu trop dans une chocolaterie de luxe plutôt que dans une chocolaterie de qualité.`,
		theme: themes.design,
		tags: [tags.design.branding, tags.design.projet_perso],
		id: "8",
		dates: {
			debut: {
				mois: "08",
				annee: "2023",
			},
			fin: {
				mois: "08",
				annee: "2023",
			},
		},
		lien: "https://www.behance.net/gallery/185124835/Design-chocolaterie",
		imagePrincipale: [{ original: chcolaterie_image_principale }],
		imagePrincipalePosition: "left",
		images: [
			{ original: chcolaterie_image_1 },
			{ original: chcolaterie_image_2 },
			{ original: chcolaterie_image_3 },
			{ original: chcolaterie_image_4 },
		],
	},
	{
		nom: "Bande annonce film",
		description: `J'ai réalisé ce projet dans le cadre d'un LAB de cinéma à Tumo, un centre de formation pour les jeunes aux compétences du numérique.		
		J'avais à ma disposition le court-métrage "Tao" qui durait environ 15 minutes. L'objectif de ce LAB était de découvrir le montage vidéo 🎥. Pour ma part, j'avais déjà fait du montage vidéo chez moi sur DaVinci Resolve mais j'ai ici dû découvrir un nouveau logiciel de montage vidéo : Première Pro. C'est le logiciel de montage le plus utilisé et je comprends tout à fait pourquoi : sa facilité d'utilisation et sa multitude d'option le rendent très efficace 😀 !		
		Durant ce LAB, nous devions réaliser une bande annonce pour ce film. Il m'a donc fallu sélectionner certains passages du film. L'objectif d'une bande annonce est de donner envie au spectateur de regarder le film. Il faut donc sélectionner des passages à sensations mais il ne faut pas spoiler tout le film 🤭 !!! Une bande annonce doit être courte et chaque seconde doit être minutieusement réfléchie. Pour attirer au maximum le spectateur, il faut que les plans s'enchaînent rapidement, que la musique soit entraînante et qu'une intringue soit laissée chez le spectateur. J'ai donc suivi tous ces conseils pour réaliser ma bande annonce.		
		Mon résultat final est plutôt pas mal malgré le fait que le changement de musique soit assez brusque 😲.`,
		theme: themes.films,
		tags: [tags.films.montage, tags.films.bande_annonce, tags.films.tumo],
		id: "9",
		dates: {
			debut: {
				mois: "06",
				annee: "2022",
			},
			fin: {
				mois: "07",
				annee: "2022",
			},
		},
		lien: "https://youtu.be/GRRW0yVd5F4",
		imagePrincipale: [{ original: bande_annonce_film_image_principale }],
		imagePrincipalePosition: "center",
		video: "https://www.youtube.com/embed/GRRW0yVd5F4?si=fTar3TABWJvVwuQM",
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
		id: "10",
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
		lien: "https://www.behance.net/gallery/185124339/Design-interface-appli-de-straming-musical",
		imagePrincipale: [{ original: app_musique_image_principale }],
		imagePrincipalePosition: "top",
		images: [
			{ original: app_musique_image_2 },
			{ original: app_musique_image_3 },
			{ original: app_musique_image_4 },
			{ original: app_musique_image_5 },
		],
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
		id: "11",
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
		imagePrincipale: [{ original: portfolio_image_principale }],
		imagePrincipalePosition: "center",
		images: [
			{ original: portfolio_image_1 },
			{ original: portfolio_image_2 },
			{ original: portfolio_image_3 },
			{ original: portfolio_image_4 },
			{ original: portfolio_image_5 },
		],
	},
	{
		nom: "Film d'horreur",
		description: `J'ai réalisé ce projet lors d'un Lab à Tumo, une organisation de la région pour enseigner les compétences du numérique aux jeunes.		
		Nous avions les rushs (tout ce qui a été filmé) d'un film d'horreur 🧟. L'objectif était donc de monter le film, chacun sur notre ordinateur. Nous devions couper les passages indésirables, chosir quels plans nous allions utiliser et les faire se succéder. C'était la première fois que j'utilisais Adobe Première Pro 😍 mais ça ne m'a pas beaucoup changé de mon ancien logiciel de montage, DaVinci Resolve.
		Il fallait également ajouter des éléments sonores, des musiques de fond et bien les faire s'accorder avec l'image 🥵.		
		Pour une fois, je ne suis pas entièrement satisfait du résultat car je trouve que la peur ne se ressent pas assez. Mais il y a un début à tout 😉 !`,
		theme: themes.films,
		tags: [tags.films.montage, tags.films.tumo],
		id: "12",
		dates: {
			debut: {
				mois: "06",
				annee: "2022",
			},
			fin: {
				mois: "07",
				annee: "2022",
			},
		},
		lien: "https://www.youtube.com/watch?v=u5N1MAai5nE",
		imagePrincipale: [{ original: film_horreur_image_principale }],
		imagePrincipalePosition: "center",
		video: "https://www.youtube.com/embed/u5N1MAai5nE?si=PjCRae4Bk1b4K1Bb",
	},
	{
		nom: "Carte interactive",
		description: `J’ai réalisé mon stage de troisième (et oui je ne suis pas déscolarisé) dans l’entreprise Heva qui traite des données médicales 💉 sensibles. Passionné par le développement web comme je suis, j’ai été obligé de me coltiner des développeurs à longueur de journée (non je rigole ils étaient hypers sympas ☺️). Parfois, ces développeurs ont besoin de représenter les données de façon cartographiques. Pour cela, ils utilisent Leaflet, une bibliothèque Javascript open source 😍. 
        J’ai donc décidé de, moi aussi, créer ma propre carte avec Leaflet. Cette dernière représente la densité de population de ma ville (Lyon pour les intimes 😏) en fonction des arrondissements. Les arrondissements sont donc colorés plus ou moins foncés en fonction du nombre d’habitants au kilomètre carré. De plus quand on clique sur un des arrondissements on peut avoir les données précises (magie 🪄).        
        Leaflet est assez facile à prendre en main et les nombreux tutoriels sont très utiles. Mais je pense que ça peut être assez compliqué sur de plus gros projets.`,
		theme: themes.programmation,
		tags: [
			tags.programmation.leaflet,
			tags.programmation.javascript,
			tags.programmation.database,
		],
		id: "13",
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
		lien: "https://nicolas-frzt.github.io/leaftlet/",
		imagePrincipale: [{ original: leaflet_image_principale }],
		imagePrincipalePosition: "center",
		images: [{ original: leaflet_image_1 }],
	},
];

export default creations;
