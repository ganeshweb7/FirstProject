import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Footer: React.FC = () => {
  return (
    <footer style={{ position: 'relative', background: 'var(--maroon)', color: 'var(--cream)', paddingTop: '120px', overflow: 'hidden' }}>
      
      {/* Animated Wave */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: 'calc(100% + 1.3px)', height: '100px', fill: 'var(--cream)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container" style={{ paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', textAlign: 'left' }}>
          
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>{shopData.name}</h2>
            <p style={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '400px', marginBottom: '2rem' }}>{shopData.tagline}</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 700 }}>Instagram</a>
              <a href="#" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 700 }}>Facebook</a>
              <a href={`https://wa.me/91${shopData.phone}`} style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 700 }}>WhatsApp</a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'right', padding: '2rem', borderRight: '4px solid var(--gold)', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}
          >
            <h3 style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: '4px', marginBottom: '1rem' }}>SHOP_AUTHORITY</h3>
            <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{shopData.proprietor}</h1>
            <p style={{ opacity: 0.6, letterSpacing: '2px' }}>PROPRIETOR // BHUMIKA GARMENTS</p>
          </motion.div>

        </div>

        <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} {shopData.name}. Minatai Complex, Parola. Designed for Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
