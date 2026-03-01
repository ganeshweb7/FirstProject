import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              width: '100%', aspectRatio: '1/1', 
              background: 'var(--maroon-dark)', 
              borderRadius: '8px', overflow: 'hidden',
              position: 'relative', zIndex: 1
            }}>
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" 
                alt="Bhumika Garments Shop" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
            </div>
            {/* Gold Frame Decor */}
            <div style={{ 
              position: 'absolute', top: '20px', left: '20px', 
              width: '100%', height: '100%', 
              border: '2px solid var(--gold)', zIndex: 0,
              borderRadius: '8px'
            }} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ 
                position: 'absolute', bottom: '-40px', right: '-40px',
                background: 'var(--gold)', padding: '2rem', borderRadius: '4px',
                zIndex: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
              className="about-badge"
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--maroon-dark)', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--maroon-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of <br/> Legacy</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Legacy of Trust</h4>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.2 }}>{shopData.about.title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
              {shopData.about.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="features-grid">
              {shopData.about.features.map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--maroon)' }}>{feature.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .about-badge { bottom: 20px !important; right: 20px !important; padding: 1.5rem !important; }
        }
        @media (max-width: 576px) {
          .features-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
