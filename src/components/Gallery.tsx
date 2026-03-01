import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shopData } from '../data';

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 7vw, 3rem)', marginBottom: '1rem', color: 'var(--maroon)' }}
          >
            Our Lookbook
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--text-dark)', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}
          >
            Glimpses of elegance from our latest shoots and premium collections.
          </motion.p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(150px, 45%, 300px), 1fr))', 
          gap: '1rem',
          gridAutoRows: 'clamp(150px, 30vh, 250px)'
        }}>
          {shopData.gallery.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`img-${index}`}
              onClick={() => setSelectedImg(src)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                gridRow: index % 3 === 0 ? 'span 2' : 'span 1',
                border: '1px solid var(--glass-border)'
              }}
            >
              <img 
                src={src} 
                alt="Gallery" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              style={{ 
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5000,
                padding: '1rem'
              }}
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -2 }} 
                animate={{ scale: 1, rotate: 0 }} 
                exit={{ scale: 0.8, opacity: 0 }}
                style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}
              >
                <img 
                  src={selectedImg} 
                  alt="Full view"
                  style={{ 
                    maxHeight: '90vh', 
                    maxWidth: '90vw', 
                    borderRadius: '12px', 
                    border: '3px solid var(--gold)',
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
                    objectFit: 'contain'
                  }} 
                />
                <button 
                  onClick={() => setSelectedImg(null)}
                  style={{
                    position: 'absolute', top: '-40px', right: '0',
                    background: 'transparent', border: 'none', color: 'white',
                    fontSize: '2rem', cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
