import React, {FunctionComponent} from 'react';

import '../../../assets/herosection.css';

const HeroSection: FunctionComponent<{}> = () => {
  return(
    <div className='c-HeroSection'>
      <h1 className='c-HeroSection-Intro text-white text-center text-5xl font-mono'>Find and book driving school in Nigeria</h1>
      <video className='c-HeroSection-VideoBg' autoPlay muted loop>
        <source src='footage.mp4' type="video/mp4"/>
      </video>
    </div>
  )
};

export default HeroSection;