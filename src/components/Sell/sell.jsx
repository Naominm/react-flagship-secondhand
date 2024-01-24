import React from 'react';
import './sell.css';

export default function Sell() {
  return (
    <div className='sell-section'>
      <div className='title'>Resell with Us Today</div>
      <div className='pic-section'>
        <img
          src='./images/selling1.svg' 
          alt='iphoneX'
          width={800}
          height={100}
          className='scrolling-image'
        />
        <img
          src='./images/vector1.jpg' 
          alt='iphoneX'
          width={800}
          height={100}
          className='scrolling-image'
        />
        <img
          src='./images/vector2.jpg'
          alt='iphoneX'
          width={800}
          height={100}
          className='scrolling-image'
        />
        <img
          src='./images/vector3.jpg'
          alt='iphoneX'
          width={800}
          height={100}
          className='scrolling-image'
        />
        <img
          src='./images/vector4.jpg' 
          alt='iphoneX'
          width={800}
          height={100}
          className='scrolling-image'
        />
        <img
          src='./images/vector5.jpg'
          alt='iphoneX'
          width={800}
          height={100}
          className='scrolling-image'
        />
      </div>
    </div>
  );
}
