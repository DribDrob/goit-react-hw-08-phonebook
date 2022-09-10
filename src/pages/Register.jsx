import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {
  Avatar,
  Box,
  Container,
  // CssBaseline,
  Typography,
} from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const Register = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        py: 6,
      }}
    >
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
    // </ThemeProvider>
  );
};

export default Register;
