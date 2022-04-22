import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../../contexts/cart/CartContextProvider';
import CartListProductsSelecteds from '../../../../pages/Cart/components/CartListProductsSelecteds';

test('container id container list exists', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <CartListProductsSelecteds />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  const sectionContainer = queryByTestId('cart-list-products-container');

  expect(sectionContainer).toBeInTheDocument();
});

test('exists title on the container', async () => {
  const { container } = render(
    <CartProvider>
      <CartListProductsSelecteds />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  container.querySelector('.title');

  expect(container).toBeInTheDocument();
});

test('title label is correctly', async () => {
  render(
    <CartProvider>
      <CartListProductsSelecteds />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  const textElement = screen.getByText(/Produtos na sacola/i);
  expect(textElement).toBeInTheDocument();
});

test('label of empy cart is correctly', async () => {
  render(
    <CartProvider>
      <CartListProductsSelecteds />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  const textElement = screen.getByText(
    /Seu carrinho está vazio, vamos as compras?/i
  );
  expect(textElement).toBeInTheDocument();
});
