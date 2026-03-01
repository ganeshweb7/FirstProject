import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { shopData } from '../data';

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div 
        className="scroll-progress" 
        style={{ 
          scaleX, position: 'fixed', top: 0, left: 0, right: 0, 
          height: '4px', background: 'var(--gold)', transformOrigin: '0%', 
          zIndex: 2001 
        }} 
      />
      
      <nav 
        className={scrolled ? 'glass-panel' : ''}
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 2000, 
          padding: scrolled ? '0.8rem 0' : '1.2rem 0',
          transition: 'all 0.4s ease',
          background: scrolled ? 'var(--glass-bg)' : 'transparent'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, 
              color: 'var(--maroon)', display: 'flex', alignItems: 'center', gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>⚜️</span> {shopData.name}
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{ 
                  fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, 
                  color: 'var(--text-dark)', textDecoration: 'none', position: 'relative' 
                }}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              display: 'none', background: 'transparent', border: 'none', 
              color: 'var(--maroon)', fontSize: '1.5rem', cursor: 'pointer',
              zIndex: 2002
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
              background: 'var(--cream)', zIndex: 1999, display: 'flex',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              gap: '2rem'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  fontSize: '2rem', fontFamily: 'var(--font-heading)', 
                  color: 'var(--maroon)', textDecoration: 'none', fontWeight: 700 
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link::after {
          content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px;
          background: var(--maroon); transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--maroon) !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
