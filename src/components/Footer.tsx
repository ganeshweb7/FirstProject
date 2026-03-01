import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--maroon-dark)', color: 'var(--cream)', paddingTop: '100px', borderTop: '1px solid var(--gold)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '80px' }}>
          
          <div className="footer-brand">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>{shopData.name}</h2>
            <p style={{ opacity: 0.7, fontSize: '1.1rem', maxWidth: '400px', marginBottom: '2.5rem', lineHeight: 1.8 }}>{shopData.tagline}</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {shopData.socials.map((social) => (
                <motion.a 
                  key={social.platform}
                  href={social.url} 
                  whileHover={{ y: -5, color: 'white' }}
                  style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px' }}
                >
                  {social.platform.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4 style={{ color: 'white', fontSize: '1.1rem', letterSpacing: '3px', marginBottom: '2rem', textTransform: 'uppercase' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['Home', 'About', 'Collection', 'Offers', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'var(--cream)', opacity: 0.6, textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.opacity='1'} onMouseOut={(e) => e.currentTarget.style.opacity='0.6'}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h4 style={{ color: 'white', fontSize: '1.1rem', letterSpacing: '3px', marginBottom: '2rem', textTransform: 'uppercase' }}>Shop Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--cream)', opacity: 0.6 }}>
              <p>📍 {shopData.address}</p>
              <p>📞 {shopData.phone}</p>
              <p>✉️ {shopData.email}</p>
              <p>🕒 {shopData.openingHours}</p>
            </div>
          </div>

        </div>

        <div style={{ 
          padding: '40px 0', 
          borderTop: '1px solid rgba(197, 160, 89, 0.1)', 
          textAlign: 'center', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }} className="footer-bottom">
          <p style={{ opacity: 0.4, fontSize: '0.85rem', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} {shopData.name}. ALL PRIVILEGES RESERVED.
          </p>
          <div style={{ display: 'flex', gap: '2rem', opacity: 0.4, fontSize: '0.85rem' }}>
            <span>DESIGNED BY EXCELLENCE</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; gap: 3rem !important; }
          .footer-brand p { margin: 0 auto 2.5rem !important; }
          .footer-brand div { justify-content: center; }
          .footer-bottom { flex-direction: column !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
