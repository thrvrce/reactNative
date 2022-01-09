import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '../pages/Main/Main';
import {ProductDetails} from '../pages/ProductDetails/ProductDetails';

export type RootStackParamList = {
  MainScreen: undefined;
  ProductDetails: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigation = () => (
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
);
