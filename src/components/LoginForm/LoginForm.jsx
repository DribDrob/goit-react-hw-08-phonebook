import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Button from '@mui/material/Button';
import { FormEl, Label, Input, ErrorText } from './LoginForm.styled';
// import { FormEl, Label, Input, ErrorText, Button } from './LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl autoComplete="off">
        <Label>
          <span>Email</span>
          <Input type="email" name="email" />
          <FormError name="email" />
        </Label>
        <Label>
          <span>Password</span>
          <Input type="password" name="password" />
          <FormError name="password" />
        </Label>
        <Button type="submit" variant="contained">
          Sign in
        </Button>
      </FormEl>
    </Formik>
  );
};
