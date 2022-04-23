import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './index.css';

export default function Spinner() {
  return (
    <section id="spinner-container">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>

      <p>Carregando...</p>
    </section>
  );
}
