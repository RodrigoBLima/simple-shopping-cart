/* eslint-disable no-plusplus */
import React, { createContext, useContext, useState } from 'react';
import { CartProviderProps, ICartContext } from '../../types/cart';
import { ProductProps } from '../../types/products';

const CartContext = createContext<ICartContext | undefined>(undefined);
const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};

function CartProvider(props: CartProviderProps) {
  const { children } = props;

  const [products, setProducts] = useState<ProductProps[]>([]);
  const total = products.length;

  function handleAddMoreQuantityOnProduct(index: number) {
    const solvedIndex = index || 0;
    const indexProduct = products[solvedIndex];

    if (indexProduct.quantity) indexProduct.quantity++;

    setProducts(products);
  }

  function handleSubtractLessQuantityOnProduct(index: number) {
    const solvedIndex = index || 0;
    const indexProduct = products[solvedIndex];

    if (indexProduct.quantity && indexProduct.quantity > 1)
      indexProduct.quantity--;

    setProducts(products);
  }

  function handleCartProductRemove(product: ProductProps) {
    const productId = product.id || 0;

    const updatedProductsList = (products || []).filter(
      (productFiltered: ProductProps) => productFiltered.id !== productId
    );

    setProducts(updatedProductsList);
  }

  function handleCalculateTotalToPay() {
    return products.reduce((accumulator, currentValue) => {
      const solvedQuantity = currentValue.quantity || 0;
      return (
        accumulator +
        (solvedQuantity > 1
          ? currentValue.price * solvedQuantity
          : currentValue.price)
      );
    }, 0);
  }
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContextValue: ICartContext = {
    products,
    setProducts,
    total,
    handleCartProductRemove,
    handleSubtractLessQuantityOnProduct,
    handleAddMoreQuantityOnProduct,
    handleCalculateTotalToPay
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCartContext };
