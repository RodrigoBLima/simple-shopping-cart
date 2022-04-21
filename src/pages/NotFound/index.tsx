import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Typography } from '@mui/material';

export default function NotFoundRoute() {
  return (
    <Container>
      <Typography variant="h6" gutterBottom component="div">
        Ooops! Esta página não foi encontrada
      </Typography>
      <Link to="/">Ir para página inicial</Link>
    </Container>
  );
}
