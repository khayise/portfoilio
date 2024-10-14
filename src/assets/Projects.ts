export interface IProject {
	readonly title: string;
	readonly text: string;
	readonly img: string;
	readonly link?: string;
	readonly scrollTo?: string;
	readonly technologys?: string[];
}

const projects: IProject[] = [
	{
		title: 'ReactPizza',
		text: 'Welcome to React Pizza, the ultimate destination for pizza lovers in the heart of New York City! Our passion for crafting the perfect pizza shines through in every bite. At React Pizza, we believe that great pizza starts with the freshest ingredients, a secret blend of spices, and a love for traditional recipes combined with modern techniques.',
		img: 'https://www.tageskarte.io/fileadmin/content/_processed_/b/5/csm_Dodo_3e7bd71d2b.jpg',
		technologys: ['React', 'Redux', 'Node JS', 'Express', 'MongoDB'],
		link: 'https://react-pizza-kappa-two.vercel.app/',
	},
	{
		title: 'Synegry Cinema',
		text: 'Start your cinematic journey with Synergy Cinema today! Sign up for a free trial and gain access to our extensive library of films. Whether you are planning a movie night with friends or a cozy evening solo, Synergy Cinema is your go-to online theater for unforgettable film experiences.',
		img: 'https://static.tildacdn.com/tild3631-3836-4131-a636-636635643635/Okko_logo.jpg',
		technologys: ['React', 'Redux', 'Node JS', 'Express', 'Postgres', 'Tailwind'],
	},
];

export default projects;
