import React from 'react';
import { CVsList } from '../../../assets/CVsList';
import { DownloadCVCard } from './DownloadCVCard';

interface DownloadCVListProps {}

export const DownloadCVList: React.FC<DownloadCVListProps> = ({}) => {
	return (
		<>
			<ul className="flex sm:flex-row flex-col items-center gap-4 mt-4 min-w-[250px] overflow-hidden">
				{CVsList.map((CV, index) => (
					<DownloadCVCard CV={CV} index={index} />
				))}
			</ul>
		</>
	);
};
