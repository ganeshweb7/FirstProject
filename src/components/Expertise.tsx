import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" style={{ padding: '150px 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="neon-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>NEURAL <span className="neon-accent">CAPABILITIES</span></h2>
          <div style={{ height: '2px', width: '100px', background: 'var(--accent-cyan)', margin: '0 auto', boxShadow: 'var(--glow-cyan)' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {(portfolioData as any).services.map((service: any, index: number) => (
            <motion.div
              key={service.title}
              className="super-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, type: "spring" }}
              viewport={{ once: true }}
              style={{ padding: '3rem', textAlign: 'center' }}
            >
              {/* Spinning Orbit Ring Icon */}
              <div style={{ width: '80px', height: '80px', margin: '0 auto 2rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ position: 'absolute', inset: 0, border: '2px dashed var(--accent-purple)', borderRadius: '50%' }} 
                />
                <div style={{ fontSize: '2.5rem' }}>{service.icon}</div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
