import * as React from 'react';
import { Container, Stack, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../components/Navbar';

function CircularColor() {
  return (
    <Box>
      <Navbar />
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 6 }}>
          <CircularProgress color="primary" thickness={6.5} size={230} sx={{ ml: 20, mt: 15 }} />
        </Container>
      </Stack>
    </Box>
  );
}

export default CircularColor;