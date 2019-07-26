import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const Main: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        render={() => <div>Main</div>}
        exact={true}
      />
      <Route
        path="/login"
        render={() => <div>Login</div>}
        exact={true}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Main;
