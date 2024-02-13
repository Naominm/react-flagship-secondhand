import React, { useState, useEffect } from 'react';
import './hero.css';
import { FaAndroid } from 'react-icons/fa';

export default function Hero() {
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
        alt="Hero"
        width={1200}
        height={500}
        className="hero-image"
      />
      <div className="card-container">
        <div className="card">
          <div className="card-heading">
            Second Hand 
          </div>
          <div className="subheading">
            {/* Sell and Buy goods at the comfort of your home */}
            Buy and sell goods effortlessly from home with our app.
             {/* Download now for seamless transactions and delightful discoveries! */}
          </div>
          {apkLink ? (
            <a
              className="playstore-container"
              target="_blank"
              rel="noopener noreferrer"
              href={apkLink}
            >
              <p>Get the App</p>
              <FaAndroid className='download-icon'/>
            </a>
          ) : (
            <p>Loading...</p>
          )}
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
