import React, { createContext, useState } from 'react';
import { About } from './Components/About';
import { Cursor } from './Components/Cursor';
import { SideHeader } from './Components/SideHeader';
import { Projects } from './Components/Projects';

interface NavigationContext {
	activeNav: string;
	setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationContext = createContext<NavigationContext | null>(null);

function App() {
	const [activeNav, setActiveNav] = useState<string>('about');

	return (
		<>
			<div className="bg-back flex flex-col md:flex-row justify-between px-12 md:px-24">
				<Cursor />
				<NavigationContext.Provider value={{ activeNav, setActiveNav }}>
					<SideHeader />
					<main className="md:pt-24 w-full md:w-1/2 h-[200vh]">
						<About />
						<Projects />
					</main>
				</NavigationContext.Provider>
			</div>
			{/* <div className="h-screen bg-back"></div>  // second screen*/}
		</>
	);
}

export { NavigationContext };
export default App;
