import * as React from 'react';

import {
  View,
  ViewHeader,
  ViewBody,
  ViewFooter
} from '../../components/layout'
 
export const Scoreboards: React.FunctionComponent = () => (
  <View>
    <ViewHeader
      title="Scoreboards"
      onCreateNew={() => console.log('asdfasdf')}
    />
    <ViewBody>
      This is the main Scoreboards
    </ViewBody>
    <ViewFooter>
      asdasd
    </ViewFooter>
  </View>
);

