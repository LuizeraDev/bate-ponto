import * as React from 'react';
import { Container, Stack, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../components/Navbar';

function CircularColor() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress color="primary" thickness={4} size={230} />
      </Box>
    </Box>
  );
}

export default CircularColor;