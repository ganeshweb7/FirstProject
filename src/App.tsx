import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeddingCollection from './components/WeddingCollection';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import ShopDetails from './components/ShopDetails';
import Footer from './components/Footer';
import GoldParticles from './components/GoldParticles';

function App() {
  return (
    <>
      <GoldParticles />
      <Navbar />
      <main>
        <Hero />
        <WeddingCollection />
        <Offers />
        <Gallery />
        <ShopDetails />
      </main>
      <Footer />
    </>
  );
}

export default App;
