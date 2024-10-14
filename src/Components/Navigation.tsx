import React from 'react';
import { NavigationElement } from './NavigationElement';

interface Props {}

export const Navigation: React.FC<Props> = ({}) => {
  return (
    <>
      <nav className="flex flex-col gap-y-3">
        <NavigationElement text="ABOUT" linkTo="about" />
        <NavigationElement text="PROJECTS" linkTo="projects" />
      </nav>
    </>
  );
};
