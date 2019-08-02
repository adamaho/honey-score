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

interface IScoreboardBodyProps {
  history: History;
}

const scoreboards = [
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
    name: 'Lifetime',
    game: 'LAWN_BOWLING',
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
    game: 'LAWN_BOWLING',
    players: ['aaho', 'bgoad']
  }
];

export const ScoreboardBody: React.FunctionComponent<IScoreboardBodyProps> = ({
  history
}) => (
  <ViewBody>
    {/* <EmptyScoreboardList /> */}
    <ScoreboardList
      scoreboards={scoreboards}
      history={history}
    />
  </ViewBody>
);
