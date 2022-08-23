import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <p>PhoneBook App</p>
        <nav>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer>
        <p>Footer</p>
      </footer>
    </Container>
  );
};
