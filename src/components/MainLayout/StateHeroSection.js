import React from 'react';
import {useRouter} from 'next/router';
import {useQuery} from '@apollo/react-hooks';

import '../../../assets/stateherosection.css';

const StateHeroSection = () => {
  const router = useRouter();
  const {state} = router.query;

  return(
    <div className='c-StateHeroSection flex items-center text-center'>
      <h1 className='c-StateHeroSection-Intro text-white text-center text-5xl font-mono tracking-wider'>{state} STATE</h1>
    </div>
  )
};

export default StateHeroSection;