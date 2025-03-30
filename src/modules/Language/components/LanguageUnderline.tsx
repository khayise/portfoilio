import { motion } from 'framer-motion';
import React from 'react';

interface LanguageUnderlineProps {}

export const LanguageUnderline: React.FC<LanguageUnderlineProps> = ({}) => {
	return (
		<>
			<motion.div
				layoutId="langugeUnderline"
				className="w-full h-[2px] rounded-md bg-highlightColor"
			/>
		</>
	);
};
