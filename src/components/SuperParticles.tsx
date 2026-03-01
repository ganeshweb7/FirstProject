import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SuperParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div style={{ y, width: '100%', height: '100%' }}>
        {[...Array(60)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          return (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 3, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
              style={{ 
                position: 'absolute', 
                width: size, 
                height: size, 
                background: i % 3 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                boxShadow: i % 3 === 0 ? '0 0 10px var(--accent-cyan)' : '0 0 10px var(--accent-purple)',
                borderRadius: '50%' 
              }}
            />
          );
        })}
      </motion.div>
      
      {/* Moving Light Beams */}
      <motion.div 
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0, 229, 255, 0.03) 20deg, transparent 40deg)',
          zIndex: -2
        }} 
      />
    </div>
  );
};

export default SuperParticles;
