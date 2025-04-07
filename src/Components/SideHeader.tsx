import React, { useContext } from 'react';

import { headerText } from '../assets/Texts/HeaderTexts';

import { LangContext } from '../App';
import { AnimatedText } from './AnimatedText';
import { Navigation } from '../modules/Navigation/Navigation';
import { Contacts } from '../modules/Contacts/Contacts';

interface Props {}

export const SideHeader: React.FC<Props> = ({}) => {
	const LanguageContext = useContext(LangContext);
	return (
		<>
			<header
				className={`md:h-screen static w-full pb-4 md:w-1/2 md:sticky md:pb-12 md:pt-24 left-0 top-0 bg-back flex flex-col justify-between items-start`}>
				<div className="flex flex-col">
					<span className="font-main font-semibold text-accentColor text-5xl">Andrii Dedesh</span>
					<AnimatedText
						classNames="text-accentColor font-main text-xl font-light mt-3"
						text={headerText.developer[LanguageContext?.activeLanguage!]}
					/>
					{/* <DownloadCVButton /> */}
					<Navigation />
				</div>
				<Contacts />
			</header>
		</>
	);
};
