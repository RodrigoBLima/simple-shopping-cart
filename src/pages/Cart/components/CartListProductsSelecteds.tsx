import React from 'react';
import { useCartContext } from '../../../contexts/cart/CartContextProvider';
import { ProductProps } from '../../../types/products';
import CartProductItem from './CartProductItem';

export default function CartListProductsSelecteds() {
  const { products, total, handleCalculateTotalToPay } = useCartContext();

  const totalPayment = handleCalculateTotalToPay();

  return (
    <section id="cart-list-products-container">
      {products.length > 0
        ? (products || []).map((product: ProductProps, index: number) => (
            <CartProductItem product={product} key={product.id} index={index} />
          ))
        : null}

      <p>Total de produtos: {total}</p>
      <p>Total à pagar: {totalPayment}</p>
    </section>
  );
}
