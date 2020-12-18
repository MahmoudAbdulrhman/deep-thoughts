import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// add these library to import apollo
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;