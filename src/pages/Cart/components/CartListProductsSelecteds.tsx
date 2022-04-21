import React from 'react';

import List from '@mui/material/List';

import { Divider, Typography } from '@mui/material';

import CartProductItem from './CartProductItem/index';

import { ProductProps } from '../../../types/products';

import { useCartContext } from '../../../contexts/cart/CartContextProvider';

export default function CartListProductsSelecteds() {
  const { products, total, handleCalculateTotalToPay } = useCartContext();

  const hasProductsOnTheCart = products.length > 0;
  const totalPayment = handleCalculateTotalToPay();

  return (
    <section id="cart-list-products-container">
      <h1>Produtos na sacola</h1>
      {hasProductsOnTheCart ? (
        <>
          <List
            sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
            {(products || []).map((product: ProductProps, index: number) => (
              <>
                <CartProductItem
                  product={product}
                  key={product.id}
                  index={index}
                />
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
          <Typography>Total de produtos: {total}</Typography>
          <Typography>Total à pagar: R$:{totalPayment}</Typography>
        </>
      ) : (
        <Typography>Seu carrinho está vazio, vamos as compras?</Typography>
      )}
    </section>
  );
}
