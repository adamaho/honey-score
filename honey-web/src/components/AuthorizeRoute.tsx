import * as React from 'react';

import {
  Redirect,
  Route,
  RouteProps
} from 'react-router';

import {
  ROUTES
} from '../constants/routes';

export const AuthorizeRoute: React.FunctionComponent<RouteProps> = (props) => {
  // check if token exists
  // const token = localStorage.getItem('token');
  const token = true;

  if (token) {
    return (
      <Route
        {...props}
      />
    );
  }

  return <Redirect to={ROUTES.LOGIN}/>;
}
