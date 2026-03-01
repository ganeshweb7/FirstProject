import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles: React.FC = () => {
  return (
    <div className="particles">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ 
            width: '2px', 
            height: '2px', 
            background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
            boxShadow: i % 2 === 0 ? 'var(--glow-cyan)' : 'var(--glow-purple)'
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
