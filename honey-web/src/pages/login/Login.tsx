import * as React from 'react';
import * as _ from 'lodash';
import * as Yup from 'yup';

import {
  styled,
  Input,
  Button
} from 'kingsbury/lib';

import {
  Formik,
  Form,
  FormikProps,
  FormikActions
} from 'formik';

import {
  Logo
} from '../../components';
import console = require('console');

interface ILoginForm {
  email: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a vaild email')
    .required('Please enter an email'),
  password: Yup.string().required('Please enter a password')
});

const LogoContainer = styled.div`
/* Will need to add some support for media queries here */

  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const InputError = styled.p`
  margin-top: 0px;
  font-size: 12px;
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
  width: 100%;
`;

class Login extends React.Component {
  
  onSubmit = (values: ILoginForm, { setSubmitting }: FormikActions<ILoginForm>) => {
    // exec mutation here

  }

  render() {
    return (
      <div className="login">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <FormContainer>
          <FormContent>
            <Formik
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={loginSchema}
              onSubmit={this.onSubmit}
              render={({
                errors,
                handleChange,
                isSubmitting
              }: FormikProps<ILoginForm>) => {
                console.log(errors);
                return (
                  <Form>
                    <StyledInput
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="your@email.com"
                      error={errors.email}
                      errorComponent={(error) => <InputError>{error}</InputError>}
                      onChange={handleChange}
                    />
                    <StyledInput
                      id="password"
                      name="password"
                      label="Password"
                      placeholder="password"
                      type="password"
                      error={errors.password}
                      errorComponent={(error) => <InputError>{error}</InputError>}
                      onChange={handleChange}
                    />
                    <StyledButton
                      type="submit"
                      buttonType="primary"
                      disabled={isSubmitting}
                    >
                      Login
                    </StyledButton>
                  </Form>
                );
              }}
            />
          </FormContent>
        </FormContainer>
      </div>
    );
  }
}

export default Login;
