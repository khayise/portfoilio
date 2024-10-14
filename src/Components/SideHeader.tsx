import React from 'react';
import { Contacts } from './Contacts';
import { Navigation } from './Navigation';

interface Props {}

export const SideHeader: React.FC<Props> = ({}) => {
	return (
		<>
			<header
				className={`h-screen static w-full pb-4 md:w-1/2 md:sticky  md:pb-12 pt-24 left-0 top-0 bg-back flex flex-col justify-between items-start`}>
				<div className="flex flex-col">
					<span className="text-accentColor font-main text-5xl font-semibold">Andrii Dedesh</span>
					<span className="text-accentColor font-main text-xl font-light mt-3 mb-20">
						Frontend Developer
					</span>
					<Navigation />
				</div>
				<Contacts />
			</header>
		</>
	);
};
