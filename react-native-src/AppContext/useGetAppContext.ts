import {useState, useMemo} from 'react';
import {
  IProduct,
  IProductOptions,
  ICartItem,
  IGlobalModalErrorState,
  globalErrorModalDefaultState,
} from './AppContext';
import {isError} from '../utils/typeGuards';
import {getRequest, apiPath, productsResource} from '../utils/http.service';
import {
  getProductsDataFromResponse,
  fillOPtionsDataColor,
} from '../utils/productUtils';

export const useGetAppContext = () => {
  const [isProductsDataLoading, setProductsDataLoadingStatus] = useState(true);
  const [products, setContextProducts] = useState<IProduct[]>([]);
  const [productOptions, setProductOptions] = useState<IProductOptions>({
    colors: [],
  });
  const [cart, changeCart] = useState<ICartItem[]>([]);
  const [userLogged, changeUserLogged] = useState(false);
  const [globalModalErrorState, changeGlobalErrorModalState] =
    useState<IGlobalModalErrorState>(globalErrorModalDefaultState);
  const getProducts = async () => {
    try {
      const response = await getRequest(apiPath + productsResource);
      const productsData = getProductsDataFromResponse(response.data);
      const optionsData: IProductOptions = {
        colors: fillOPtionsDataColor(response?.meta?.filters?.option_types),
      };

      setContextProducts(productsData);
      setProductOptions(optionsData);

      return {status: true, message: ''};
    } catch (err) {
      let errMessage = '';
      if (isError(err)) {
        errMessage = err.message;
      }
      return {status: false, message: errMessage};
    } finally {
      setProductsDataLoadingStatus(false);
    }
  };

  const appContext = useMemo(
    () => ({
      products,
      setContextProducts,
      productOptions,
      loadProductsData: async () => {
        setProductsDataLoadingStatus(true);
        const requestResult = await getProducts();
        if (!requestResult.status) {
          changeGlobalErrorModalState({
            showGlobalErrorModal: true,
            actionButtonFunction: async () => {
              setProductsDataLoadingStatus(true);
              const retryRequestResult = await getProducts();
              return retryRequestResult.status;
            },
            actionButtonText: 'Reload products',
            errorMessage: requestResult.message,
          });
          return requestResult;
        }
        return true;
      },
      isProductsDataLoading,
      cart,
      changeCart,
      userLogged,
      changeUserLogged,
      globalModalErrorState,
      changeGlobalErrorModalState,
    }),
    [
      isProductsDataLoading,
      products,
      productOptions,
      cart,
      changeCart,
      userLogged,
      changeUserLogged,
      globalModalErrorState,
      changeGlobalErrorModalState,
      setContextProducts,
    ],
  );

  return appContext;
};
