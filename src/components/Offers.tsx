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
            padding: '4rem', textAlign: 'center', borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(128,0,32,0.9) 0%, rgba(74,0,18,0.95) 100%)',
            border: '2px solid var(--gold)',
            color: 'var(--cream)',
            position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Confetti / Sparkle Decor */}
          <div className="sparkle" style={{ top: '10%', left: '10%' }}>✨</div>
          <div className="sparkle" style={{ bottom: '10%', right: '10%' }}>✨</div>

          <h2 style={{ fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>{shopData.offers.title}</h2>
          <div style={{ fontSize: '5rem', fontWeight: 700, margin: '1rem 0', color: 'white', textShadow: '0 0 20px var(--gold)' }}>
            {shopData.offers.discount}
          </div>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>{shopData.offers.subtitle}</p>
          
          <div style={{ display: 'inline-flex', gap: '2rem', background: 'rgba(255,255,255,0.1)', padding: '1.5rem 3rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>02</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Days</div>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>:</div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>14</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Hours</div>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>:</div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>35</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Mins</div>
            </div>
          </div>

          <motion.button 
            className="btn-royal"
            style={{ marginTop: '3rem', background: 'var(--gold)', color: 'var(--maroon)', border: 'none', display: 'block', margin: '3rem auto 0' }}
            whileHover={{ scale: 1.05 }}
          >
            Claim Offer Now
          </motion.button>
        </motion.div>
      </div>
      <style>{`
        .sparkle { position: absolute; font-size: 2rem; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.5; scale: 1; } 50% { opacity: 1; scale: 1.2; } }
      `}</style>
    </section>
  );
};

export default Offers;
