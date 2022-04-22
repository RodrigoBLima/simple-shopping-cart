import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../contexts/cart/CartContextProvider';
import CartContainer from '../../../pages/Cart';

test('container id exists', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <CartContainer />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  const sectionContainer = queryByTestId('cart-container-page');

  expect(sectionContainer).toBeInTheDocument();
});
