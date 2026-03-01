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
    { name: 'About', href: '#about' },
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
          height: '3px', background: 'var(--gold)', transformOrigin: '0%', 
          zIndex: 2001 
        }} 
      />
      
      <nav 
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 2000, 
          padding: scrolled ? '1rem 0' : '1.5rem 0',
          transition: 'var(--transition)',
          background: scrolled ? 'rgba(255, 250, 240, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, 
              color: 'var(--maroon)', display: 'flex', alignItems: 'center', gap: '0.8rem',
              cursor: 'pointer', letterSpacing: '2px'
            }}
          >
            <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>⚜️</span> 
            <span style={{ background: 'linear-gradient(to right, var(--maroon), var(--gold-dark))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {shopData.name.split(' ')[0]}
            </span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link, idx) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, 
                  color: 'var(--maroon)', textDecoration: 'none', position: 'relative',
                  letterSpacing: '1.5px', textTransform: 'uppercase'
                }}
                className="nav-link"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              display: 'none', background: 'transparent', border: 'none', 
              color: 'var(--maroon)', fontSize: '1.8rem', cursor: 'pointer',
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh',
              background: 'var(--cream)', zIndex: 1999, display: 'flex',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              gap: '2.5rem', boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  fontSize: '1.8rem', fontFamily: 'var(--font-heading)', 
                  color: 'var(--maroon)', textDecoration: 'none', fontWeight: 700,
                  letterSpacing: '3px', textTransform: 'uppercase'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '2rem', textAlign: 'center' }}
            >
              <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', letterSpacing: '2px' }}>ESTD 2008</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link::after {
          content: ''; position: absolute; bottom: -8px; left: 0; width: 0; height: 1.5px;
          background: var(--gold); transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--gold-dark) !important; }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
