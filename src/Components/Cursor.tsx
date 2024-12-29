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

function trottle<T extends unknown[]>(callback: (...args: T) => void, delay: number = 1000) {
	let shouldWait: boolean = false;
	let waitingArgs: null | T = null;

	return (...args: T) => {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}

		callback(...args);

		shouldWait = true;
		setTimeout(() => {
			shouldWait = false;
			if (waitingArgs !== null) {
				callback(...waitingArgs);
				waitingArgs = null;
			}
		}, delay);
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
		const positionHandler = trottle(move, 20);

		window.addEventListener('mousemove', positionHandler);

		return () => {
			window.removeEventListener('mousemove', positionHandler);
		};
	}, []);

	if (/Mobi|Android/i.test(navigator.userAgent)) return null;

	return (
		<>
			<motion.div
				className="md:block z-50 fixed hidden rounded-full w-[500px] h-[500px] pointer-events-none cursor"
				animate={{
					x: mouse.x,
					y: mouse.y,
					// mixBlendMode: 'saturation',
				}}
				transition={{ type: 'tween', duration: 0.5 }}>
				Cursor
			</motion.div>
		</>
	);
};
