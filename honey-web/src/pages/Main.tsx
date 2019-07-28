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
  Login
} from '.';

const Main: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <AuthorizeRoute
        path="/"
        render={() => <div>Main</div>}
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

export default Main;
