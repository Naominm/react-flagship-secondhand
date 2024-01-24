import React from 'react';
import './footer.css';


export default function Footer() {
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
          <div className="flex-container">
            <span>Get It on <b> Google Play </b></span>
            <img src="./images/add.jpg" alt="Playstore icon" />
          </div>
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
