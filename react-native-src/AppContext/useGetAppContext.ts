import {useState, useMemo} from 'react';
import {IProduct, IProductOptions, ICartItem} from './AppContext';

export const useGetAppContext = () => {
  const [isProductsDataLoading, setProductsDataLoadingStatus] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productOptions, setProductOptions] = useState<IProductOptions>({
    colors: [],
  });
  const [cart, changeCart] = useState<ICartItem[]>([]);
  const [userLogged, changeUserLogged] = useState(false);
  const getProducts = async () => {
    try {
      const rawResponse = await fetch(
        'https://rn-mentoring.herokuapp.com/api/v2/storefront/products',
      );
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
    } catch (err) {
      const isError = (err: any): err is Error => {
        if (err.message) {
          return true;
        }
        return false;
      };

      if (isError(err)) {
        console.error(JSON.stringify(err.message));
      }
    } finally {
      setProductsDataLoadingStatus(false);
    }
  };

  const appContext = useMemo(
    () => ({
      products,
      productOptions,
      loadProductsData: () => {
        setProductsDataLoadingStatus(true);
        getProducts();
      },
      isProductsDataLoading,
      cart,
      changeCart,
      userLogged,
      changeUserLogged,
    }),
    [
      isProductsDataLoading,
      products,
      productOptions,
      cart,
      changeCart,
      userLogged,
      changeUserLogged,
    ],
  );

  return appContext;
};
