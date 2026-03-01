import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import WeddingCollection from './components/WeddingCollection';
import Offers from './components/Offers';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import Gallery from './components/Gallery';
import ShopDetails from './components/ShopDetails';
import Footer from './components/Footer';
import GoldParticles from './components/GoldParticles';
import { shopData } from './data';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GoldParticles />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <WeddingCollection />
        <Offers />
        <Gallery />
        <ReviewsSection />
        <FAQSection />
        <ShopDetails />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/91${shopData.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          zIndex: 1000,
          background: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          textDecoration: 'none'
        }}
      >
        <span role="img" aria-label="WhatsApp">💬</span>
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 1000,
              background: 'var(--maroon)',
              color: 'var(--gold)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid var(--gold)',
              cursor: 'pointer',
              fontSize: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
            }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
