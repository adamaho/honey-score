import * as React from 'react';

import {
  RouteComponentProps
} from 'react-router';

import {
  Button
} from 'kingsbury/lib';

import {
  View,
  ViewHeader
} from '~components/layout'

import {
  ScoreboardContent
} from '.';

import EditScoreboard from './edit/EditScoreboard';

export type EditView = 'CLOSED' | 'PARTIAL' | 'OPEN';
 
export const Scoreboards: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {

  const [
    editView,
    setEditView
  ] = React.useState<EditView>('PARTIAL');

  return (
    <View>
      <ViewHeader
        title="Scoreboards"
      >
        <Button
          buttonType="primary"
          onClick={() => setEditView('OPEN')}
        >
          New
        </Button>
      </ViewHeader>
      <ScoreboardContent history={history} />
      <EditScoreboard
        editView={editView}
        setEditView={setEditView}
      />
    </View>
  );
}




