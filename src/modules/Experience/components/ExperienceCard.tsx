import React, { useContext } from 'react';
import { LangContext } from '../../../App';

interface ExperienceCardProps {
	experience: IExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
	const languageContext = useContext(LangContext);
	return (
		<>
			<div className="p-4 rounded-md cursor-default project-card">
				<h2 className="inline-block title">{experience.company}</h2>
				<span className="ml-4 text-xs text-baseColor">
					{experience.dateStart[languageContext?.activeLanguage!]} -{' '}
					{experience.dateEnd[languageContext?.activeLanguage!]}
				</span>
				<p className="mt-2 text-sm text-baseColor">
					{experience.description[languageContext?.activeLanguage!]}
				</p>
			</div>
		</>
	);
};
