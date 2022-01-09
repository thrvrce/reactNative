import {createContext} from 'react';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  price: number;
  compareAtPrice: number;
}

export interface IProductOptions {
  colors: {name: string; presentation: string}[];
}

interface IAppContext {
  products: IProduct[];
  productOptions: IProductOptions;
  loadProductsData: () => void;
  isProductsDataLoading: boolean;
}

export const AppContext = createContext<IAppContext>({
  products: [],
  productOptions: {colors: []},
  loadProductsData: () => {},
  isProductsDataLoading: true,
});
