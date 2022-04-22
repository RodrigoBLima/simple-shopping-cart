import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../../layout/Header';
import { CartProvider } from '../../../contexts/cart/CartContextProvider';

test('header id on screen', async () => {
  const { container } = render(
    <CartProvider>
      <Header />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  container.querySelectorAll('.app-bar');

  expect(container).toBeInTheDocument();
});

test('renders the logo name of the company', () => {
  const { container } = render(
    <CartProvider>
      <Header />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  container.querySelector('.app-bar-logo');

  expect(container).toBeInTheDocument();
});
