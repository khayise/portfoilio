declare global {
	interface IExperience {
		id: number;
		company: string;
		dateStart: {
			EN: string;
			DE: string;
		};
		dateEnd: {
			EN: string;
			DE: string;
		};
		description: {
			EN: string;
			DE: string;
		};
	}
}

export {};
