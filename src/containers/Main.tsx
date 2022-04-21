import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { CartProvider } from '../contexts/cart/CartContextProvider';
import Routes from '../routes';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500]
  }
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ThemeProvider>
  );
}
