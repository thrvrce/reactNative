import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '../pages/Main/Main';
import {ProductDetails} from '../pages/ProductDetails/ProductDetails';
import {MainScreenNavigationHeader} from '../pages/Main/components/MainScreenNavigationHeader';

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
      options={{
        header: props => <MainScreenNavigationHeader {...props} />,
      }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
