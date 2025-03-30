import React, { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { downloadCVButtonTexts } from '../../assets/Texts/DownloadCVButtonTexts';

import { LangContext } from '../../App';
import { DownloadCVModal } from './components/DownloadCVModal';

interface DownloadCVButtonProps {}

export const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({}) => {
	const LanguageContext = useContext(LangContext);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<motion.button
				onClick={handleClick}
				className="inline-flex mt-2 mb-20 text-highlightColor text-left hover:underline"
				transition={{ type: 'spring', duration: 2 }}
				key={LanguageContext?.activeLanguage!}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.9 }}
				exit={{ opacity: 0 }}>
				{downloadCVButtonTexts.downloadCV[LanguageContext?.activeLanguage!]}
			</motion.button>
			<AnimatePresence>
				{isModalOpen && <DownloadCVModal handleClose={handleClose} />}
			</AnimatePresence>
		</>
	);
};
