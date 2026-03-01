import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'var(--maroon-dark)',
        paddingTop: '80px'
      }}
    >
      {/* Dynamic Royal Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.15, 0.25, 0.15],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'absolute', top: '10%', right: '10%', 
          width: '70vw', height: '70vw', 
          background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', 
          filter: 'blur(100px)', zIndex: 0 
        }} 
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.1, 0.2, 0.1],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ 
          position: 'absolute', bottom: '10%', left: '-10%', 
          width: '60vw', height: '60vw', 
          background: 'radial-gradient(circle, var(--maroon-light) 0%, transparent 70%)', 
          filter: 'blur(100px)', zIndex: 0 
        }} 
      />
      
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(0.8rem, 3vw, 1rem)', 
              color: 'var(--gold)', 
              letterSpacing: '8px', 
              marginBottom: '2rem', 
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            Est. 2008 • Parola's Pride
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 7.5rem)', 
              color: 'var(--cream)', 
              lineHeight: 0.9, 
              marginBottom: '2.5rem',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              fontWeight: 900
            }}
          >
            The Art of <br />
            <span className="text-gradient">Royal Living</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(1rem, 4vw, 1.4rem)', 
              color: 'var(--cream)', 
              maxWidth: '850px', 
              margin: '0 auto 4rem', 
              opacity: 0.9, 
              fontWeight: 300,
              padding: '0 1rem',
              lineHeight: 1.6,
              letterSpacing: '1px'
            }}
          >
            Experience the finest collection of {shopData.collection.map(c => c.category).filter((v, i, a) => a.indexOf(v) === i).join(', ')} wear. Curated with a legacy of trust.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="hero-buttons"
            style={{ 
              display: 'flex', 
              gap: '2rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <motion.a 
              href="#collection" 
              className="btn-royal" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-royal" 
              style={{ background: 'transparent', border: '2px solid var(--gold)', color: 'var(--gold)' }} 
              whileHover={{ scale: 1.05, background: 'rgba(197, 160, 89, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Locate Shop
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 15, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        style={{ 
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
        }}
      >
        <div style={{ width: '2px', height: '60px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }}></div>
      </motion.div>
      
      <style>{`
        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
          .hero-buttons .btn-royal {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
