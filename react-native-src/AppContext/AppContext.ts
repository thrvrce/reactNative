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

export interface ICartItem {
  productId: string;
  productOptions: Record<'color', string>;
}

interface IAppContext {
  products: IProduct[];
  cart: ICartItem[];
  changeCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  productOptions: IProductOptions;
  loadProductsData: () => void;
  isProductsDataLoading: boolean;
  userLogged: boolean;
  changeUserLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContext>({
  products: [],
  cart: [],
  changeCart: () => {},
  productOptions: {colors: []},
  loadProductsData: () => {},
  isProductsDataLoading: true,
  userLogged: false,
  changeUserLogged: () => {},
});
