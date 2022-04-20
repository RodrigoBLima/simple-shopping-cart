/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Header from '../../layout/Header';

import ProductsList from './components/ProductsList';

function LandingContainer() {
  return (
    <>
      <Header />
      <section id="landing-page-container">
        <h4>Shopping card landing</h4>

        <ProductsList />
      </section>
    </>
  );
}

export default LandingContainer;
