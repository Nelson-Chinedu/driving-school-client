import {gql} from 'apollo-boost';

const getStatesQuery = gql`
  {
    states{
      id
      name
      landmark
    }
  }
`;

const getSchoolsQuery = gql`
  query($state: String!){
    State(state: $state){
      id
      name
      address
    }
  }
`;

export {getStatesQuery, getSchoolsQuery};