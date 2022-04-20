import { ReactChild } from 'react';

export interface ProductProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface ProductItemProps {
  product: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  };
}

export interface ProductsContextProps {
  total: number;
  products: ProductProps[];
}

export interface ProductsProviderProps {
  children: ReactChild | never;
}
