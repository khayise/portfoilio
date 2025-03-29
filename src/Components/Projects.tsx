import React, { useState } from 'react';
import { useObserver } from '../Hooks';
import { Element } from 'react-scroll';
import { ProjectCard } from './ProjectCard';

import projects from '../assets/Projects';

interface Props {}

export const Projects: React.FC<Props> = ({}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const ref = useObserver('projects');

	return (
		<>
			<Element name="projects">
				<section className="mt-20" ref={ref}>
					<h1>Projects</h1>
					<ul className="overflow-hidden">
						{projects.map((project, index) => {
							return (
								<ProjectCard
									index={index}
									hoveredIndex={hoveredIndex}
									setHoveredIndex={setHoveredIndex}
									key={project.title}
									project={project}
								/>
							);
						})}
					</ul>
				</section>
			</Element>
		</>
	);
};
