import React from 'react';
import Header from '../../layout/Header';
import CartListProductsSelecteds from './components/CartListProductsSelecteds';

function CartContainer() {
  return (
    <>
      <Header />
      <section id="cart-page-container">
        <CartListProductsSelecteds />
      </section>
    </>
  );
}

export default CartContainer;
