import React, { useContext } from 'react';
import { LangContext, TLanguage } from '../App';
import { LanguageUnderline } from './LanguageUnderline';

interface LanguageButtonProps {
	language: TLanguage;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ language }) => {
	const Lang = useContext(LangContext);

	const handleChangeLanguage = () => {
		Lang?.setActiveLanguage(language);
		localStorage.setItem('pageLang', language!);
	};

	return (
		<>
			<div>
				<button
					onClick={handleChangeLanguage}
					className={`${Lang?.activeLanguage === language ? 'active-lang' : 'unactive-lang'}`}>
					{language}
				</button>
				{Lang?.activeLanguage === language && <LanguageUnderline />}
			</div>
		</>
	);
};
