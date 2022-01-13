import React, {FC, useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductsList} from './components/ProductsList';
import {AppContext} from '../../Context/AppContext';
import {RootStackParamList} from '../../navigation/MainStackNavigation';

type MainScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'MainScreen'
>;

export const MainScreen: FC<MainScreenRouteProps> = () => {
  const {products} = useContext(AppContext);

  return (
    <>
      <SearchBar />
      <ProductsList products={products} />
    </>
  );
};
