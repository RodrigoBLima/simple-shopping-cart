/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../../layout/Header';

import ProductsList from './components/ProductsList';

function LandingContainer() {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom component="div">
          Produtos disponíveis
        </Typography>

        <ProductsList />
      </Container>
    </>
  );
}

export default LandingContainer;
