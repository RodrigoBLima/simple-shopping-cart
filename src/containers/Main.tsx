import React from 'react';
import { CartProvider } from '../contexts/cart/CartContextProvider';
import Routes from '../routes';

export default function Main() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}
