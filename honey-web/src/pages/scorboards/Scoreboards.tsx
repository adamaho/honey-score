import * as React from 'react';

import {
  RouteComponentProps
} from 'react-router';

import {
  View,
  ViewHeader
} from '~components/layout'

import {
  ScoreboardBody,
  ScoreboardFooter
} from '.';
 
export const Scoreboards: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => (
  <View>
    <ViewHeader title="Scoreboards" />
    <ScoreboardBody history={history} />
    <ScoreboardFooter history={history} />
  </View>
);

