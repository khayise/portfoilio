import React, { useContext } from 'react';
import { LangContext } from '../App';
import { downloadCVModalTexts } from '../assets/Texts/DownloadCVModalTexts';

interface DownloadCVLabelProps {}

export const DownloadCVLabel: React.FC<DownloadCVLabelProps> = ({}) => {
	const LanguageContext = useContext(LangContext);
	return (
		<>
			<span className="text-left self-start">
				{downloadCVModalTexts.chooseLanguage[LanguageContext?.activeLanguage!]}
			</span>
		</>
	);
};
