import React from 'react';

import { Container } from '@mui/material';

import { ErrorBoundary } from 'react-error-boundary';

import Header from '../../layout/Header';
import CartListProductsSelecteds from './components/CartListProductsSelecteds';
import CartFallBack from '../../boundaries/fallbacks/Cart';

function CartContainer() {
  function handleReloadPage() {
    window.location.reload();
  }

  return (
    <ErrorBoundary
      FallbackComponent={CartFallBack}
      onReset={() => handleReloadPage()}>
      <section data-testid="cart-container-page">
        <Header />
        <Container>
          <CartListProductsSelecteds />
        </Container>
      </section>
    </ErrorBoundary>
  );
}

export default CartContainer;
