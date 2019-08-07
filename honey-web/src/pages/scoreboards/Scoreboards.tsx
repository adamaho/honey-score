import * as React from 'react';

import {
  RouteComponentProps
} from 'react-router';

import {
  Button
} from 'kingsbury/lib';

// TODO: Change this to be included in index in kingsbury
import {
  DrawerState
} from 'kingsbury/lib/components/drawer/types';

import {
  View,
  ViewHeader
} from '~components/layout'

import ScoreboardContent from './list/ScoreboardContent';
import EditScoreboard from './edit/EditScoreboard';
 
export const Scoreboards: React.FunctionComponent<RouteComponentProps> = () => {
  const [
    drawerState,
    setDrawerState
  ] = React.useState<DrawerState>('CLOSED');

  return (
    <View>
      <ViewHeader
        title="Scoreboards"
      >
        <Button
          buttonType="primary"
          onClick={() => setDrawerState('OPEN')}
        >
          New
        </Button>
      </ViewHeader>
      <ScoreboardContent
        setDrawerState={setDrawerState}
      />
      <EditScoreboard
        drawerState={drawerState}
        setDrawerState={setDrawerState}
      />
    </View>
  );
}




