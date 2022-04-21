import { ReactChild } from 'react';
import { ProductItemProps, ProductProps } from './products';
import { IndexProps } from './utils';

export interface ICartContext {
  products: ProductProps[];
  total: number;
  setProducts(products: ProductProps[]): void;
  handleAddMoreQuantityOnProduct(index: number): void;
  handleSubtractLessQuantityOnProduct(index: number): void;
  handleCartProductRemove(product: ProductProps): void;
  handleCalculateTotalToPay(): number;
}

export interface CartProviderProps {
  children: ReactChild | never;
}

export interface CartProductItemProps extends ProductItemProps, IndexProps {}
