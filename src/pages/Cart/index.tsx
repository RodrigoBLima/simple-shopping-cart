import { Container } from '@mui/material';
import React from 'react';
import Header from '../../layout/Header';
import CartListProductsSelecteds from './components/CartListProductsSelecteds';

function CartContainer() {
  return (
    <section id="cart-container-page">
      <Header />
      <Container>
        <CartListProductsSelecteds />
      </Container>
    </section>
  );
}

export default CartContainer;
