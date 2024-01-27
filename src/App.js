import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer/footer';


function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [apkLink, setApkLink] = useState("#");
  useEffect(() => {
    fetch("https://second-hand-goods-backend-2e91c95092aa.herokuapp.com/utilities", {
      method: "GET",
    })
    .then(response => response.json())
    .then(utilities => {
      console.log("Fetched data:", utilities);
  
      // Check if 'apk' property exists in 'utilities' object
      if (utilities && utilities.apk) {
        setApkLink(utilities.apk);
        console.log("apkLink:", utilities.apk);
      } else {
        console.error("The 'apk' property is missing in the API response.");
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, []);
  
  
 

  

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
       <Hero apkLink={apkLink} />
      <Footer apkLink={apkLink} />

      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <span>Return to Top</span>
        </div>
      )}
    </div>
  );
}

export default App;
