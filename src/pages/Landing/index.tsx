/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { Container } from '@mui/material';

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
      <section data-testid="landing-container-page">
        <Header />
        <Container>
          <ProductsList />
        </Container>
      </section>
    </ErrorBoundary>
  );
}

export default LandingContainer;
