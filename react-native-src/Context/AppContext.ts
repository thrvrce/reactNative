import {createContext} from 'react';

interface IAppContext {
  loadProductsData: () => void;
  setSelectedProductToDisplay: (id: string | null) => void;
  isProductsDataLoading: boolean;
}

export const AppContext = createContext<IAppContext>({
  loadProductsData: () => {},
  setSelectedProductToDisplay: () => {},
  isProductsDataLoading: true,
});
