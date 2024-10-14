import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface Props {}
interface IMouse {
  x: number;
  y: number;
}

export const Cursor: React.FC<Props> = ({}) => {
  const [mouse, setMouse] = useState<IMouse>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const positionHandler = (e: MouseEvent) => {
      setMouse({
        x: e.clientX - 250,
        y: e.clientY - 250,
      });
    };

    window.addEventListener('mousemove', positionHandler);

    return () => {
      window.removeEventListener('mousemove', positionHandler);
    };
  }, []);
  return (
    <>
      <motion.div
        className="fixed h-[500px] w-[500px] cursor z-50 rounded-full pointer-events-none "
        animate={{
          x: mouse.x,
          y: mouse.y,
          mixBlendMode: 'saturation',
        }}
        transition={{ type: 'smooth', duration: 0 }}>
        Cursor
      </motion.div>
    </>
  );
};
