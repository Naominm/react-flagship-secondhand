import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';  
import './welcome.css';


export default function Welcome() {
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
  return (
    <div className='welcome-section'>
      <div className="text-sec">
        <span><h1>Welcome to the next <br/>Big thing!</h1></span>
        <p>
          Second Hand has transformed the way millions<br/>
          of students buy and sell goods online. This is a<br/>
          movement with a mission to transform the community.<br/>
          Want to become part of it?
        </p>
        {apkLink ? (
            <a
                 target="_blank"
              rel="noopener noreferrer"
              href={apkLink}
            >
       <button onClick={() => window.open(apkLink, '_blank')}>
  check us out asap!
  <FontAwesomeIcon className="red-icon" icon={faArrowRightLong} />
</button>
            </a>
          ) : (
            <p>Loading...</p>
          )} 
      
      
    {/* {apkLink ? (
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
          )} */}
      </div>
      <div className="pic-sec">
        <img
          src="./images/image.svg" 
          alt="iphoneX"
          width={400}
          height={100}
          className="image-sway"
        />
      </div>
    </div>
  );
}
