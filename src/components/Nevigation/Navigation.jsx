import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </nav>
  );
};
