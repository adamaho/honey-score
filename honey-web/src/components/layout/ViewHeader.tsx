import * as React from 'react';

import {
  styled,
  Button,
  H1
} from 'kingsbury/lib';

import {
  History
} from 'history';

import {
  ROUTES
} from '~constants';

interface IViewHeaderProps {
  title: string;
  history: History;
};

const ViewHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 1;
  height: 100px;

  padding: 0px 20px;
`;

export const ViewHeader: React.FunctionComponent<IViewHeaderProps> = ({
  title,
  history
}) => (
  <ViewHeaderContainer>
    <H1>{title}</H1>
    <Button
      buttonType="primary"
      onClick={() => history.push(ROUTES.NEW_SCOREBOARD)}
    >
      New
    </Button>
  </ViewHeaderContainer>
);
