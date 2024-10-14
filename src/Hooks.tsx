import { NavigationContext } from './App';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useObserver(navToChange: string) {
  const NavContext = useContext(NavigationContext);

  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-40px 0px -200px 0px',
    onChange: () => {},
  });

  useEffect(() => {
    if (inView) {
      NavContext?.setActiveNav(navToChange);
    }
  }, [inView]);

  return ref;
}
