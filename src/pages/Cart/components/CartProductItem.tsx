import React from 'react';
import { ProductItemProps } from '../../../types/products';

export default function CartProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <section>
      <span>{product.title}</span>
      <span>{product.price}</span>
    </section>
  );
}
