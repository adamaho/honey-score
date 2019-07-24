import * as React from 'react';

import {
  ThemeProvider,
  theme,
} from 'kingsbury/lib';

export const App = () => (
  <ThemeProvider theme={theme}>
    <div>HoneyScore</div>
  </ThemeProvider>
);

