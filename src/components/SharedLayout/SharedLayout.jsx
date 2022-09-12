// import { Loader } from 'components/Loader/Loader';
// import { Navigation } from 'components/Nevigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';
// import { AppBar, Box, Toolbar, Typography } from '@mui/material';
// import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
// import { Footer } from 'components/Footer/Footer';
// import { ApplicationBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer } from 'components/Footer/Footer';
import { ApplicationBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ alignItems: 'center' }}>
        <ApplicationBar />
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  );
};
