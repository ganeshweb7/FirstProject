import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import DecryptedText from './DecryptedText';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ 
              width: '100%', aspectRatio: '4/5', borderRadius: '30px', 
              overflow: 'hidden', border: '1px solid var(--accent-purple)',
              boxShadow: 'var(--glow-purple)', position: 'relative'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt={portfolioData.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-color), transparent)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', letterSpacing: '8px', marginBottom: '1.5rem' }}>
              <DecryptedText text="ARCHITECT_BIO" />
            </h2>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>
              Engineering <span style={{ color: 'var(--accent-purple)' }}>Growth.</span>
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: 1.8, marginBottom: '3rem' }}>
              {portfolioData.about}
            </p>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {portfolioData.stats.map((stat: { value: string, label: string }, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>{stat.value}</h3>
                  <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 700, letterSpacing: '1px' }}>{stat.label.toUpperCase()}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
