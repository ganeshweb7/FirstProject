import React from 'react';
import { motion } from 'framer-motion';
import { shopData } from '../data';

const StatsSection: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--maroon-dark)', color: 'var(--gold)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          {shopData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--cream)', opacity: 0.7 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
