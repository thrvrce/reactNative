import React, {useState, useEffect, createContext, useMemo} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import {MainScreen} from './react-native-src/pages/Main/Main';
import {
  ProductDetails,
  IProductOptions,
} from './react-native-src/pages/ProductDetails/ProductDetails';
import {IProduct} from './react-native-src/pages/Main/components/Product';
import {Text} from 'react-native-svg';

interface IAppContext {
  getProducts: () => void;
}

const AppContext = createContext<IAppContext>({
  getProducts: () => {},
});

const App = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [options, setOptions] = useState<IProductOptions>([]);

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
      setLoadingStatus(false);
    }
  };

  const appContext = useMemo(() => ({getProducts}), []);

  useEffect(() => {
    getProducts();
  }, [isLoading]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.appWrapper}>
          <AppContext.Provider value={appContext}>
            <MainScreen products={products} />
            {/* <ProductDetails {...products[0]} options={options} /> */}
          </AppContext.Provider>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});
