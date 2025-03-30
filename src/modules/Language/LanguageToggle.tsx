import React from 'react';
import { LanguageButton } from './components/LanguageButton';
import { LayoutGroup } from 'framer-motion';

interface LanguageToggleProps {}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({}) => {
	return (
		<>
			<LayoutGroup>
				<div className="flex justify-end gap-x-2 mt-10 mr-12 md:mr-24 mb-5 md:mb-0">
					<LanguageButton language={'EN'} />
					<LanguageButton language={'DE'} />
				</div>
			</LayoutGroup>
		</>
	);
};
