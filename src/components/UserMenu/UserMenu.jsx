import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

export const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography component="p" sx={{ mr: 2 }}>
        {userEmail}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};
