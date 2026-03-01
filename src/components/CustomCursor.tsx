import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('.pixar-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mousePosition.x - 12, springConfig);
  const cursorY = useSpring(mousePosition.y - 12, springConfig);

  return (
    <motion.div 
      style={{ 
        position: 'fixed', top: 0, left: 0, width: '24px', height: '24px', 
        backgroundColor: 'var(--primary-blue)', borderRadius: '50%', 
        pointerEvents: 'none', zIndex: 10000, x: cursorX, y: cursorY,
        mixBlendMode: 'multiply',
        scale: isHovering ? 2.5 : 1,
        opacity: 0.7
      }}
      transition={{ scale: { type: "spring", stiffness: 400, damping: 20 } }}
    />
  );
};

export default CustomCursor;
