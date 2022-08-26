import { Box } from '../components/Box';
import { LoginForm } from 'components/LoginForm/LoginForm';
// import { Title } from './Titles.styled';

const Login = () => {
  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <h2>Sign in</h2>
      <LoginForm />
    </Box>
  );
};

export default Login;
