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

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContextValue: ICartContext = {
    products,
    setProducts,
    total
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCartContext };
