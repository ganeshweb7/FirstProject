import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const WeddingCollection: React.FC = () => {
  const categories = ["Kids", "Mens", "Ladies"];

  return (
    <section id="collection" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: 'var(--maroon)', marginBottom: '1rem' }}
          >
            Our New Arrivals
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            style={{ height: '4px', background: 'var(--gold)', margin: '0 auto' }}
          ></motion.div>
        </div>

        {categories.map((cat, idx) => (
          <div key={cat} style={{ marginBottom: '5rem' }}>
            <motion.h3 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', 
                marginBottom: '2rem', 
                paddingLeft: '1rem', 
                borderLeft: '5px solid var(--gold)', 
                color: 'var(--maroon)' 
              }}
            >
              {cat} Wear
            </motion.h3>
            <div 
              className="collection-grid"
              style={{ 
                display: 'flex', 
                gap: '2rem', 
                overflowX: 'auto', 
                padding: '1rem 0.5rem 2.5rem', 
                scrollSnapType: 'x mandatory', 
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {shopData.collection.filter(p => p.category === cat).map((product, pIdx) => (
                <ProductCard key={product.id} product={product} delay={pIdx * 0.1} />
              ))}
            </div>
            <div style={{ textAlign: 'right', marginTop: '-1rem', opacity: 0.5, fontSize: '0.8rem', display: 'none' }} className="scroll-hint">
              Scroll for more →
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .collection-grid::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .scroll-hint { display: block !important; }
        }
      `}</style>
    </section>
  );
};

const ProductCard: React.FC<{ product: any, delay: number }> = ({ product, delay }) => {
  return (
    <motion.div 
      className="glass-panel"
      whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(212, 175, 55, 0.15)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      style={{ 
        minWidth: 'clamp(280px, 80vw, 350px)', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        scrollSnapAlign: 'start',
        border: '1px solid var(--glass-border)'
      }}
    >
      <div style={{ height: 'clamp(350px, 50vh, 450px)', overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          src={product.image} 
          alt={product.title} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {product.badge && (
          <span style={{ 
            position: 'absolute', top: '15px', right: '15px', 
            background: 'var(--maroon)', color: 'var(--gold)', 
            padding: '0.3rem 1rem', fontSize: '0.75rem', 
            fontWeight: 800, borderRadius: '50px', border: '1px solid var(--gold)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}>
            {product.badge}
          </span>
        )}
      </div>
      <div style={{ padding: '1.5rem', textAlign: 'center' }}>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--maroon)', fontWeight: 700 }}>{product.title}</h4>
        <p style={{ fontSize: '1.1rem', color: 'var(--gold)', fontWeight: 800 }}>{product.price}</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            marginTop: '1.2rem', padding: '0.7rem 1.8rem', 
            borderRadius: '50px', border: '2px solid var(--maroon)', 
            background: 'transparent', color: 'var(--maroon)', 
            fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--maroon)';
            e.currentTarget.style.color = 'var(--gold)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--maroon)';
          }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WeddingCollection;
