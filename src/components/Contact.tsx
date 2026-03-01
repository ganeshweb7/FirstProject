import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '150px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="super-card"
            style={{ padding: '4rem', border: '1px solid var(--accent-cyan)' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>ESTABLISH <span className="neon-accent">UPLINK</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Secure channel ready. Awaiting signal transmission.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="input-group">
                <input type="text" placeholder=" " required />
                <label>AGENT_ID</label>
                <div className="glow-line"></div>
              </div>
              <div className="input-group">
                <input type="email" placeholder=" " required />
                <label>COMMS_FREQUENCY</label>
                <div className="glow-line"></div>
              </div>
              <div className="input-group">
                <textarea placeholder=" " rows={4} required></textarea>
                <label>DATA_PACKET</label>
                <div className="glow-line"></div>
              </div>
              
              <motion.button 
                className="magnetic-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: '1rem', width: '100%' }}
              >
                TRANSMIT
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-group { position: relative; }
        .input-group input, .input-group textarea {
          width: 100%; padding: 1rem; background: rgba(0,0,0,0.2);
          border: none; border-bottom: 1px solid var(--glass-border);
          color: white; outline: none; font-family: 'Outfit', sans-serif;
        }
        .input-group label {
          position: absolute; left: 1rem; top: 1rem; color: var(--text-secondary);
          transition: 0.3s; pointer-events: none; font-size: 0.8rem; letter-spacing: 1px;
        }
        .input-group input:focus ~ label, .input-group input:not(:placeholder-shown) ~ label,
        .input-group textarea:focus ~ label, .input-group textarea:not(:placeholder-shown) ~ label {
          top: -1.2rem; left: 0; color: var(--accent-cyan); font-size: 0.7rem;
        }
        .glow-line {
          position: absolute; bottom: 0; left: 0; width: 0%; height: 2px;
          background: var(--accent-cyan); transition: width 0.4s;
          box-shadow: var(--glow-cyan);
        }
        .input-group input:focus ~ .glow-line, .input-group textarea:focus ~ .glow-line {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Contact;
