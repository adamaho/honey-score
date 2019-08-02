import * as React from 'react';

import {
  History
} from 'history';

import {
  styled,
  Card,
  H3,
  P,
  Tag
} from 'kingsbury/lib';

import {
  IScoreboard
} from '../types';

import {
  ROUTES
} from '~constants/routes';

interface IScoreboardListProps {
  scoreboards: IScoreboard[];
  history: History;
};

interface IScoreboardListCardProps {
  scoreboard: IScoreboard
  onClick: () => void;
};


const ScoreboardListContainer = styled.div`
  height: 100%;
  max-width: 700px;
`;

const ScoreboardListCard = styled(Card)`
  display: flex;
  align-items: flex-start;

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
  scoreboard,
  onClick
}) => (
  <ScoreboardListCard
    onClick={onClick}
  >
    <H3>{scoreboard.name}</H3>
    <StyledP>{scoreboard.game}</StyledP>
    {scoreboard.players.map((player, index) => (
      <Tag key={index} text={player} tagType="default" />
    ))}
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
        scoreboard={scoreboard}
        onClick={() => history.push(ROUTES.EDIT_SCOREBOARD(scoreboard.id))}
      />
    ))}
  </ScoreboardListContainer>
);

