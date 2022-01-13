import {useContext, useEffect} from 'react';
import {AppContext} from '../Context/AppContext';

export const useInitialLoadProducts = () => {
  const {products, loadProductsData} = useContext(AppContext);

  useEffect(() => {
    if (!products.length) {
      loadProductsData();
    }
  }, [products, loadProductsData]);
};
