import React, { useState, useEffect } from 'react';
import './footer.css';
import { FaAndroid } from 'react-icons/fa';

export default function Footer() {
  const [apkLink, setApkLink] = useState("#");

  useEffect(() => {
    fetch("https://second-hand-goods-backend-2e91c95092aa.herokuapp.com/utilities", {
      method: "GET",
    })
      .then(response => response.json())
      .then(utilities => {
        if (utilities && utilities.apk) {
          setApkLink(utilities.apk);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectToTwitter = () => {
    window.location.href = 'https://twitter.com/';
  };

  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/';
  };

  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  return (
    <div className='footer-container'>
      <div className="text">
        <h5>Second Hand</h5>
      </div>
      <div className="other">
        <div className="plastore-icon">
          {apkLink ? (
            <a className="flex-container" target='_blank' rel='noopener noreferrer' href={apkLink}>
              <p>Get the App</p>
              <FaAndroid className='download-icon'/>
            </a>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="social-media">
          <span><b>Follow us </b></span>
          <img 
            src="./images/xicon.svg" 
            alt="Twitter icon"
            onClick={redirectToTwitter}
          />
          <img 
            src="./images/linkedinIcon.svg"
            alt="LinkedIn icon"
            onClick={redirectToLinkedIn}
          />
          <img
            src="./images/facebookIcon.svg" 
            alt="Facebook icon"
            onClick={redirectToFacebook}
          />
        </div>
        <div className="return-button" onClick={scrollToTop}>
          <span>Return to top</span>
          <img src="./images/Frame 29.svg" alt="Return to top" />
        </div>
      </div>
    </div>
  );
}
