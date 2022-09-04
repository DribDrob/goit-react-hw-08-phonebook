import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Nevigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
// import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';

// import { Container, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <>
      <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
        <AppBar position="static">
          <Toolbar>
            {/* <Icon
              fontSize="large"
              color="inherit"
              sx={{ mr: 2 }}
              component={LocalLibraryRoundedIcon}
            /> */}
            <LocalLibraryRoundedIcon
              fontSize="medium"
              color="inherit"
              sx={{ mr: 2 }}
            />
            {/* </Icon> */}
            <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
              PhoneBook App
            </Typography>
            {isLoggedIn ? (
              <>
                {/* <NavLink to="/contacts">Contacts</NavLink> */}
                <UserMenu />
              </>
            ) : (
              <Navigation />
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer>
        <p>Footer</p>
      </footer>
    </>
    // <Container>
    //   <Header>
    //     <p>PhoneBook App</p>
    //     {isLoggedIn ? (
    //       <>
    //         <NavLink to="/contacts">Contacts</NavLink>
    //         <UserMenu />
    //       </>
    //     ) : (
    //       <Navigation />
    //     )}
    //   </Header>
    //   <Suspense fallback={<Loader />}>
    //     <Outlet />
    //   </Suspense>
    //   <footer>
    //     <p>Footer</p>
    //   </footer>
    // </Container>
  );
};
