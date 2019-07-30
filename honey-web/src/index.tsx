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
  ThemeProvider
} from 'kingsbury/lib';

import {
  App
} from './App';

import {
  lightTheme
} from '~constants/theme';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: 'http://localhost:8000/graphql'
  })
});

render (
  <ApolloProvider client={client}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>, 
  document.getElementById('root')
);
