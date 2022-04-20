import React from 'react';

import { useCartContext } from '../../../contexts/cart/CartContextProvider';
import { ProductItemProps, ProductProps } from '../../../types/products';

export default function ProductsItem(props: ProductItemProps) {
  const { products: cartProducts, setProducts: setCartProducts } =
    useCartContext();

  const { product: productItem } = props;

  function handleAddProductOnCart(productCart: ProductProps) {
    const copyCartProducts = cartProducts;
    const updatedCardProducts = [...copyCartProducts, productCart];
    setCartProducts(updatedCardProducts);
  }

  return (
    <div>
      {' '}
      <section>
        <span>{productItem.title}</span>

        <button
          type="button"
          onClick={() => handleAddProductOnCart(productItem)}>
          Adicionar ao carrinho
        </button>
      </section>
    </div>
  );
}
