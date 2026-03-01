import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: 'var(--maroon)' }}>
      {/* Dynamic Gold Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ position: 'absolute', top: '10%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} 
      />
      
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '1.2rem', color: 'var(--gold)', letterSpacing: '6px', marginBottom: '1.5rem', textTransform: 'uppercase' }}
          >
            Premium Fashion Hub
          </motion.h2>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', color: 'var(--cream)', lineHeight: 1, marginBottom: '2rem' }}
          >
            Classic Wear for <br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>The Whole Family</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ fontSize: '1.4rem', color: 'var(--cream)', maxWidth: '800px', margin: '0 auto 3.5rem', opacity: 0.8, fontWeight: 300 }}
          >
            Discover trending Kids Wear, Premium Mens Apparel, and Elegant Ladies Dresses in the heart of Parola.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
          >
            <motion.a href="#collection" className="btn-royal" whileHover={{ scale: 1.1 }}>Explore Shop</motion.a>
            <motion.a href="#offers" className="btn-royal" style={{ background: 'transparent', border: '2px solid var(--gold)' }} whileHover={{ scale: 1.1 }}>View Deals</motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
