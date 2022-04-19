import React from 'react';
import {
  BrowserRouter,
  Routes as ContentRouter,
  Route
} from 'react-router-dom';

import CartContainer from '../pages/Cart';
import LandingContainer from '../pages/Landing';
import NotFoundRoute from '../pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <ContentRouter>
        <Route path="/" element={<LandingContainer />} />
        <Route path="/cart" element={<CartContainer />} />

        <Route path="*" element={<NotFoundRoute />} />
      </ContentRouter>
    </BrowserRouter>
  );
}

export default Routes;
