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

/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
  <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
  />
  <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    Sign In
  </Button>
  <Grid container>
    <Grid item xs>
      <Link href="#" variant="body2">
        Forgot password?
      </Link>
    </Grid>
    <Grid item>
      <Link href="#" variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </Grid>
  </Grid>
</Box>; */
