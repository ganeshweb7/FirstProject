import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Offers: React.FC = () => {
  return (
    <section id="offers" style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            padding: 'clamp(3rem, 10vw, 6rem)', 
            textAlign: 'center', 
            borderRadius: '4px',
            background: 'var(--maroon-dark)',
            border: '2px solid var(--gold)',
            color: 'var(--cream)',
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)'
          }}
        >
          {/* Animated Background Pattern */}
          <div style={{ 
            position: 'absolute', inset: 0, opacity: 0.05,
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")'
          }} />
          
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ 
              position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
              border: '1px solid var(--gold)', borderRadius: '40%', opacity: 0.1
            }} 
          />

          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--gold)', letterSpacing: '6px', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '1rem' }}
          >
            Limited Time Privilege
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            style={{ 
              fontSize: 'clamp(2.5rem, 12vw, 5.5rem)', 
              color: 'white', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              fontWeight: 900,
              lineHeight: 1
            }}
          >
            {shopData.offers.title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            style={{ 
              fontSize: 'clamp(3rem, 15vw, 7rem)', 
              fontWeight: 900, 
              margin: '1rem 0', 
              color: 'var(--gold)', 
              textShadow: '0 0 30px rgba(197, 160, 89, 0.5)',
              lineHeight: 1,
              fontFamily: 'var(--font-heading)'
            }}
          >
            {shopData.offers.discount}
          </motion.div>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
            opacity: 0.8, 
            marginBottom: '4rem', 
            maxWidth: '750px', 
            margin: '0 auto 4rem',
            lineHeight: 1.6,
            fontWeight: 300,
            letterSpacing: '1px'
          }}>
            {shopData.offers.subtitle}
          </p>
          
          <div 
            className="timer-container"
            style={{ 
              display: 'inline-flex', 
              gap: 'clamp(1rem, 4vw, 3rem)', 
              background: 'rgba(197, 160, 89, 0.1)', 
              padding: '2.5rem 3.5rem', 
              borderRadius: '2px', 
              border: '1px solid var(--gold)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            {['Days', 'Hours', 'Mins'].map((unit, i) => (
              <React.Fragment key={unit}>
                <div className="timer-item">
                  <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'white', lineHeight: 1 }}>
                    {i === 0 ? '02' : i === 1 ? '14' : '35'}
                  </div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.8rem', color: 'var(--gold)' }}>{unit}</div>
                </div>
                {i < 2 && (
                  <div className="timer-separator" style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', alignSelf: 'center', opacity: 0.5 }}>:</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.button 
            className="btn-royal"
            style={{ 
              marginTop: '5rem', 
              padding: '1.2rem 4rem',
              display: 'block', 
              margin: '5rem auto 0'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Exclusive Offer
          </motion.button>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 576px) {
          .timer-separator { display: none !important; }
          .timer-container { gap: 2rem !important; width: 100%; padding: 2rem !important; }
          .timer-item { flex: 1; min-width: 60px; }
        }
      `}</style>
    </section>
  );
};

export default Offers;
