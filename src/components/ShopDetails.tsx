import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const ShopDetails: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '80px 0', background: 'linear-gradient(to bottom, var(--cream), white)' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
          
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '2rem', color: 'var(--maroon)' }}
            >
              Visit Our Store
            </motion.h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', color: 'var(--gold)' }}>📍</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--maroon)', fontWeight: 700 }}>Address</h4>
                  <p style={{ opacity: 0.8, lineHeight: 1.5 }}>{shopData.address}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', color: 'var(--gold)' }}>📞</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--maroon)', fontWeight: 700 }}>Mobile Number</h4>
                  <p style={{ opacity: 0.8, fontSize: '1.2rem', fontWeight: 800, color: 'var(--maroon)' }}>{shopData.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', color: 'var(--gold)' }}>👤</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--maroon)', fontWeight: 700 }}>Proprietor</h4>
                  <p style={{ opacity: 0.8 }}>{shopData.proprietor}</p>
                </div>
              </div>
            </div>

            <motion.button 
              onClick={() => window.open(`https://wa.me/91${shopData.phone}`, '_blank')}
              className="btn-royal"
              style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', width: 'fit-content' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>💬</span> Chat on WhatsApp
            </motion.button>
          </motion.div>

          <motion.div 
            className="glass-panel"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              padding: '0.75rem', 
              borderRadius: '20px', 
              height: 'clamp(300px, 45vh, 450px)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.123456789!2d75.123456789!3d20.888888888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDUzJzIwLjAiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1633023222522!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '14px' }} 
              loading="lazy"
              title="Shop Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 868px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ShopDetails;
