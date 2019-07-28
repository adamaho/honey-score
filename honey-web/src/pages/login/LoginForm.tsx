import * as React from 'react';
import * as _ from 'lodash';
import * as Yup from 'yup';

// tslint:disable-next-line
import gql from 'graphql-tag';

import {
  Formik,
  Form,
  FormikProps,
  FormikActions
} from 'formik';

import {
  Mutation,
  MutationFn
} from 'react-apollo';

import {
  styled,
  Input,
  Button
} from 'kingsbury/lib';

import {
  ILoginVariables,
  ILoginResult
} from './types';

interface ILoginFormProps {
  onLoginResult?: (result: ILoginResult) => void;
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a vaild email')
    .required('Please enter an email'),
  password: Yup.string().required('Please enter a password')
});

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

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
      error
    }
  }
`

class LoginForm extends React.Component<ILoginFormProps> {

  onSubmit = (
    values: ILoginVariables,
    { setSubmitting }: FormikActions<ILoginVariables>,
    login: MutationFn<ILoginVariables, any>
  ) => {
    const {
      onLoginResult
    } = this.props;

    login({ variables: { ...values } })
      .then(({ data: { login }}: any) => {
        // re-enable the submit button
        setSubmitting(false);

        // call onLoginResult when request completes
        if (onLoginResult) {
          onLoginResult(login);
        }
      });
  }

  render() {
    return (
      <Mutation<any, ILoginVariables> mutation={LOGIN}>
        {(login) => (
          <Formik
            validateOnChange={false}
            validateOnBlur={true}
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={(
              values: ILoginVariables,
              actions: FormikActions<ILoginVariables>
            ) => (
              this.onSubmit(values, actions, login)
            )}
            render={({
              errors,
              handleChange,
              isSubmitting
            }: FormikProps<ILoginVariables>) => {
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
        )}
      </Mutation>
    );
  }
}

export default LoginForm;
