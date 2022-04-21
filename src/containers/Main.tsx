import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CartProvider } from '../contexts/cart/CartContextProvider';

import theme from '../types/theme';

import Routes from '../routes';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ThemeProvider>
  );
}
