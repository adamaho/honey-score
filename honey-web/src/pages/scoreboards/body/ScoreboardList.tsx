import * as React from 'react';

import {
  History
} from 'history';

import {
  styled,
  Card,
  H3,
  P
} from 'kingsbury/lib';

import {
  IScoreboard
} from '../types';

import {
  SUPPORTED_GAMES
} from '~constants/games';

import {
  ROUTES
} from '~constants/routes';

interface IScoreboardListProps {
  scoreboards: IScoreboard[];
  history: History;
};

interface IScoreboardListCardProps {
  name: string;
  game: string;
  onClick: () => void;
};

interface ITest {
  game: string;
}


const ScoreboardListContainer = styled.div`
  height: 100%;
  max-width: 700px;
`;

const ScoreboardListCard = styled<any>(Card)`
  display: flex;
  align-items: flex-start;
  border-left: 20px solid ${(props) => SUPPORTED_GAMES[props.game].color};

  width: unset; 
  max-width: 700px;
  height: 110px;

  margin-bottom: 40px;

  .content {
    display: flex;
    flex-direction: column;

    padding: 10px 0px 0px 10px;
  }
`;

const StyledP = styled(P)`
  color: ${(props) => props.theme.colors.darkGrey};
`;

const ScoreboardListItem: React.FunctionComponent<IScoreboardListCardProps> = ({
  name,
  game,
  onClick
}) => (
  <ScoreboardListCard
    game={game}
    onClick={onClick}
  >
    <H3>{name}</H3>
    <StyledP>{game}</StyledP>
  </ScoreboardListCard>
);

export const ScoreboardList: React.FunctionComponent<IScoreboardListProps> = ({
  scoreboards,
  history
}) => (
  <ScoreboardListContainer>
    {scoreboards.map((scoreboard, index) => (
      <ScoreboardListItem
        key={index}
        name={scoreboard.name}
        game={scoreboard.game}
        onClick={() => history.push(ROUTES.EDIT_SCOREBOARD(scoreboard.id))}
      />
    ))}
  </ScoreboardListContainer>
);

