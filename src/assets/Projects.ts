export interface IProject {
	readonly title: string;
	readonly text: { EN: string; DE: string };
	readonly img: string;
	readonly link?: string;
	readonly scrollTo?: string;
	readonly technologys?: string[];
}

const projects: IProject[] = [
	{
		title: 'Lethai cars',
		text: {
			EN: `Lethai cars is a SPA Car Rental Web Application.
			Here I created the interface using React with TypeScript,
			implemented dynamic filtering and search by parameters: price, model, rental location and
			developed a cost calculation feature. I integrated also a Mongo DB database to 
			keep whole information on the cloud.
			To increase a speed of development I have used a component library "Ant Design"`,
			DE: `Lethai Cars ist eine SPA-Webanwendung für die Autovermietung.
				Hier habe ich die Benutzeroberfläche mit React und TypeScript erstellt,
				dynamische Filterung und Suche nach Parametern wie Preis, Modell
				 und Mietstandort implementiert sowie eine Kostenberechnungsfunktion entwickelt.
				Ich habe auch eine MongoDB-Datenbank integriert, um alle Informationen in der Cloud zu speichern.
				Um die Entwicklungsgeschwindigkeit zu erhöhen, habe ich die Komponentenbibliothek "Ant Design" verwendet.`,
		},
		img: 'https://pbs.twimg.com/media/GgtHDGoWMAA17Md?format=jpg&name=4096x4096',
		link: 'https://lethai-cars.vercel.app/',
		technologys: ['React', 'Ant Design', 'Mongo DB', 'Zustand', 'React Query'],
	},
	{
		title: 'ReactPizza',
		text: {
			EN: `By developing this app I created a landing page and an online ordering system using React,
			implemented state management for the cart using Redux Toolkit,
			developed a module for selecting toppings and calculating the final order cost and
			set up order submission to the server via API.`,

			DE: `Durch die Entwicklung dieser App habe ich eine Landingpage und ein Online-Bestellsystem mit React erstellt,
			die Zustandsverwaltung des Warenkorbs mit Redux Toolkit implementiert,
			ein Modul für die Auswahl von Belägen und die Berechnung der endgültigen Bestellkosten entwickelt und
			die Übermittlung von Bestellungen an den Server über eine API eingerichtet.`,
		},
		img: 'https://www.tageskarte.io/fileadmin/content/_processed_/b/5/csm_Dodo_3e7bd71d2b.jpg',
		technologys: ['React', 'Redux', 'Node JS', 'Express', 'MongoDB'],
		link: 'https://react-pizza-kappa-two.vercel.app/',
	},
	{
		title: 'Synegry Cinema',
		text: {
			EN: `Start your cinematic journey with Synergy Cinema today! Sign
			up for a free trial and gain access to our extensive library of films.
			Whether you are planning a movie night with friends or a cozy evening solo,
			Synergy Cinema is your go-to online theater for unforgettable film experiences.`,

			DE: `Beginnen Sie noch heute Ihre filmische Reise mit Synergy Cinema! Melden Sie sich
				für eine kostenlose Testversion an und erhalten Sie Zugriff auf unsere umfangreiche
				Filmbibliothek. Ob für einen Filmabend mit Freunden oder einen gemütlichen Solo-Abend
				– Synergy Cinema ist Ihr Online-Kino für unvergessliche Filmerlebnisse.`,
		},
		img: 'https://static.tildacdn.com/tild3631-3836-4131-a636-636635643635/Okko_logo.jpg',
		technologys: ['React', 'Redux', 'Node JS', 'Express', 'Postgres', 'Tailwind'],
	},
];

export default projects;
