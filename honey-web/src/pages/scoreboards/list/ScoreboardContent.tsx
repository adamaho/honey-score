import * as React from 'react';

import {
  History
} from 'history';

import {
  DrawerState
} from 'kingsbury/lib/components/drawer/types';

import {
  ViewBody
} from '~components/layout';

import EmptyScoreboardList from './EmptyScoreboardList';

import {
  ScoreboardList
} from './ScoreboardList';

import {
  IScoreboard
} from '../types';


interface IScoreboardBodyProps {
  setDrawerState: (drawerState: DrawerState) => void;
}

const scoreboards: IScoreboard[] = [
  {
    id: 1,
    name: 'Lifetime',
    game: 'BACKGAMMON',
    players: ['aaho', 'bgoad']
  },
  {
    id: 2,
    name: 'Daily',
    game: 'BACKGAMMON',
    players: ['aaho', 'bgoad']
  }
];

const ScoreboardContent: React.FunctionComponent<IScoreboardBodyProps> = ({
  setDrawerState
}) => (
  <ViewBody>
    {scoreboards.length === 0 ?
      <EmptyScoreboardList
        setDrawerState={setDrawerState}
      /> :
      <ScoreboardList
        scoreboards={scoreboards}
        setDrawerState={setDrawerState}
      />
    }
  </ViewBody>
);

export default ScoreboardContent;
