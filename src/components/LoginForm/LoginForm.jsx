// import { Formik } from 'formik';
// import { Form, Field } from 'formik';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';

const schema = yup.object().shape({
  email: yup.string('Enter your email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required')
    .min(7, 'Password should be of minimum 7 characters length'),
});
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
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        mt: 1,
        textAlign: 'center',
      }}
    >
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoComplete="current-password"
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 3 }}>
        Sign In
      </Button>
    </Box>
    // </Formik>
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
