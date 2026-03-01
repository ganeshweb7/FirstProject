import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const ShopDetails: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div className="section-title">
          <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>Connect With Us</h4>
          <h2>Visit Our Studio</h2>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ 
                  width: '60px', height: '60px', background: 'var(--maroon-dark)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', color: 'var(--gold)', borderRadius: '2px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>📍</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '300px' }}>{shopData.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ 
                  width: '60px', height: '60px', background: 'var(--maroon-dark)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', color: 'var(--gold)', borderRadius: '2px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>🕒</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Opening Hours</h4>
                  <p style={{ color: 'var(--maroon)', fontWeight: 600 }}>{shopData.openingHours}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Open all days for your convenience.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ 
                  width: '60px', height: '60px', background: 'var(--maroon-dark)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', color: 'var(--gold)', borderRadius: '2px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>📞</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Number</h4>
                  <p style={{ color: 'var(--maroon)', fontSize: '1.5rem', fontWeight: 800 }}>{shopData.phone}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
              <motion.button 
                onClick={() => window.open(`https://wa.me/91${shopData.phone}`, '_blank')}
                className="btn-royal"
                style={{ flex: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp Us
              </motion.button>
              <motion.button 
                onClick={() => window.open(`tel:${shopData.phone}`, '_self')}
                className="btn-royal"
                style={{ flex: 1, background: 'transparent', color: 'var(--maroon)', border: '1px solid var(--maroon)' }}
                whileHover={{ scale: 1.05, background: 'rgba(96,0,24,0.05)' }}
              >
                Call Now
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              padding: '1rem', 
              border: '1px solid var(--gold)', 
              background: 'white',
              height: '500px',
              borderRadius: '2px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.123456789!2d75.123456789!3d20.888888888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDUzJzIwLjAiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1633023222522!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Shop Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ShopDetails;
