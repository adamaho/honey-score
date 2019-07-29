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
  ViewBody
} from '~components/layout';

interface IScoreboardBodyProps {
  history: History;
}

const ScoreboardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const EmptyCardContent = styled.div`
  text-align: center;
  padding: 10px;
`;

const EmptyCardTitle= styled(H3)`
  margin-bottom: 0px;
`;

const EmptyCardDescription = styled(P)`
  color: ${(props) => props.theme.colors.darkGrey};
  margin-top: 5px;
`;

const EmptyCard: React.FunctionComponent = () => (
  <Card>
    <EmptyCardContent>
      <EmptyCardTitle>No Scoreboards</EmptyCardTitle>
      <EmptyCardDescription>Create a new scoreboard to really see who is winning.</EmptyCardDescription>
    </EmptyCardContent>
  </Card>
);

export const ScoreboardBody: React.FunctionComponent<IScoreboardBodyProps> = ({
  history
}) => (
  <ViewBody>
    <ScoreboardBodyContainer>
      <EmptyCard />
    </ScoreboardBodyContainer>
  </ViewBody>
);
