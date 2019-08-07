import * as React from 'react';

import {
  createGlobalStyle
} from 'kingsbury/lib';

import Site from './pages/Site';

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    height: 100vh;
    width: 100%;

    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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
    <Site />
  </div>
);

