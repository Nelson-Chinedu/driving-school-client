import React, {FunctionComponent} from 'react';
import Head from 'next/head';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Navigation from '../src/components/SharedLayout/Navbar';
import HeroSection from '../src/components/MainLayout/HeroSection';
import Footer from '../src/components/Footer/Footer';
import StateCard from '../src/components/MainLayout/StateCard';

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
})

const LandingPage: FunctionComponent<{}> = () => {
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