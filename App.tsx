import React, {useState, useEffect, useMemo} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './react-native-src/pages/Main/Main';
import {ProductDetails} from './react-native-src/pages/ProductDetails/ProductDetails';
import {
  AppContext,
  IProduct,
  IProductOptions,
} from './react-native-src/Context/AppContext';
import {RootStackParamList} from './react-native-src/navigation/@types/rootStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isProductsDataLoading, setProductsDataLoadingStatus] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productOptions, setProductOptions] = useState<IProductOptions>({
    colors: [],
  });

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
    }),
    [isProductsDataLoading, products, productOptions],
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AppContext.Provider>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});
