import * as React from 'react';

import {
  Button
} from 'kingsbury/lib';

import {
  History
} from 'history';

import {
  ROUTES
} from '~constants/routes';

import {
  ViewFooter
} from '~components/layout';

interface IScoreboardFooterProps {
  history: History;
}

export const ScoreboardFooter: React.FunctionComponent<IScoreboardFooterProps> = ({
  history
}) => (
  <ViewFooter>
    <Button
      buttonType="primary"
      onClick={() => history.push(ROUTES.NEW_SCOREBOARD)}
    >
      New
    </Button>
  </ViewFooter>
)