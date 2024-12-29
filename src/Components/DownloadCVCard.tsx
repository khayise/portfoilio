import React, { useEffect } from 'react';
import { ICV } from '../assets/CVsList';
import { useActiveCVStore } from '../stores/activeCVStore';

interface DownloadCVCardProps {
	CV: ICV;
	index: number;
}

export const DownloadCVCard: React.FC<DownloadCVCardProps> = ({ CV, index }) => {
	const { activeIndex, setActiveIndex } = useActiveCVStore();

	useEffect(() => {
		console.log(activeIndex);
	}, [activeIndex]);
	return (
		<>
			<button
				disabled={CV.disabled}
				onClick={() => setActiveIndex(index)}
				className={`${activeIndex === index ? 'glass-background' : 'hover:bg-backHilghligt'} disabled:opacity-25 duration-100 cursor-pointer flex justify-center items-center p-2 rounded-md w-full sm:w-20 h-20 text-center`}>
				{CV.language}
			</button>
		</>
	);
};
