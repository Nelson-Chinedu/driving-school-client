import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import {graphql} from 'react-apollo';
import {getStatesQuery} from '../queries/index';

import '../../../assets/stateCard.css';

type Props = {
  data: any
}

const StateCard: FunctionComponent<Props> = (props) => {
  
  const {states, loading} = props.data;

  if (loading || !states){
    return(
      <div>loading</div>
    )
  }
  
  return (
    <div className="container mx-auto max-w-screen-lg my-16">
        
       {states.map((state) => {
         return(
           <Link href='/state/[state]' as={`/state/${state.name}`}>
             <a>
           <div className="c-StateCard-wrapper md:flex md:justify-between my-8 inline-flex" key={state.id} >
            <div className="c-StateCard p-16 rounded h-56">
              <h2>{state.name}</h2>
            </div>
           </div>
           </a>
           </Link>
         )
       })}
    </div>
  )
};

export default graphql(getStatesQuery)(StateCard);
