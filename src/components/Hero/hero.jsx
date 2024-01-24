import React from 'react';
import './hero.css'; 

export default function Hero() {
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
          <div className="playstore-container">
            <span>Get It on Playstore <b>NOW!</b></span>
            <img
              src="/images/add.jpg" 
              alt="Playstore-icon"
              className="playstore-icon"
            />
          </div>
        </div>
        <div className="social-container">
          <img
            src="/images/xicon.svg" 
            alt="twitter-icon"
            className="social-icon"
          />
          <img
            src="/images/linkedinIcon.svg" 
            alt="linkedIn-icon"
            className="social-icon"
          />
          <img
            src="/images/facebookIcon.svg" 
            alt="facebook-icon"
            className="social-icon"
          />
        </div>
      </div>
    </div>
  );
}
