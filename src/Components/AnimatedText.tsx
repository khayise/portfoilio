import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
	text: string;
	classNames?: string;
	as?: 'p' | 'h1' | 'h2';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, classNames, as }) => {
	if (!as) {
		return (
			<>
				<motion.span
					inputMode="text"
					className={classNames}
					transition={{ type: 'spring', duration: 2 }}
					key={text}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					{text}
				</motion.span>
			</>
		);
	}
	if (as === 'p') {
		return (
			<>
				<motion.p
					inputMode="text"
					className={classNames}
					transition={{ type: 'spring', duration: 2 }}
					key={text}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					{text}
				</motion.p>
			</>
		);
	}

	if (as === 'h1') {
		return (
			<>
				<motion.h1
					inputMode="text"
					className={classNames}
					transition={{ type: 'spring', duration: 2 }}
					key={text}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					{text}
				</motion.h1>
			</>
		);
	}

	if (as === 'h2') {
		return (
			<>
				<motion.h2
					inputMode="text"
					className={classNames}
					transition={{ type: 'spring', duration: 2 }}
					key={text}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					{text}
				</motion.h2>
			</>
		);
	}
};
