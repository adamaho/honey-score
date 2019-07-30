import * as React from 'react';

import {
  styled,
  Card,
  H3,
  P
} from 'kingsbury/lib';

const EmptyScoreboardBodyContainer = styled.div`
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

export const EmptyScoreboardList: React.FunctionComponent = () => (
  <EmptyScoreboardBodyContainer>
    <Card>
      <EmptyCardContent>
        <EmptyCardTitle>No Scoreboards</EmptyCardTitle>
        <EmptyCardDescription>Create a new scoreboard to really see who is winning.</EmptyCardDescription>
      </EmptyCardContent>
    </Card>
  </EmptyScoreboardBodyContainer>
);