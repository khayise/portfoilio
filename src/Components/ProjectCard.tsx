import React, { useContext } from 'react';
import { IProject } from '../assets/Projects';
import { LangContext } from '../App';

interface Props {
	project: IProject;
	index: number;
	hoveredIndex: number | null;
	setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ProjectCard: React.FC<Props> = ({ project, index, hoveredIndex, setHoveredIndex }) => {
	const LanguageContext = useContext(LangContext);
	return (
		<li
			onMouseEnter={() => setHoveredIndex(index)}
			onMouseLeave={() => setHoveredIndex(null)}
			className={`${hoveredIndex !== null && hoveredIndex !== index ? '__dimmed' : ''} duration-200 mt-7`}>
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				<div className="project-card flex flex-col md:flex-row items-start md:gap-5">
					<div className="h-24 mt-1">
						<img
							className="h-20 md:h-10 min-w-14 w-auto object-cover border-2 border-transparent rounded-md"
							src={project.img}
							alt={project.title + '_image'}
						/>
					</div>
					<div className="">
						<span className="font-medium text-lg project-card--title text-accentColor">
							{project.title}
						</span>
						<p className="mt-1 text-sm text-baseColor">
							{project.text[LanguageContext?.activeLanguage!]}
						</p>
						{project.technologys && (
							<ul className="flex gap-2 mt-5 items-center flex-wrap">
								{project.technologys.map((tech) => {
									return (
										<li
											key={tech}
											className="px-2 py-1 rounded-2xl bg-backAccent flex items-center">
											<span className="text-highlightColor text-xs text-nowrap">{tech}</span>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			</a>
		</li>
	);
};
