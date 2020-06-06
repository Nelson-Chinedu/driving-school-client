import React from 'react';
import { useRouter } from 'next/router';
import {useQuery} from '@apollo/react-hooks';
import {getSchoolsQuery} from '../queries/index';

import Loading from '../SharedLayout/Loading';

import '../../../assets/schoolCard.css';


const StateView = () => {
  const router = useRouter();
  const {state} = router.query;

  const {loading, data} = useQuery(getSchoolsQuery, {
    variables: {state: state}
  });
  
  if (loading || !data){
    return (
      <Loading />
      )
    }

  const {State} = data;

  return (
    <div className="container mx-auto max-w-screen-lg my-16">
        
       {State.map((state) => {
         return(
           <div className="c-SchoolCard-wrapper ml-6 my-8 inline-flex" key={state.id} >
            <div className="c-SchoolCard w-full px-5 text-center rounded h-56 border-red-400">
              <h2 className='my-4 font-semibold'>{state.name}</h2>
              <h4>{state.address}</h4>
            </div>
           </div>
         )
       })}
    </div>
  )
};

export default StateView;