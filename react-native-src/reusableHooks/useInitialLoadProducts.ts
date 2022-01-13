import {useContext, useEffect} from 'react';
import {AppContext} from '../AppContext/AppContext';

export const useInitialLoadProducts = () => {
  const {products, loadProductsData} = useContext(AppContext);

  useEffect(() => {
    if (!products.length) {
      loadProductsData();
    }
  }, [products, loadProductsData]);
};
