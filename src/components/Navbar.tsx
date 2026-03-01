import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { shopData } from '../data';

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--gold)', transformOrigin: '0%', zIndex: 2000 }} />
      <nav 
        className={scrolled ? 'glass-panel' : ''}
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, 
          padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
          transition: 'all 0.4s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--maroon)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>⚜️</span> {shopData.name}
          </div>
          
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {['Home', 'Collection', 'Offers', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                style={{ 
                  fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, 
                  color: 'var(--text-dark)', textDecoration: 'none', position: 'relative' 
                }}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <style>{`
        .nav-link::after {
          content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px;
          background: var(--maroon); transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--maroon) !important; }
      `}</style>
    </>
  );
};

export default Navbar;
