import React from 'react';
import './hero.css'; 
import { FaAndroid } from "react-icons/fa";

export default function Hero({apkLink }) {
  
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
    <div className='hero-sec'>
      <img
        src="/images/hero.svg.svg" 
        alt="Hero "
        width={1200} 
        height={500} 
        className="hero-image"
      
      />
      <div className="card-container">
        <div className="card">
          <div className="card-heading">
            Second Hand Resell
          </div>
          <div className="subheading">
            Sell goods at the comfort of your home
          </div>
          <a className="playstore-container"
          target='_blank'
          rel='noopener noreferrer'
          href={apkLink}
          >
            {/* <span>Get It on Playstore <b>NOW!</b></span> */}
            <p>Get the App</p>
            <FaAndroid  className='download-icon'/>
           
          </a>
        </div>
        <div className="social-container">
          <img
            src="/images/xicon.svg" 
            alt="twitter-icon"
            className="social-icon"
            onClick={redirectToTwitter}
          />
          <img
            src="/images/linkedinIcon.svg" 
            alt="linkedIn-icon"
            className="social-icon"
            onClick={redirectToLinkedIn}
          />
          <img
            src="/images/facebookIcon.svg" 
            alt="facebook-icon"
            className="social-icon"
            onClick={redirectToFacebook}
          />
        </div>
      </div>
    </div>
  );
}
