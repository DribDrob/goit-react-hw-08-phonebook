import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Nevigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ alignItems: 'center' }}>
        <AppBar position="fixed">
          <Toolbar>
            <LocalLibraryRoundedIcon
              fontSize="medium"
              color="inherit"
              sx={{ mr: 2 }}
            />

            <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
              PhoneBook App
            </Typography>
            {isLoggedIn ? (
              <>
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
      <Footer />
    </Box>
  );
};
