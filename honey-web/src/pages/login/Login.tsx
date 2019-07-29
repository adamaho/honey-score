import * as React from 'react';
import * as _ from 'lodash';

import {
  RouteComponentProps
} from 'react-router-dom';

import {
  styled, Notice
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

interface ILoginProps extends RouteComponentProps {};

interface ILoginState {
  error: string;
}

const LOGIN_ERROR_MAP: any = {
  INVALID_CREDENTIALS: 'Invalid email or password'
}

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

class Login extends React.Component<ILoginProps,  ILoginState> {

  state = {
    error: ''
  }

  onLoginResult = (result: ILoginResult) => {
    const {
      history
    } = this.props;

    if (result.error) {
      this.setState({ error: result.error });
    } else {
      localStorage.setItem('token', result.token);
      history.push(ROUTES.SCOREBOARDS);
    }
  }

  render() {
    const {
      error
    } = this.state;

    return (
      <div className="login">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <FormContainer>
          {error !== '' &&
            <Notice
              type="danger"
              description={LOGIN_ERROR_MAP[error]}
            />
          }
          <FormContent>
            <LoginForm onLoginResult={this.onLoginResult} />
          </FormContent>
        </FormContainer>
      </div>
    );
  }
}

export default Login;
