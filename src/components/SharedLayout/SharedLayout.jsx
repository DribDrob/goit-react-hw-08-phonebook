import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>
        <p>PhoneBook App</p>
        {isLoggedIn ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <div>
              <p>{userEmail}</p>
              <button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <nav>
            <Link to="/login">Sign in</Link>
            <Link to="/register">Sign up</Link>
          </nav>
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
