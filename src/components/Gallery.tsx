import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shopData } from '../data';

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" style={{ padding: '120px 0', background: 'var(--maroon-dark)' }}>
      <div className="container">
        <div className="section-title">
          <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>Visual Elegance</h4>
          <h2 style={{ color: 'white' }}>The Lookbook</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(150px, 45%, 300px), 1fr))', 
          gap: '1.5rem',
          gridAutoRows: '300px'
        }}>
          {shopData.gallery.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`img-${index}`}
              onClick={() => setSelectedImg(src)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              style={{ 
                borderRadius: '4px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                gridRow: index % 3 === 0 ? 'span 2' : 'span 1',
                border: '1px solid var(--gold)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <img 
                src={src} 
                alt="Gallery" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
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
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.98)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5000,
                padding: '2rem'
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                exit={{ scale: 0.8 }}
                style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}
              >
                <img 
                  src={selectedImg} 
                  alt="Full view"
                  style={{ 
                    maxHeight: '85vh', 
                    maxWidth: '90vw', 
                    border: '2px solid var(--gold)',
                    boxShadow: '0 0 50px rgba(197, 160, 89, 0.3)',
                    objectFit: 'contain'
                  }} 
                />
                <button 
                  onClick={() => setSelectedImg(null)}
                  style={{
                    position: 'absolute', top: '-50px', right: '0',
                    background: 'transparent', border: 'none', color: 'var(--gold)',
                    fontSize: '2.5rem', cursor: 'pointer'
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
