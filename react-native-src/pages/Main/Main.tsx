import React, {FC, useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RefreshControl} from 'react-native';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductsList} from './components/ProductsList';
import {RootStackParamList} from '../../navigation/MainStackNavigation';
import {ProductListTypes} from './components/constants';
import {AppContext} from '../../AppContext/AppContext';
import {useInitialLoadProducts} from '../../reusableHooks/useInitialLoadProducts';

type MainScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'MainScreen'
>;

export const MainScreen: FC<MainScreenRouteProps> = () => {
  const navigation = useNavigation<MainScreenRouteProps['navigation']>();
  const {products, isProductsDataLoading, loadProductsData} =
    useContext(AppContext);
  useInitialLoadProducts();

  return (
    <>
      <SearchBar
        redirectOnTouch={() => {
          navigation.navigate('ProductsSearch');
        }}
      />
      <ProductsList
        listType={ProductListTypes.TwoColumn}
        products={products}
        refreshControl={
          <RefreshControl
            refreshing={isProductsDataLoading}
            onRefresh={loadProductsData}
          />
        }
      />
    </>
  );
};
