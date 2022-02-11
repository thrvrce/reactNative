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

export interface IGlobalModalErrorState {
  showGlobalErrorModal: boolean;
  actionButtonFunction: () => boolean | undefined | Promise<boolean>;
  actionButtonText: string;
  errorMessage: string;
}

interface IAppContext {
  products: IProduct[];
  setContextProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cart: ICartItem[];
  changeCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  productOptions: IProductOptions;
  loadProductsData: () => void;
  isProductsDataLoading: boolean;
  userLogged: boolean;
  changeUserLogged: React.Dispatch<React.SetStateAction<boolean>>;
  globalModalErrorState: IGlobalModalErrorState;
  changeGlobalErrorModalState: React.Dispatch<
    React.SetStateAction<IGlobalModalErrorState>
  >;
}

export const globalErrorModalDefaultState = {
  showGlobalErrorModal: false,
  actionButtonFunction: () => undefined,
  actionButtonText: '',
  errorMessage: ',',
};

export const AppContext = createContext<IAppContext>({
  products: [],
  setContextProducts: () => {},
  cart: [],
  changeCart: () => {},
  productOptions: {colors: []},
  loadProductsData: () => {},
  isProductsDataLoading: true,
  userLogged: false,
  changeUserLogged: () => {},
  globalModalErrorState: globalErrorModalDefaultState,
  changeGlobalErrorModalState: () => {},
});
