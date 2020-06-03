import React, {FunctionComponent} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Navigation from '../../src/components/SharedLayout/Navbar';
import HeroSection from '../../src/components/MainLayout/HeroSection';
import Footer from '../../src/components/Footer';
import School from '../../src/components/MainLayout/School';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const SchoolPage: FunctionComponent<{}> = () => {
  return(
    <ApolloProvider client={client}>
      <div>
        <Navigation /> 
        <HeroSection />
        <School />
        <Footer />
      </div>
    </ApolloProvider>
  )
};

export default SchoolPage;