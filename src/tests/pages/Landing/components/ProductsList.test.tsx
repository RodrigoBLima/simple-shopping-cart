import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../../contexts/cart/CartContextProvider';
import ProductsList from '../../../../pages/Landing/components/ProductsList';

test('label of empty products list is correctly', async () => {
  const { container } = render(
    <CartProvider>
      <ProductsList />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  container.querySelector('.no-has-products');
  expect(container).toBeInTheDocument();
});

test('label loading data from api', async () => {
  render(
    <CartProvider>
      <ProductsList />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  const textElement = screen.getByText(/Carregando.../i);
  expect(textElement).toBeInTheDocument();
});

test('container id list d exists', async () => {
  const { container } = render(
    <CartProvider>
      <ProductsList />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  container.querySelector('.title-products');
  expect(container).toBeInTheDocument();
});
