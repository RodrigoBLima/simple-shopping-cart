/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Grid, Typography } from '@mui/material';
import { ProductProps } from '../../../types/products';

import ProductsItem from './ProductsItem/index';

import api from '../../../services/api';
import Spinner from '../../../components/Spinner';

function ProductsList() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const hasProducts = products.length > 0;

  async function handleFetchProducts() {
    setLoading(true);

    const { data } = await api.get('/products');

    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    handleFetchProducts();
  }, []);

  if (loading) return <Spinner />;

  return (
    <section data-testid="products-container-list">
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        className="title-products">
        Produtos disponíveis
      </Typography>

      <Grid container spacing={2}>
        {hasProducts ? (
          (products || []).map((product: ProductProps, index: number) => (
            <Grid item xs={12} md={4} sm={12} key={product.id}>
              <ProductsItem product={product} index={index} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              className="no-has-products">
              Ainda não há produtos disponiveis
            </Typography>
          </Grid>
        )}
      </Grid>
    </section>
  );
}

export default ProductsList;
