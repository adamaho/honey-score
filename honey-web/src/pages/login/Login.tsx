import * as React from 'react';
import * as _ from 'lodash';

import {
  RouteComponentProps
} from 'react-router-dom';

import {
  styled
} from 'kingsbury/lib';

import {
  ROUTES
} from '~constants/routes';

import {
  Logo
} from '../../components';

import {
  ILoginResult
} from './types';

import LoginForm from './LoginForm';
import console = require('console');

interface ILoginProps extends RouteComponentProps {};

const LogoContainer = styled.div`
/* Will need to add some support for media queries here */

  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 20px;
`;

const FormContent = styled.div`
  max-width: 400px;
  width: 100%;
`;

class Login extends React.Component<ILoginProps> {

  onLoginResult = (result: ILoginResult) => {
    const {
      history
    } = this.props;

    if (result.error) {
      console.log(result.error);
    } else {
      localStorage.setItem('token', result.token);
      history.push(ROUTES.MAIN);
    }
  }

  render() {
    return (
      <div className="login">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <FormContainer>
          <FormContent>
            <LoginForm onLoginResult={this.onLoginResult} />
          </FormContent>
        </FormContainer>
      </div>
    );
  }
}

export default Login;
