import { Box } from '../components/Box';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { Title } from './Titles.styled';

const Register = () => {
  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <h2>Sign up</h2>
      <RegisterForm />
    </Box>
  );
};

export default Register;
