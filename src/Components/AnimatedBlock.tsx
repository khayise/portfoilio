import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedBlockProps {
	trigger: string;
	children: React.ReactNode;
}

export const AnimatedBlock: React.FC<AnimatedBlockProps> = ({ trigger, children }) => {
	return (
		<>
			<motion.div
				key={trigger}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 2 }}>
				{children}
			</motion.div>
		</>
	);
};
