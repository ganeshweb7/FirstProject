import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Offers: React.FC = () => {
  return (
    <section id="offers" style={{ padding: '80px 0' }}>
      <div className="container">
        <motion.div 
          className="glass-panel"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            padding: 'clamp(2rem, 5vw, 4rem)', 
            textAlign: 'center', 
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(128,0,32,0.95) 0%, rgba(74,0,18,1) 100%)',
            border: '2px solid var(--gold)',
            color: 'var(--cream)',
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}
        >
          {/* Confetti / Sparkle Decor */}
          <div className="sparkle" style={{ top: '10%', left: '10%' }}>✨</div>
          <div className="sparkle" style={{ bottom: '10%', right: '15%' }}>✨</div>
          <div className="sparkle" style={{ top: '20%', right: '10%' }}>✨</div>

          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', color: 'var(--gold)', marginBottom: '1rem' }}
          >
            {shopData.offers.title}
          </motion.h2>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 10, delay: 0.5 }}
            style={{ 
              fontSize: 'clamp(3rem, 15vw, 6rem)', 
              fontWeight: 800, 
              margin: '1rem 0', 
              color: 'white', 
              textShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
              lineHeight: 1
            }}
          >
            {shopData.offers.discount}
          </motion.div>
          
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            {shopData.offers.subtitle}
          </p>
          
          <div 
            className="timer-container"
            style={{ 
              display: 'inline-flex', 
              gap: 'clamp(1rem, 3vw, 2rem)', 
              background: 'rgba(255,255,255,0.1)', 
              padding: '1.5rem 2rem', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,255,255,0.2)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <div className="timer-item">
              <div style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--gold)' }}>02</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.8 }}>Days</div>
            </div>
            <div className="timer-separator" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)', alignSelf: 'center' }}>:</div>
            <div className="timer-item">
              <div style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--gold)' }}>14</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.8 }}>Hours</div>
            </div>
            <div className="timer-separator" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)', alignSelf: 'center' }}>:</div>
            <div className="timer-item">
              <div style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--gold)' }}>35</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.8 }}>Mins</div>
            </div>
          </div>

          <motion.button 
            className="btn-royal"
            style={{ 
              marginTop: '3.5rem', 
              background: 'var(--gold)', 
              color: 'var(--maroon)', 
              border: 'none', 
              display: 'block', 
              margin: '3.5rem auto 0',
              padding: '1rem 3rem'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--gold)' }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Offer Now
          </motion.button>
        </motion.div>
      </div>
      <style>{`
        .sparkle { position: absolute; font-size: 2rem; animation: sparklePulse 3s infinite; pointer-events: none; }
        @keyframes sparklePulse { 0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); } 50% { opacity: 1; transform: scale(1.2) rotate(20deg); } }
        
        @media (max-width: 480px) {
          .timer-separator { display: none; }
          .timer-container { gap: 1.5rem; width: 100%; }
          .timer-item { flex: 1; min-width: 60px; }
        }
      `}</style>
    </section>
  );
};

export default Offers;
