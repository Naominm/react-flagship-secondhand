import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import Hero from './components/Hero';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Footer />
      <Hero />
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <span>Return to Top</span>
        </div>
      )}
    </div>
  );
}

export default App;
