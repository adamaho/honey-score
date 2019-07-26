import * as React from 'react';

import {
  Input,
  Button
} from 'kingsbury/lib';

import {
  Logo
} from '../../components';
import console = require('console');

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Logo />
        <Input placeholder="your@email.com" />
        <Input placeholder="password" />
        <Button
          type="primary"
          onClick={() => console.log('login')}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
