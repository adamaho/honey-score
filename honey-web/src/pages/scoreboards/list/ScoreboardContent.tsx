import * as React from 'react';

import {
  History
} from 'history';

import {
  ViewBody
} from '~components/layout';

import {
  EmptyScoreboardList
} from './EmptyScoreboardList';

import {
  ScoreboardList
} from './ScoreboardList';

import {
  IScoreboard
} from '../types';

interface IScoreboardBodyProps {
  history: History;
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
  },
  {
    id: 3,
    name: 'Daily',
    game: 'BACKGAMMON',
    players: ['aaho', 'bgoad']
  },
  {
    id: 4,
    name: 'Daily',
    game: 'BACKGAMMON',
    players: ['aaho', 'bgoad']
  },
  {
    id: 5,
    name: 'Daily',
    game: 'BACKGAMMON',
    players: ['aaho', 'bgoad']
  }
];

export const ScoreboardContent: React.FunctionComponent<IScoreboardBodyProps> = ({
  history
}) => (
  <ViewBody>
    { scoreboards.length === 0 ?
      <EmptyScoreboardList /> :
      <ScoreboardList
        scoreboards={scoreboards}
        history={history}
      />
    }
  </ViewBody>
);
