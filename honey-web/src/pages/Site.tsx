import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {
  AuthorizeRoute
} from '../components/AuthorizeRoute';

import {
  Login,
  Scoreboards
} from '.';

const Site: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <AuthorizeRoute
        path="/scoreboards"
        component={Scoreboards}
        exact={true}
      />
      <Route
        path="/login"
        component={Login}
        exact={true}
      />
      <Redirect to="/scoreboards" />
    </Switch>
  </Router>
);

export default Site;
