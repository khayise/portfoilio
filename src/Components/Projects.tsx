import React, { useState } from 'react';
import { useObserver } from '../Hooks';
import { Element } from 'react-scroll';
import { ProjectCard } from './ProjectCard';

import projects from '../assets/Projects';
import { motion } from 'framer-motion';

interface Props {}

export const Projects: React.FC<Props> = ({}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const ref = useObserver('projects');

	return (
		<>
			<Element name="projects">
				<motion.section
					initial={{
						opacity: 0,
						x: 300,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.6, type: 'tween' }}
					className="mt-20"
					ref={ref}>
					<ul className="">
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
				</motion.section>
			</Element>
		</>
	);
};
