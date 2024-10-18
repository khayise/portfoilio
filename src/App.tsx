import React, { createContext, useEffect, useState } from 'react';
import { About } from './Components/About';
import { Cursor } from './Components/Cursor';
import { SideHeader } from './Components/SideHeader';
import { Projects } from './Components/Projects';
import { LanguageToggle } from './Components/LanguageToggle';

interface NavigationContext {
	activeNav: string;
	setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

export type TLanguage = 'EN' | 'DE' | null;
interface LangContext {
	activeLanguage: TLanguage;
	setActiveLanguage: React.Dispatch<React.SetStateAction<TLanguage>>;
}

export const NavigationContext = createContext<NavigationContext | null>(null);
export const LangContext = createContext<LangContext | null>(null);

function App() {
	const [activeNav, setActiveNav] = useState<string>('about');
	const [activeLanguage, setActiveLanguage] = useState<TLanguage | null>(null);

	useEffect(() => {
		const pageLang = localStorage.getItem('pageLang');
		if (pageLang === 'EN' || pageLang === 'DE') {
			setActiveLanguage(pageLang);
		} else {
			setActiveLanguage('EN');
		}
	}, []);

	return (
		<>
			<LangContext.Provider value={{ activeLanguage, setActiveLanguage }}>
				<NavigationContext.Provider value={{ activeNav, setActiveNav }}>
					<LanguageToggle />
					<div className="bg-back flex overflow-hidden flex-col md:flex-row justify-between px-12 md:px-24">
						<Cursor />
						<SideHeader />
						<main className="md:pt-24 w-full md:w-1/2">
							<About />
							<Projects />
						</main>
					</div>
					<div className="h-20 bg-back"></div>
					{/* second screen */}
				</NavigationContext.Provider>
			</LangContext.Provider>
		</>
	);
}

export default App;
