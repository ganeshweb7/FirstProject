import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      whileHover="hover"
    >
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="20" y="20" width="60" height="60" rx="12"
          stroke="var(--accent-color)"
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M40 40L60 60M60 40L40 60"
          stroke="var(--secondary-color)"
          strokeWidth="8"
          strokeLinecap="round"
          variants={{
            hover: { pathLength: 1, opacity: 1 },
            initial: { pathLength: 0, opacity: 0 }
          }}
        />
      </svg>
      <span style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1.5px', background: 'linear-gradient(90deg, var(--accent-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        FL.
      </span>
    </motion.div>
  );
};

export default Logo;
