import React, {useState, useEffect, useMemo} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {MainScreen} from './react-native-src/pages/Main/Main';
import {
  ProductDetails,
  IProductOptions,
} from './react-native-src/pages/ProductDetails/ProductDetails';
import {IProduct} from './react-native-src/pages/Main/components/Product';
import {AppContext} from './react-native-src/Context/AppContext';

const App = () => {
  const [isProductsDataLoading, setProductsDataLoadingStatus] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [options, setOptions] = useState<IProductOptions>({colors: []});
  const [selectedProductToDisplay, setSelectedProductToDisplay] = useState<
    null | string
  >(null);

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
      setOptions(optionsData);
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
      loadProductsData: () => {
        setProductsDataLoadingStatus(true);
        getProducts();
      },
      setSelectedProductToDisplay,
      isProductsDataLoading,
    }),
    [isProductsDataLoading],
  );

  const selectedProduct = useMemo(
    () =>
      selectedProductToDisplay
        ? products.find(product => product.id === selectedProductToDisplay)
        : null,
    [products, selectedProductToDisplay],
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        <AppContext.Provider value={appContext}>
          {selectedProduct ? (
            <ProductDetails {...selectedProduct} options={options} />
          ) : (
            <MainScreen products={products} />
          )}
        </AppContext.Provider>
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});
