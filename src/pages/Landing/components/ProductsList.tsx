/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Grid } from '@mui/material';
import { ProductProps } from '../../../types/products';

import ProductsItem from './ProductsItem';

import api from '../../../services/api';

function ProductsList() {
  const [products, setProducts] = React.useState([]);
  const hasProducts = products.length > 0;

  async function handleFetchProducts() {
    const { data } = await api.get('/products');
    if (data) setProducts(data);
  }

  React.useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <section id="landing-page-products-container">
      <Grid container spacing={2}>
        {hasProducts
          ? (products || []).map((product: ProductProps, index: number) => (
              <Grid item xs={4}>
                <ProductsItem
                  product={product}
                  key={product.id}
                  index={index}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </section>
  );
}

export default ProductsList;
