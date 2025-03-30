import React, { createContext, useEffect, useState } from 'react';
import { About } from './modules/About/About';
import { Cursor } from './components/Cursor';
import { SideHeader } from './components/SideHeader';
import { Projects } from './modules/Projects/Projects';
import { LanguageToggle } from './modules/Language/LanguageToggle';
import { Experience } from './modules/Experience/Experience';

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
					<div className="flex md:flex-row flex-col justify-between gap-40 md:gap-10 bg-back px-12 md:px-24">
						<Cursor />
						<SideHeader />
						<main className="flex flex-col gap-20 md:pt-24 w-full md:w-1/2">
							<About />
							<Experience />
							<Projects />
						</main>
					</div>
					<div className="bg-back h-20"></div>
					{/* second screen */}
				</NavigationContext.Provider>
			</LangContext.Provider>
		</>
	);
}

export default App;
