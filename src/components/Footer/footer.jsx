import React from 'react';
import './footer.css';
import { FaAndroid } from "react-icons/fa";

export default function Footer({apkLink}) {
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
        <a className="flex-container"
          target='_blank'
          rel='noopener noreferrer'
          href={apkLink}
          >
            {/* <span>Get It on Playstore <b>NOW!</b></span> */}
            <p>Get the App</p>
            <FaAndroid  className='download-icon'/>
           
          </a>
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
