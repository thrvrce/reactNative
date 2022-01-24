import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductsList} from './components/ProductsList';
import {RootStackParamList} from '../../navigation/MainStackNavigation';

type MainScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'MainScreen'
>;

export const MainScreen: FC<MainScreenRouteProps> = () => {
  return (
    <>
      <SearchBar />
      <ProductsList />
    </>
  );
};
