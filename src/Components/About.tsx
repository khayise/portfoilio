import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import { useObserver } from '../Hooks';

interface Props {}

export const About: React.FC<Props> = ({}) => {
	const ref = useObserver('about');

	return (
		<>
			<Element name="about">
				<section ref={ref} className="text-baseColor">
					<h1 className="text-3xl mb-2 text-accentColor">
						Hi there!
						<motion.div
							className="inline-block"
							initial={{ rotate: 0 }}
							animate={{ rotate: [0, 25, -20, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatDelay: 2,
							}}>
							&#x1F44B;
						</motion.div>
					</h1>
					<h2 className="text-xl text-accentColor">I'm Andrii</h2>
					<p>
						I am a dedicated front-end developer with a passion for creating engaging and
						user-friendly web applications. My experience spans a variety of technologies, allowing
						me to build robust and scalable solutions tailored to meet user needs.
					</p>
					<h2 className="text-xl mt-4 text-accentColor">Technical Skills:</h2>
					<p className="mt-2">
						<span className="text-accentColor">JavaScript & TypeScript:</span> Proficient in both
						JavaScript and TypeScript, I leverage their strengths to write clean, maintainable, and
						efficient code. TypeScript's static typing helps me catch errors early in the
						development process.
					</p>
					<p className="mt-2">
						<span className="text-accentColor">React & Next.js:</span> I have extensive experience
						using React to create dynamic user interfaces, and I utilize Next.js for building fast,
						server-rendered applications. I appreciate the benefits of server-side rendering for
						improving performance and SEO.
					</p>
					<p className="mt-2">
						<span className="text-accentColor">Tailwind CSS & SASS:</span> I enjoy using Tailwind
						CSS for rapid UI development, allowing for responsive designs without leaving my HTML.
						Additionally, I am skilled in SASS, enabling me to write modular and scalable
						stylesheets that enhance the maintainability of my projects.
					</p>
					<p className="mt-2">
						<span className="text-accentColor">Node.js & Express: </span>
						On the back-end, I work with Node.js and Express to create RESTful APIs and server-side
						logic. My understanding of asynchronous programming allows me to build efficient
						applications that handle multiple requests seamlessly.
					</p>
					<p className="mt-2">
						<span className="text-accentColor">Database Management:</span>I have hands-on experience
						with both MongoDB and PostgreSQL. I utilize MongoDB for flexible, document-based data
						storage, while PostgreSQL provides robust relational data management for applications
						requiring complex queries and data integrity.
					</p>
				</section>
			</Element>
		</>
	);
};
