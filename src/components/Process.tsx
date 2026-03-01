import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Process: React.FC = () => {
  return (
    <section id="process" style={{ padding: '150px 0', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '5rem' }}>
          <h2 className="neon-accent" style={{ fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '6px' }}>// DELIVERY_PIPELINE</h2>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900 }}>Work <span style={{ color: 'var(--accent-purple)' }}>Methodology.</span></h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {portfolioData.process.map((item: { step: string, title: string, desc: string }, idx: number) => (
            <motion.div
              key={item.step}
              className="super-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ padding: '2.5rem', position: 'relative' }}
            >
              <span style={{ 
                position: 'absolute', top: '1rem', right: '2rem', fontSize: '4rem', 
                fontWeight: 900, opacity: 0.05, color: 'var(--accent-cyan)' 
              }}>{item.step}</span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
              
              {/* Connector Line */}
              {idx < portfolioData.process.length - 1 && (
                <div style={{ 
                  position: 'absolute', top: '50%', right: '-1rem', width: '2rem', 
                  height: '1px', background: 'var(--accent-cyan)', opacity: 0.3,
                  display: 'none' /* Hidden on mobile */
                }}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
