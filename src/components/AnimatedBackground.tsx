import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="blob-bg">
      <motion.div 
        className="blob"
        style={{ width: '500px', height: '500px', background: '#a18cd1', top: '-10%', left: '-10%' }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="blob"
        style={{ width: '400px', height: '400px', background: '#ff9a9e', bottom: '10%', right: '-5%' }}
        animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="blob"
        style={{ width: '300px', height: '300px', background: '#fbc2eb', top: '40%', left: '30%' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
};

export default AnimatedBackground;
