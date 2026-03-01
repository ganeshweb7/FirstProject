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
        background: 'var(--maroon)',
        paddingTop: '80px'
      }}
    >
      {/* Dynamic Gold Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'absolute', top: '10%', right: '10%', 
          width: '60vw', height: '60vw', 
          background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', 
          filter: 'blur(80px)', zIndex: 0 
        }} 
      />
      
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              fontSize: 'clamp(0.9rem, 4vw, 1.2rem)', 
              color: 'var(--gold)', 
              letterSpacing: '6px', 
              marginBottom: '1.5rem', 
              textTransform: 'uppercase' 
            }}
          >
            Premium Fashion Hub
          </motion.h2>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 10vw, 6rem)', 
              color: 'var(--cream)', 
              lineHeight: 1.1, 
              marginBottom: '2rem' 
            }}
          >
            Classic Wear for <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>The Whole Family</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
              color: 'var(--cream)', 
              maxWidth: '800px', 
              margin: '0 auto 3.5rem', 
              opacity: 0.8, 
              fontWeight: 300,
              padding: '0 1rem'
            }}
          >
            Discover trending Kids Wear, Premium Mens Apparel, and Elegant Ladies Dresses in the heart of Parola.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="hero-buttons"
            style={{ 
              display: 'flex', 
              gap: '1.5rem', 
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
              Explore Shop
            </motion.a>
            <motion.a 
              href="#offers" 
              className="btn-royal" 
              style={{ background: 'transparent', border: '2px solid var(--gold)' }} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Deals
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <style>{`
        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
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
