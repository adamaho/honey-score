import * as React from 'react';

import {
  RouteComponentProps
} from 'react-router';

import {
  View,
  ViewHeader,
  ViewBody,
  ViewFooter
} from '../../components/layout'
import { ScoreboardFooter } from './ScoreboardFooter';
 
export const Scoreboards: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => (
  <View>
    <ViewHeader
      title="Scoreboards"
      onCreateNew={() => console.log('asdfasdf')}
    />
    <ViewBody>
      This is the main Scoreboards
    </ViewBody>
    <ScoreboardFooter history={history} />
  </View>
);

