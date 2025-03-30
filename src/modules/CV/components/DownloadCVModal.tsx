import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DownloadCVList } from './DownloadCVList';
import { DownloadCVLink } from './DownloadCVLink';
import { DownloadCVLabel } from './DownloadCVLabel';

interface DownloadCVModalProps {
	handleClose: () => void;
}

export const DownloadCVModal: React.FC<DownloadCVModalProps> = ({ handleClose }) => {
	const durationOrDelay = 0.3;

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
		};
	}, []);
	return createPortal(
		<>
			<motion.div
				onClick={handleClose}
				initial={{ height: 0, top: 0, left: 0, width: 0, borderEndEndRadius: '300%' }}
				animate={{
					height: '100%',
					width: '100%',
					borderEndEndRadius: '0',
					borderStartStartRadius: 0,
				}}
				exit={{
					height: 0,
					width: 0,
					top: '100%',
					left: '100%',
					borderStartStartRadius: '400%',
					transition: { delay: durationOrDelay, duration: durationOrDelay },
				}}
				transition={{ duration: durationOrDelay }}
				className="top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50">
				<motion.div
					onClick={(e) => e.stopPropagation()}
					initial={{
						borderRadius: '100%',
						height: 0,
						width: 0,
					}}
					animate={{
						borderRadius: '8px',
						height: 'auto',
						width: 'auto',
						transition: { delay: durationOrDelay },
					}}
					exit={{
						transition: { duration: durationOrDelay },
						borderRadius: '100%',
						height: 0,
						width: 0,
					}}
					className="bg-back mx-6 text-highlightColor overflow-hidden">
					<div className="relative flex flex-col items-center gap-2 p-6">
						<DownloadCVLabel />
						<button onClick={handleClose} className="top-2 right-2 absolute w-5 h-5 self-end">
							X
						</button>
						<DownloadCVList />
						<DownloadCVLink onClick={handleClose} />
					</div>
				</motion.div>
			</motion.div>
		</>,
		document.body,
	);
};
