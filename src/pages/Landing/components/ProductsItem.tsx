/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-plusplus */
import React from 'react';

import { useCartContext } from '../../../contexts/cart/CartContextProvider';
import { ProductItemProps } from '../../../types/products';

function ProductsItem(props: ProductItemProps) {
  const { products: cartProducts, setProducts: setCartProducts } =
    useCartContext();

  const { product: productItem } = props;
  const copyCartProducts = cartProducts;

  const checkDuplicateProduct = (cartProducts || []).findIndex(
    (cartItemProduct) => cartItemProduct.id === productItem.id
  );

  function handleCheckAlreadyExistsProduct(index: number) {
    const currentProduct = copyCartProducts[index];

    currentProduct.quantity = currentProduct?.quantity
      ? currentProduct?.quantity + 1
      : 1;

    copyCartProducts[index] = currentProduct;

    setCartProducts(copyCartProducts);
  }

  function handleAddProductOnCart() {
    if (checkDuplicateProduct !== -1) {
      handleCheckAlreadyExistsProduct(checkDuplicateProduct);
    } else {
      const updatedCardProducts = [
        ...copyCartProducts,
        { ...productItem, quantity: 1 }
      ];
      setCartProducts(updatedCardProducts);
    }
  }

  return (
    <div>
      {' '}
      <section>
        <span>{productItem.title}</span>

        <button type="button" onClick={() => handleAddProductOnCart()}>
          Adicionar ao carrinho
        </button>
      </section>
    </div>
  );
}

export default ProductsItem;
