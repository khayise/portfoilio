import React, { useContext } from 'react';
import { useActiveCVStore } from '../stores/activeCVStore';
import { CVsList } from '../assets/CVsList';
import { downloadCVButtonTexts } from '../assets/Texts/DownloadCVButtonTexts';
import { LangContext } from '../App';

interface DownloadCVLinkProps {
	onClick: () => void;
}

export const DownloadCVLink: React.FC<DownloadCVLinkProps> = ({ onClick }) => {
	const LanguageContext = useContext(LangContext);
	const { activeIndex } = useActiveCVStore();
	return (
		<>
			<a
				onClick={onClick}
				download={'CV'}
				href={CVsList[activeIndex].href}
				className="bg-backHilghligt active:opacity-50 mt-10 p-4 rounded-md w-full text-center duration-200 hover:glass-background active:scale-95">
				{downloadCVButtonTexts.download[LanguageContext?.activeLanguage!]}
			</a>
		</>
	);
};
