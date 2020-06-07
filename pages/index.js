import React from 'react';
import Head from 'next/head';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Navigation from '../src/components/SharedLayout/Navbar';
import HeroSection from '../src/components/MainLayout/MainHeroSection';
import Footer from '../src/components/Footer';
import StateCard from '../src/components/MainLayout/StateCard';

const client = new ApolloClient({
  uri: "https://driving-school-api.herokuapp.com/graphql"
})

const LandingPage = () => {
  return(
    <ApolloProvider client={client}>
      <div>
        <Navigation /> 
        <HeroSection />
        <StateCard />
        <Footer />
      </div>
    </ApolloProvider>
  )
};

export default LandingPage;