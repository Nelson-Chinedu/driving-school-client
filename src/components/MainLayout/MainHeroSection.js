import React from 'react';

import '../../../assets/herosection.css';

const HeroSection = () => {
  return(
    <div className='c-HeroSection relative overflow-hidden flex items-center text-center'>
      <h1 className='c-HeroSection-Intro text-white text-left text-3xl md:text-center md:text-5xl font-mono'>Find accredited driving school in Nigeria</h1>
      <div className='c-HeroSection-image'></div>
      <video className='c-HeroSection-VideoBg absolute' autoPlay muted loop>
        <source src='footage.mp4' type="video/mp4"/>
      </video>
    </div>
  )
};

export default HeroSection;