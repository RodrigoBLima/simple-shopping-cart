// todo check page container title `Produtos disponíveis`
import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../contexts/cart/CartContextProvider';
import LandingContainer from '../../../pages/Landing';

test('container landing has title', async () => {
  const { getByText } = render(
    <CartProvider>
      <LandingContainer />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );

  expect(getByText('Produtos disponíveis')).toBeInTheDocument();
});
