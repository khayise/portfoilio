import React, { useContext } from 'react';
import { NavigationElement } from './NavigationElement';
import { LangContext } from '../App';
import { navigationTexts } from '../assets/Texts/NavigationTexts';

interface Props {}

export const Navigation: React.FC<Props> = ({}) => {
	const LanguageContext = useContext(LangContext);
	return (
		<>
			<nav className="flex flex-col gap-y-3">
				<NavigationElement
					text={navigationTexts.about[LanguageContext?.activeLanguage!]}
					linkTo="about"
				/>
				<NavigationElement
					text={navigationTexts.projects[LanguageContext?.activeLanguage!]}
					linkTo="projects"
				/>
			</nav>{' '}
		</>
	);
};
