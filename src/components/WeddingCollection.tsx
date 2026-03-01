import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const WeddingCollection: React.FC = () => {
  const categories = ["Kids", "Mens", "Ladies"];

  return (
    <section id="collection" style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div className="section-title">
          <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>Royal Curations</h4>
          <h2>New Arrivals</h2>
        </div>

        {categories.map((cat, idx) => (
          <div key={cat} style={{ marginBottom: '6rem' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem'
              }}
            >
              <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: 'var(--maroon)' }}>
                {cat} <span className="text-gold" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>Wear</span>
              </h3>
              <div style={{ flex: 1, height: '1px', background: 'var(--cream-dark)' }}></div>
            </motion.div>

            <div 
              className="collection-grid"
              style={{ 
                display: 'flex', 
                gap: '2.5rem', 
                overflowX: 'auto', 
                padding: '1rem 0.5rem 3rem', 
                scrollSnapType: 'x mandatory', 
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {shopData.collection.filter(p => p.category === cat).map((product, pIdx) => (
                <ProductCard key={product.id} product={product} delay={pIdx * 0.1} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .collection-grid::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

const ProductCard: React.FC<{ product: any, delay: number }> = ({ product, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="royal-card"
      style={{ 
        minWidth: 'clamp(280px, 80vw, 380px)', 
        scrollSnapAlign: 'start',
        overflow: 'hidden'
      }}
    >
      <div style={{ height: '480px', overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          src={product.image} 
          alt={product.title} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {product.badge && (
          <span style={{ 
            position: 'absolute', top: '20px', left: '0', 
            background: 'var(--maroon)', color: 'var(--gold)', 
            padding: '0.5rem 1.5rem', fontSize: '0.7rem', 
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px',
            boxShadow: '5px 5px 15px rgba(0,0,0,0.2)'
          }}>
            {product.badge}
          </span>
        )}
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--maroon)', fontWeight: 600, letterSpacing: '1px' }}>{product.title}</h4>
        <div style={{ height: '2px', width: '30px', background: 'var(--gold)', margin: '0 auto 1rem' }}></div>
        <p style={{ fontSize: '1.3rem', color: 'var(--gold-dark)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{product.price}</p>
        
        <motion.button 
          whileHover={{ background: 'var(--maroon)', color: 'var(--gold)' }}
          style={{ 
            marginTop: '1.5rem', padding: '0.8rem 2rem', 
            border: '1px solid var(--maroon)', 
            background: 'transparent', color: 'var(--maroon)', 
            fontWeight: 700, cursor: 'pointer', transition: '0.4s',
            fontFamily: 'var(--font-heading)', textTransform: 'uppercase', fontSize: '0.8rem',
            letterSpacing: '1px'
          }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WeddingCollection;
