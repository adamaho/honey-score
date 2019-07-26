import * as React from 'react';

import {
  ApolloClient
}  from 'apollo-client';

import {
  createUploadLink
} from 'apollo-upload-client';

import {
  InMemoryCache
} from 'apollo-cache-inmemory';

import {
  render
} from 'react-dom';

import {
  ApolloProvider
} from 'react-apollo';

import {
  ThemeProvider,
  theme
} from 'kingsbury/lib';

import {
  App
} from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: 'http://localhost:8000/graphql'
  })
});

render (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>, 
  document.getElementById('root')
);
