import React from 'react';

import api from '../../services/api';

function LandingContainer() {
  async function handleFetchProducts() {
    const { data } = await api.get('/products');
  }

  React.useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <section id="landing-page-container">
      <h4>Shopping card landing</h4>
    </section>
  );
}

export default LandingContainer;
