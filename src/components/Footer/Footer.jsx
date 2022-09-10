import { Box, Container, Link, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © Created by '}
      <Link
        color="inherit"
        href="https://github.com/DribDrob"
        target="_blank"
        rel="noreferrer noopener"
      >
        DribDrob
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: theme =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container
      //   maxWidth="sm"
      >
        <Link
          color="inherit"
          href="https://u24.gov.ua/"
          target="_blank"
          rel="noreferrer noopener"
        >
          #standWithUkraine
        </Link>
        <Copyright />
      </Container>
    </Box>
  );
};
