import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shopData } from '../data';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div className="section-title">
          <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>Need Help?</h4>
          <h2>Common Questions</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {shopData.faq.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '1rem' }}>
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                style={{ 
                  width: '100%', padding: '1.5rem 2rem', 
                  background: 'white', border: '1px solid var(--cream-dark)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', transition: 'var(--transition)',
                  borderRadius: '4px'
                }}
              >
                <span style={{ 
                  fontFamily: 'var(--font-heading)', fontSize: '1.1rem', 
                  color: activeIndex === idx ? 'var(--gold-dark)' : 'var(--maroon)',
                  fontWeight: 600, letterSpacing: '1px'
                }}>
                  {item.q}
                </span>
                <span style={{ 
                  color: 'var(--gold)', fontSize: '1.5rem',
                  transform: activeIndex === idx ? 'rotate(45deg)' : 'rotate(0)',
                  transition: '0.3s'
                }}>+</span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '1.5rem 2rem', background: 'rgba(197, 160, 89, 0.05)', border: '1px solid var(--gold)', borderTop: 'none', color: 'var(--text-muted)' }}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
