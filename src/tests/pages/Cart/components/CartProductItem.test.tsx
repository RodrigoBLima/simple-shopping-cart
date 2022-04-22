import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../../contexts/cart/CartContextProvider';
import CartProductItem from '../../../../pages/Cart/components/CartProductItem';
import { cartProduct } from '../../../mocks/cart';

test('container id item exists', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <CartProductItem product={cartProduct} index={1} />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  const sectionContainer = queryByTestId('cart-list-item');

  expect(sectionContainer).toBeInTheDocument();
});

test('exists input to select quantities of product', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <CartProductItem product={cartProduct} index={1} />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  const sectionContainer = queryByTestId('cart-product-item-select-quantity');

  expect(sectionContainer).toBeInTheDocument();
});
