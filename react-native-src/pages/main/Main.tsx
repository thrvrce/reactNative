import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {productsMocks} from './productsMocks';
import {ProductsList} from './components/ProductsList';

export const MainScreen: FC = () => {
  return (
    <View style={styles.mainScreenWrapper}>
      <TopBar />
      <SearchBar />
      <ProductsList products={productsMocks} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenWrapper: {backgroundColor: '#FFF', height: '100%'},
});
