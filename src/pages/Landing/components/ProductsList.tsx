/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

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
      {hasProducts
        ? (products || []).map((product: ProductProps, index: number) => (
            <ProductsItem product={product} key={product.id} index={index} />
          ))
        : null}
    </section>
  );
}

export default ProductsList;
