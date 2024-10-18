import React from 'react';
import { LanguageButton } from './LanguageButton';
import { LayoutGroup } from 'framer-motion';

interface LanguageToggleProps {}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({}) => {
	return (
		<>
			<LayoutGroup>
				<div className="flex justify-end gap-x-2 mb-5 md:mb-0 mt-10 mr-12 md:mr-24">
					<LanguageButton language={'EN'} />
					<LanguageButton language={'DE'} />
				</div>
			</LayoutGroup>
		</>
	);
};
