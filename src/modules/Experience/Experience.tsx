import React, { useContext } from 'react';
import { useObserver } from '../../Hooks';
import { Element } from 'react-scroll';
import { ExperienceCard } from '../components/ExperienceCard';
import { AnimatedBlock } from '../../Components/AnimatedBlock';
import { LangContext } from '../../App';
import { experience } from '../../assets/Experience';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
	const LanguageContext = useContext(LangContext);
	const ref = useObserver('experience');
	return (
		<>
			<AnimatedBlock trigger={LanguageContext?.activeLanguage!}>
				<Element name="experience">
					<section ref={ref}>
						<h1>Experience</h1>
						<ul className="mt-5">
							{experience.map((exp) => (
								<ExperienceCard experience={exp} key={exp.id} />
							))}
						</ul>
					</section>
				</Element>
			</AnimatedBlock>
		</>
	);
};
