import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shopData } from '../data';

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--maroon)' }}>Our Lookbook</h2>
          <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Glimpses of elegance from our latest shoots.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem',
          gridAutoRows: '250px'
        }}>
          {shopData.gallery.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`img-${index}`}
              onClick={() => setSelectedImg(src)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              style={{ 
                borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
                gridRow: index % 3 === 0 ? 'span 2' : 'span 1' // Basic masonry effect
              }}
            >
              <img src={src} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5000 
              }}
            >
              <motion.img 
                src={selectedImg} 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                exit={{ scale: 0.8 }}
                style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '8px', border: '2px solid var(--gold)' }} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
