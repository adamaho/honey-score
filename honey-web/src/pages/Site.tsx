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
  Main
} from '.';

const Site: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <AuthorizeRoute
        path="/"
        component={Main}
        exact={true}
      />
      <Route
        path="/login"
        component={Login}
        exact={true}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Site;
