import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { aboutText } from '../assets/Texts/AboutTexts';
import { LangContext } from '../App';

import { useObserver } from '../Hooks';
import { HandEmoji } from './HandEmoji';
import { AnimatedBlock } from './AnimatedBlock';

interface Props {}

export const About: React.FC<Props> = ({}) => {
	const ref = useObserver('about');
	const LanguageContext = useContext(LangContext);
	return (
		<>
			<Element name="about">
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
					ref={ref}
					className="text-baseColor">
					<AnimatedBlock trigger={LanguageContext?.activeLanguage!}>
						<h1 className="text-3xl mb-2 text-accentColor">
							{aboutText.gretting[LanguageContext?.activeLanguage!]}
							<HandEmoji />
						</h1>

						<h2 className="text-xl text-accentColor">
							{aboutText.myName[LanguageContext?.activeLanguage!]}
						</h2>
						<p>{aboutText.aboutMe[LanguageContext?.activeLanguage!]}</p>

						<h2 className="text-xl mt-4 text-accentColor">
							{aboutText.techList.title[LanguageContext?.activeLanguage!]}
						</h2>

						<p className="mt-2">
							<span className="text-accentColor">JavaScript & TypeScript:</span>
							{aboutText.techList.javascript_typescript[LanguageContext?.activeLanguage!]}
						</p>

						<p className="mt-2">
							<span className="text-accentColor">React & Next.js:</span>
							{aboutText.techList.react_next[LanguageContext?.activeLanguage!]}
						</p>

						<p className="mt-2">
							<span className="text-accentColor">Tailwind CSS & SASS:</span>
							{aboutText.techList.css[LanguageContext?.activeLanguage!]}
						</p>

						<p className="mt-2">
							<span className="text-accentColor">Node.js & Express: </span>
							{aboutText.techList.backend[LanguageContext?.activeLanguage!]}
						</p>

						<p className="mt-2">
							<span className="text-accentColor">Database Management:</span>
							{aboutText.techList.databases[LanguageContext?.activeLanguage!]}
						</p>
					</AnimatedBlock>
				</motion.section>
			</Element>
		</>
	);
};
