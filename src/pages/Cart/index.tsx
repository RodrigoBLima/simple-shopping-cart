import { Container } from '@mui/material';
import React from 'react';
import Header from '../../layout/Header';
import CartListProductsSelecteds from './components/CartListProductsSelecteds';

function CartContainer() {
  return (
    <>
      <Header />
      <Container>
        <CartListProductsSelecteds />
      </Container>
    </>
  );
}

export default CartContainer;
