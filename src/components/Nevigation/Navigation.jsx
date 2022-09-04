// import { Button } from '@mui/material';
import { Button, Stack } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
// import styled from '@emotion/styled';

export const Navigation = () => {
  return (
    <Stack component="nav" direction="row" spacing={2}>
      <Button
        component={RouterLink}
        to="/login"
        variant="outlined"
        color="inherit"
      >
        Sign in
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        variant="outlined"
        color="inherit"
      >
        Sign up
      </Button>
    </Stack>
  );
};
