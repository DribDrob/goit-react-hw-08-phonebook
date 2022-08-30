import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Nevigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';

import { Container, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <Container>
      <Header>
        <p>PhoneBook App</p>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <Navigation />
        )}
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
