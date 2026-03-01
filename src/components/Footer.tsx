import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Footer: React.FC = () => {
  return (
    <footer style={{ position: 'relative', background: 'var(--maroon)', color: 'var(--cream)', paddingTop: 'clamp(80px, 15vw, 120px)', overflow: 'hidden' }}>
      
      {/* Animated Wave */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: 'calc(100% + 1.3px)', height: 'clamp(60px, 10vw, 100px)', fill: 'var(--cream)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container" style={{ paddingBottom: '3rem', position: 'relative', zIndex: 1 }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
          
          <div className="footer-info">
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', color: 'var(--gold)', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>{shopData.name}</h2>
            <p style={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '450px', marginBottom: '2.5rem', lineHeight: 1.6 }}>{shopData.tagline}</p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['Instagram', 'Facebook', 'WhatsApp'].map((platform) => (
                <motion.a 
                  key={platform}
                  href={platform === 'WhatsApp' ? `https://wa.me/91${shopData.phone}` : "#"} 
                  whileHover={{ y: -3, color: 'white' }}
                  style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px' }}
                >
                  {platform.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-badge"
            style={{ 
              textAlign: 'right', 
              padding: '2.5rem', 
              borderRight: '5px solid var(--gold)', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '16px',
              backdropFilter: 'blur(5px)'
            }}
          >
            <h3 style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '0.8rem', opacity: 0.7 }}>ESTABLISHED QUALITY</h3>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1.2 }}>{shopData.proprietor}</h1>
            <p style={{ opacity: 0.5, letterSpacing: '2px', fontSize: '0.7rem' }}>PROPRIETOR // BHUMIKA GARMENTS</p>
          </motion.div>

        </div>

        <div style={{ 
          marginTop: '5rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(212, 175, 55, 0.1)', 
          textAlign: 'center', 
          opacity: 0.4, 
          fontSize: '0.85rem',
          letterSpacing: '1px'
        }}>
          © {new Date().getFullYear()} {shopData.name}. Minatai Complex, Parola. <br className="mobile-only" /> Designed for Excellence.
        </div>
      </div>
      
      <style>{`
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; gap: 4rem !important; }
          .footer-info { display: flex; flexDirection: column; align-items: center; }
          .footer-info div { justify-content: center; }
          .footer-badge { text-align: center !important; border-right: none !important; border-top: 5px solid var(--gold); border-radius: 0 0 16px 16px; }
          .mobile-only { display: block; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
