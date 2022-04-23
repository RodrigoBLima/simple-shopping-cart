import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '../../../contexts/cart/CartContextProvider';
import LandingContainer from '../../../pages/Landing';

test('container id exists', async () => {
  const { queryByTestId } = render(
    <CartProvider>
      <LandingContainer />
    </CartProvider>,
    { wrapper: BrowserRouter }
  );
  const sectionContainer = queryByTestId('landing-container-page');

  expect(sectionContainer).toBeInTheDocument();
});
