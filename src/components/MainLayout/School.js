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
           <div className="c-SchoolCard-wrapper w-10/12 my-0 mx-auto  md:my-0 md:mx-4 md:inline-flex" key={state.id} >
            <div className="c-SchoolCard my-12 relative w-full rounded h-56 p-5 text-center h-56 border-red-400">
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