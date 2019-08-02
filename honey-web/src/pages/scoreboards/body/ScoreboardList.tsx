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
  ROUTES,
  SUPPORTED_GAMES
} from '~constants';

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

const ScoreboardListCard = styled(Card)<IScoreboardListCardProps>`
  display: flex;
  align-items: flex-start;

  width: unset; 
  max-width: 700px;
  height: 110px;

  margin-bottom: 40px;
  padding: 10px;

  border-right: 8px solid ${(props) => SUPPORTED_GAMES[props.scoreboard.game].color};

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    .kingsbury-tag {
      margin-right: 5px;
    }
  }
`;

const ScoreboardListCardTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled(P)`
  color: ${(props) => props.theme.colors.darkGrey};
`;

const ScoreboardListItem: React.FunctionComponent<IScoreboardListCardProps> = ({
  scoreboard,
  onClick
}) => (
  <ScoreboardListCard
    scoreboard={scoreboard}
    onClick={onClick}
  >
    <ScoreboardListCardTitle>
      <H3>{scoreboard.name}</H3>
      <StyledP>{SUPPORTED_GAMES[scoreboard.game].title}</StyledP>
    </ScoreboardListCardTitle>
    <div>
      {scoreboard.players.map((player, index) => (
        <Tag
          key={index}
          text={player}
          tagType="default"
        />
      ))}
    </div>
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
