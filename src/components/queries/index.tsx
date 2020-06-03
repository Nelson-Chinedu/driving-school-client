import {gql} from 'apollo-boost';

const getStatesQuery = gql`
  {
    states{
      id
      name
    }
  }
`;

const getSchoolsQuery = gql`
  query($state: String!){
    State(state: $state){
      name
      address
    }
  }
`;

export {getStatesQuery, getSchoolsQuery};