import { ReactChild } from 'react';
import { ProductProps } from './products';

export interface ICartContext {
  products: ProductProps[];
  setProducts(products: ProductProps[]): void;
  total: number;
}

export interface CartProviderProps {
  children: ReactChild | never;
}
