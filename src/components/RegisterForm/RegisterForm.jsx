import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { authOperations } from 'redux/auth';
import { FormEl, Label, Input, ErrorText, Button } from './RegisterForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
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
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
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
          <span>Name</span>
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
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
        <Button type="submit">Sign up</Button>
      </FormEl>
    </Formik>
  );
};
