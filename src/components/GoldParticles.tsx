import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GoldParticles: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const count = isMobile ? 12 : 25;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden', background: 'var(--cream)' }}>
      {[...Array(count)].map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
};

const Particle: React.FC = () => {
  const size = Math.random() * (window.innerWidth < 768 ? 6 : 10) + 4;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;

  return (
    <motion.div
      initial={{ 
        left: `${initialX}%`, 
        top: `${initialY}%`, 
        opacity: 0, 
        scale: 0.5 
      }}
      animate={{
        y: [0, -100, -200],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1.2, 0.5],
        rotate: [0, 180, 360],
        x: [0, (Math.random() - 0.5) * 50, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle, var(--gold) 20%, transparent 80%)',
        borderRadius: '50%',
        filter: 'blur(1px)',
        boxShadow: '0 0 10px var(--gold-light)'
      }}
    />
  );
};

export default GoldParticles;
