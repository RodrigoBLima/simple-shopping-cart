import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../../contexts/cart/CartContextProvider';
import ProductsItem from '../../../../pages/Landing/components/ProductsItem';

import { product } from '../../../mocks/products';

test('exists container item', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <ProductsItem product={product} index={1} />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  const sectionContainer = queryByTestId('cart-product-item');

  expect(sectionContainer).toBeInTheDocument();
});

test('exists button to add product on cart', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <ProductsItem product={product} index={1} />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  const sectionContainer = queryByTestId('add-product-on-cart');

  expect(sectionContainer).toBeInTheDocument();
});
