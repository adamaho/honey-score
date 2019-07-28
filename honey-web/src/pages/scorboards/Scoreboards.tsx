import * as React from 'react';

import {
  ViewHeader
} from '../../components/layout'
 
export const Scoreboards: React.FunctionComponent = () => (
  <div className="scoreboards">
    <ViewHeader
      title="Scoreboards"
      onCreateNew={() => console.log('asdfasdf')}
    />
    This is the main Scoreboards
  </div>
);

