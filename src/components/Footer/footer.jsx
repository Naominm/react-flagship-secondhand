import React from 'react';
import './footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <img src="./images/playstoreIcon.svg" alt="Playstore icon" />
          </div>
        </div>
        <div className="social-media">
          <span><b>Follow us </b></span>
          <img src="./images/xicon.svg" alt="Twitter icon" />
          <img src="./images/linkedinIcon.svg" alt="LinkedIn icon" />
          <img src="./images/facebookIcon.svg" alt="Facebook icon" />
        </div>
        <div className="return-button" onClick={scrollToTop}>
          <span>Return to top</span>
          <img src="./images/Frame 29.svg" alt="Return to top" />
        </div>
      </div>
    </div>
  );
}
