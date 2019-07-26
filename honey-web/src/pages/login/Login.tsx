import * as React from 'react';

import {
  styled,
  Input,
  Button
} from 'kingsbury/lib';

import {
  Logo
} from '../../components';

const LogoContainer = styled.div`
/* Will need to add some support for media queries here */

  display: flex;
  justify-content: center;
  margin: 100px 0px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 20px;
`;

const FormContent = styled.div`
  max-width: 400px;
`;

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <FormContainer>
          <FormContent>
            <StyledInput placeholder="your@email.com" />
            <StyledInput placeholder="password" />
            <StyledButton
              type="primary"
              onClick={() => console.log('login')}
            >
              Login
            </StyledButton>
          </FormContent>
        </FormContainer>
      </div>
    );
  }
}

export default Login;
