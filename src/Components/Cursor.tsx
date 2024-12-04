import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface Props {}
interface IMouse {
	x: number;
	y: number;
}

function debounce<T extends unknown[]>(callback: (...args: T) => void, delay: number) {
	let timerId: number | ReturnType<typeof setTimeout> | null = null;

	return (...args: T) => {
		if (timerId) {
			clearTimeout(timerId);
		}

		timerId = setTimeout(() => callback(...args), delay);
	};
}

export const Cursor: React.FC<Props> = ({}) => {
	const [mouse, setMouse] = useState<IMouse>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const move = (e: MouseEvent) => {
			setMouse({
				x: e.clientX - 325,
				y: e.clientY - 325,
			});
		};
		const positionHandler = debounce(move, 1);

		window.addEventListener('mousemove', positionHandler);

		return () => {
			window.removeEventListener('mousemove', positionHandler);
		};
	}, []);
	return (
		<>
			<motion.div
				className="hidden md:block fixed h-[500px] w-[500px] cursor z-50 rounded-full pointer-events-none "
				animate={{
					x: mouse.x,
					y: mouse.y,
					// mixBlendMode: 'saturation',
				}}
				transition={{ type: 'spring', duration: 0.5 }}>
				Cursor
			</motion.div>
		</>
	);
};
