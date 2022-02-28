import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '../pages/Main/Main';
import {ProductDetailsNavigationStack} from '../pages/ProductDetails/ProductDetailsNavigationStack';
import {MainScreenNavigationHeader} from '../pages/Main/components/MainScreenNavigationHeader';
import {ProductsSearch} from '../pages/ProductsSearch/ProductsSearch';
import {ProductsSearchNavigationHeader} from '../pages/ProductsSearch/ProductsSearchNavigationHeader';

export type RootStackParamList = {
  MainScreen: undefined;
  ProductDetailsNavigationStack: {productId: string};
  ProductsSearch: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigation = () => (
  <Stack.Navigator initialRouteName="MainScreen">
    <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        header: props => <MainScreenNavigationHeader {...props} />,
      }}
    />
    <Stack.Screen
      name="ProductDetailsNavigationStack"
      component={ProductDetailsNavigationStack}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ProductsSearch"
      component={ProductsSearch}
      options={{
        header: props => <ProductsSearchNavigationHeader {...props} />,
      }}
    />
  </Stack.Navigator>
);
