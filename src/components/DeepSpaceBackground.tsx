import React from 'react';
import { motion } from 'framer-motion';

const DeepSpaceBackground: React.FC = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -2, background: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="halftone-overlay" />
      
      {/* Dynamic Comic Grid */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.03) 2px, transparent 2px)',
          backgroundSize: '80px 80px',
          opacity: 0.5
        }} 
      />

      {/* Pulsing "Toon" Nebula */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ 
          position: 'absolute', top: '10%', right: '10%', width: '800px', height: '800px', 
          background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
          filter: 'blur(120px)', opacity: 0.15
        }} 
      />

      {/* Floating Action Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
          animate={{ 
            y: [0, -100, 0], 
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
            opacity: [0, 1, 0] 
          }}
          transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, delay: Math.random() * 5 }}
          style={{ 
            position: 'absolute', width: '20px', height: '20px', 
            background: i % 2 === 0 ? 'var(--accent-yellow)' : 'var(--accent-cyan)', 
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}
    </div>
  );
};

export default DeepSpaceBackground;
