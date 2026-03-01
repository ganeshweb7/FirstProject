import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const ReviewsSection: React.FC = () => {
  return (
    <section style={{ padding: '120px 0', background: 'var(--cream-dark)' }}>
      <div className="container">
        <div className="section-title">
          <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>Voices of Trust</h4>
          <h2>Customer Stories</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {shopData.reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                background: 'white', padding: '3rem', borderRadius: '4px',
                border: '1px solid var(--gold)', position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.2, position: 'absolute', top: '20px', left: '20px', lineHeight: 1 }}>“</div>
              <div style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>
                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', fontStyle: 'italic', lineHeight: 1.8 }}>
                {review.text}
              </p>
              <div style={{ borderTop: '1px solid var(--cream-dark)', paddingTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--maroon)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.name}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600 }}>Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
