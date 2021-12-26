import {createContext} from 'react';

interface IAppContext {
  getProducts: () => void;
  setSelectedProductToDisplay: (id: string | null) => void;
  isLoading: boolean;
}

export const AppContext = createContext<IAppContext>({
  getProducts: () => {},
  setSelectedProductToDisplay: () => {},
  isLoading: true,
});
