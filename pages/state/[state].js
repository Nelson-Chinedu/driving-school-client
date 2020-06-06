import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Navigation from '../../src/components/SharedLayout/Navbar';
import StateHeroSection from '../../src/components/MainLayout/StateHeroSection';
import Footer from '../../src/components/Footer';
import School from '../../src/components/MainLayout/School';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const SchoolPage = () => {
  return(
    <ApolloProvider client={client}>
      <div>
        <Navigation /> 
        <StateHeroSection />
        <School />
        <Footer />
      </div>
    </ApolloProvider>
  )
};

export default SchoolPage;