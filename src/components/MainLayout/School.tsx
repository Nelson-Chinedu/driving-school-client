import React, {FunctionComponent} from 'react';
import { useRouter, Router } from 'next/router';
import {graphql} from 'react-apollo';
import {getSchoolsQuery} from '../../../src/components/queries/index';

import '../../../assets/schoolCard.css';

type Props = {
  data: any
}

const StateView: FunctionComponent<Props> = (props) => {
  const router = useRouter();
  console.log(router.query.id)
  
  const {State, loading} = props.data;

  if (loading || !State){
    return(
      <div>loading</div>
    )
  }
  
  return (
    <div className="container mx-auto max-w-screen-lg my-16">
        
       {State.map((state) => {
         return(
           <div className="c-SchoolCard-wrapper border-red-300 my-8 inline-flex" key={state.id} >
            <div className="c-SchoolCard px-5 text-center rounded h-56 border-red-400">
              <h2 className='my-4 font-semibold'>{state.name}</h2>
              <h4>{state.address}</h4>
            </div>
           </div>
         )
       })}
    </div>
  )
};

export default graphql(getSchoolsQuery,{
      options: () => {
          return {
              variables: {
                  state: 'imo'
              }
          }
      }
  })(StateView);