/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { Container, Typography } from '@mui/material';

import Header from '../../layout/Header';
import ProductsList from './components/ProductsList';
import ProductFallBack from '../../boundaries/fallbacks/Product';

function LandingContainer() {
  function handleReloadPage() {
    window.location.reload();
  }

  return (
    <ErrorBoundary
      FallbackComponent={ProductFallBack}
      onReset={() => handleReloadPage()}>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom component="div">
          Produtos disponíveis
        </Typography>
        <ProductsList />
      </Container>
    </ErrorBoundary>
  );
}

export default LandingContainer;
