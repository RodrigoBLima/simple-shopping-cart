import React from 'react';
import { useCartContext } from '../../../contexts/cart/CartContextProvider';
import { CartProductItemProps } from '../../../types/cart';

function CartProductItem(props: CartProductItemProps) {
  const {
    handleAddMoreQuantityOnProduct,
    handleSubtractLessQuantityOnProduct,
    handleCartProductRemove
  } = useCartContext();
  const { product: productItem, index } = props;
  const solvedIndex = index || 0;

  return (
    <section>
      <p>{productItem.title}</p>
      <p>{productItem.price}</p>
      <p>{productItem.quantity}</p>
      <button
        type="button"
        onClick={() => handleAddMoreQuantityOnProduct(solvedIndex)}>
        +
      </button>
      <button
        type="button"
        onClick={() => handleSubtractLessQuantityOnProduct(solvedIndex)}>
        -
      </button>
      <button
        type="button"
        onClick={() => handleCartProductRemove(productItem)}>
        X
      </button>
    </section>
  );
}

export default CartProductItem;
