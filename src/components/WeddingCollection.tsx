import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const WeddingCollection: React.FC = () => {
  const categories = ["Kids", "Mens", "Ladies"];

  return (
    <section id="collection" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--maroon)', marginBottom: '1rem' }}>Our New Arrivals</h2>
          <div style={{ width: '100px', height: '4px', background: 'var(--gold)', margin: '0 auto' }}></div>
        </div>

        {categories.map((cat) => (
          <div key={cat} style={{ marginBottom: '6rem' }}>
            <motion.h3 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', marginBottom: '2.5rem', paddingLeft: '1.5rem', borderLeft: '6px solid var(--gold)', color: 'var(--maroon)' }}
            >
              {cat} Wear
            </motion.h3>
            <div style={{ display: 'flex', gap: '2.5rem', overflowX: 'auto', padding: '1.5rem', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
              {shopData.collection.filter(p => p.category === cat).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <motion.div 
      className="glass-panel"
      whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      style={{ minWidth: '350px', borderRadius: '20px', overflow: 'hidden', scrollSnapAlign: 'start' }}
    >
      <div style={{ height: '450px', overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          src={product.image} 
          alt={product.title} 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {product.badge && (
          <span style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--maroon)', color: 'var(--gold)', padding: '0.4rem 1.2rem', fontSize: '0.8rem', fontWeight: 800, borderRadius: '50px', border: '1px solid var(--gold)' }}>
            {product.badge}
          </span>
        )}
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--maroon)', fontWeight: 700 }}>{product.title}</h4>
        <p style={{ fontSize: '1.2rem', color: 'var(--gold)', fontWeight: 800 }}>{product.price}</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          style={{ marginTop: '1.5rem', padding: '0.8rem 2rem', borderRadius: '50px', border: '2px solid var(--maroon)', background: 'transparent', color: 'var(--maroon)', fontWeight: 700, cursor: 'pointer' }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WeddingCollection;
