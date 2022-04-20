import React from 'react';
import { useCartContext } from '../../../contexts/cart/CartContextProvider';
import { ProductProps } from '../../../types/products';
import CartProductItem from './CartProductItem';

export default function CartListProductsSelecteds() {
  const { products, total } = useCartContext();

  return (
    <section id="cart-list-products-container">
      {products.length > 0
        ? (products || []).map((product: ProductProps) => (
            <CartProductItem product={product} key={product.id} />
          ))
        : null}
      <span>Total de produtos: {total}</span>
    </section>
  );
}
