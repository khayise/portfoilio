import React, { useContext } from 'react';
import { NavigationContext } from '../App';

import { Link } from 'react-scroll';
import { AnimatedText } from './AnimatedText';

interface Props {
	text: string;
	linkTo: string;
}

export const NavigationElement: React.FC<Props> = ({ text, linkTo }) => {
	const NavContext = useContext(NavigationContext);

	return (
		<>
			<Link
				className="flex items-center cursor-pointer nav-link"
				to={linkTo}
				onClick={() => NavContext?.setActiveNav(linkTo)}
				offset={-150}
				type="smooth"
				smooth
				duration={500}>
				<div
					className={`${NavContext?.activeNav === linkTo ? 'active-nav--line' : 'bg-baseColor w-5'} h-px  mr-2 duration-200`}></div>
				<AnimatedText
					text={text}
					classNames={`${NavContext?.activeNav === linkTo ? 'active-nav--text' : 'text-baseColor'} duration-200`}
				/>
			</Link>
		</>
	);
};
