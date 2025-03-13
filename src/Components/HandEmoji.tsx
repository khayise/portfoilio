import { motion } from 'framer-motion';
import React from 'react';

interface HandEmojiProps {}

export const HandEmoji: React.FC<HandEmojiProps> = ({}) => {
	return (
		<>
			<motion.div
				className="inline-block origin-bottom-right"
				initial={{ rotate: 0 }}
				animate={{ rotate: [0, 25, -20, 0] }}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					repeatDelay: 2,
				}}>
				&#x1F44B;
			</motion.div>
		</>
	);
};
