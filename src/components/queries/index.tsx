import {gql} from 'apollo-boost';

const getStatesQuery = gql`
  {
    states{
      id
      name
    }
  }
`;

export {getStatesQuery};