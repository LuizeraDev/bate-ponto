import * as React from 'react';
import { Container, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 6 }}>
            <CircularProgress color="primary" size={230} sx={{ ml: 20, mt: 15 }}/>
          </Container>
    </Stack>
  );
}

export default CircularColor;