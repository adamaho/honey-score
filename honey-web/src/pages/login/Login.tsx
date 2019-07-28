import * as React from 'react';
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
  
  onSubmit = (values: ILoginForm, { setSubmitting }: FormikActions<ILoginForm>) => {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);

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
              validateOnBlur={false}
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={loginSchema}
              onSubmit={this.onSubmit}
              render={({
                values,
                errors,
                handleChange,
                isSubmitting
              }: FormikProps<ILoginForm>) => {
                console.log(errors);
                return (
                  <Form noValidate={true}>
                    <StyledInput
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      onChange={handleChange}
                    />
                    <StyledInput
                      id="password"
                      name="password"
                      placeholder="password"
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
