import * as React from 'react';

import {
  RouteComponentProps
} from 'react-router';

import {
  View,
  ViewHeader
} from '~components/layout'

import {
  ScoreboardContent
} from '.';

import EditScoreboard from './edit/EditScoreboard';
 
export const Scoreboards: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => (
  <View>
    <ViewHeader
      title="Scoreboards"
      history={history}
    />
    <ScoreboardContent history={history} />
    <EditScoreboard mode="PARTIAL" />
  </View>
);

