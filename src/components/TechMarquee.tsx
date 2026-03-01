import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const TechMarquee: React.FC = () => {
  return (
    <div style={{ padding: '4rem 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', overflow: 'hidden' }}>
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex', gap: '6rem', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {[...portfolioData.techStack, ...portfolioData.techStack].map((tech, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>{tech.icon}</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '2px' }}>{tech.name.toUpperCase()}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
