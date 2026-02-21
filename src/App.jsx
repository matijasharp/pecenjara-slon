import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen w-full relative">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Menu />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
