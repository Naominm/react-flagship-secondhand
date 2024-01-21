import React from 'react';
import './welcome.css';

export default function Welcome() {
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
        <button>check us out asap! <img src="./images/guidance_up-arrow.svg" alt="" /> </button>
      </div>
      <div className="pic-sec">
        <img
          src="./images/image.svg" // Path to the image in the public folder
          alt="iphoneX"
          width={400}
          height={100}
          className="image-sway"
        />
      </div>
    </div>
  );
}
