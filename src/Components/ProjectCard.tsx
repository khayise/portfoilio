import React, { useContext } from 'react';
import { IProject } from '../assets/Projects';
import { LangContext } from '../App';
import { motion } from 'framer-motion';

interface Props {
	project: IProject;
	index: number;
	hoveredIndex: number | null;
	setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ProjectCard: React.FC<Props> = ({ project, index, hoveredIndex, setHoveredIndex }) => {
	const LanguageContext = useContext(LangContext);

	const handleMouseEnter = (index: number) => {
		if (!/Mobi|Android/i.test(navigator.userAgent)) {
			setHoveredIndex(index);
		}
	};

	const handleMouseLeave = () => {
		if (!/Mobi|Android/i.test(navigator.userAgent)) {
			setHoveredIndex(null);
		}
	};

	return (
		<motion.li
			initial={{
				opacity: 0,
				scale: 0.9,
			}}
			whileInView={{
				opacity: 1,
				scale: 1,
			}}
			transition={{ type: 'spring' }}
			viewport={{ once: true, amount: 0.6 }}
			onMouseEnter={() => handleMouseEnter(index)}
			onMouseLeave={handleMouseLeave}>
			<a
				className={`${hoveredIndex !== null && hoveredIndex !== index ? '__dimmed' : ''} duration-200 mt-7`}
				href={project.link}
				target="_blank"
				rel="noopener noreferrer">
				<div className="flex md:flex-row flex-col items-start md:gap-5 project-card">
					<div className="mt-1 h-24">
						<img
							className="border-2 border-transparent rounded-md w-auto min-w-14 h-20 md:h-10 object-cover"
							src={project.img}
							alt={project.title + '_image'}
						/>
					</div>
					<div className="">
						<h2 className="title">{project.title}</h2>
						<p className="mt-1 text-sm text-baseColor">
							{project.text[LanguageContext?.activeLanguage!]}
						</p>
						{project.technologys && (
							<ul className="flex flex-wrap items-center gap-2 mt-5">
								{project.technologys.map((tech) => {
									return (
										<li
											key={tech}
											className="flex items-center bg-backAccent px-2 py-1 rounded-2xl">
											<span className="text-highlightColor text-xs text-nowrap">{tech}</span>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			</a>
		</motion.li>
	);
};
