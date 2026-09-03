import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
