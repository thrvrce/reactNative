import {useState, useMemo} from 'react';
import {
  IProduct,
  IProductOptions,
  ICartItem,
  IGlobalModalErrorState,
  globalErrorModalDefaultState,
} from './AppContext';
import {isError} from '../utils/typeGuards';

export const useGetAppContext = () => {
  const [isProductsDataLoading, setProductsDataLoadingStatus] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productOptions, setProductOptions] = useState<IProductOptions>({
    colors: [],
  });
  const [cart, changeCart] = useState<ICartItem[]>([]);
  const [userLogged, changeUserLogged] = useState(false);
  const [globalModalErrorState, changeGlobalErrorModalState] =
    useState<IGlobalModalErrorState>(globalErrorModalDefaultState);
  const getProducts = async () => {
    try {
      const rawResponse = await fetch(
        'https://rn-mentoring.herokuapp.com/api/v2/storefront/products',
      );

      if (rawResponse.status >= 400) {
        throw new Error(
          `Error while fetching products!\n Status code ${rawResponse.status}`,
        );
      }

      const response = await rawResponse.json();
      const productsData: IProduct[] = response.data.map(
        (productDataFromResponse: any) => {
          const {id, attributes} = productDataFromResponse;
          const {name, description, price, compare_at_price} = attributes;

          return {
            id,
            name,
            description,
            imgSrc: 'https://picsum.photos',
            price: Number(price),
            // price: Math.round(Number(price) * Math.random()), // uncomment for refresh testing
            compareAtPrice: Number(compare_at_price ?? price),
          };
        },
      );
      const optionsData: IProductOptions = {
        colors: [],
      };

      optionsData.colors = response.meta.filters.option_types
        .find((optionType: {name: string}) => optionType.name === 'color')
        .option_values.map(
          ({name, presentation}: {name: string; presentation: string}) => ({
            name,
            presentation,
          }),
        );
      setProducts(productsData);
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
    ],
  );

  return appContext;
};
