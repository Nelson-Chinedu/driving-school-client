import Link from 'next/link';
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {getStatesQuery} from '../queries/index';

import Loading from '../SharedLayout/Loading';

import '../../../assets/stateCard.css';

const StateCard = () => {
  
  const {loading, data } = useQuery(getStatesQuery);
  if(loading || !data){
    return(
      <Loading />
    )
  }

  const {states} = data;
  
  return (
    <div className="container mx-auto max-w-screen-lg my-16">
       {states.map((state) => {
         return(
           <Link href='/state/[state]' as={`/state/${state.name}`} key={state.id}>
             <a>
               <div className="c-StateCard-wrapper w-10/12 my-0 mx-auto  md:my-0 md:mx-4 md:inline-flex">
                 <div className="c-StateCard my-12 relative w-full rounded h-56">
                   <img className="rounded w-full" src={state.landmark} alt=""/>
                   <div className="c-StateCard-name absolute text-center w-full">
                     <h2 className="text-white text-xl">{state.name}</h2>
                   </div>
                 </div>
               </div>
             </a>
           </Link>
         )
       })}
    </div>
  )
};

export default StateCard;
