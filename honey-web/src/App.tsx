import * as React from 'react';

import {
  createGlobalStyle
} from 'kingsbury/lib';

import Main from './pages/Main';

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    height: 100vh;
    width: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Permanent Marker', cursive;
  }

  #root, .app {
    height: 100%;
    width: 100%;
  }
`

export const App = () => (
  <div className="app">
    <GlobalStyles />
    <Main />
  </div>
);

