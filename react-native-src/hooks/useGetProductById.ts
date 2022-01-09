import {useMemo} from 'react';
import {IProduct} from '../Context/AppContext';

export const useGetProductById = (products: IProduct[], productId: string) =>
  useMemo(
    () => products.find(product => product.id === productId),
    [products, productId],
  );
