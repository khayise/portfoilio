import React, { useContext } from 'react';
import { LangContext } from '../../../App';
import { downloadCVModalTexts } from '../../../assets/Texts/DownloadCVModalTexts';

interface DownloadCVLabelProps {}

export const DownloadCVLabel: React.FC<DownloadCVLabelProps> = ({}) => {
	const LanguageContext = useContext(LangContext);
	return (
		<>
			<span className="self-start text-left">
				{downloadCVModalTexts.chooseLanguage[LanguageContext?.activeLanguage!]}
			</span>
		</>
	);
};
