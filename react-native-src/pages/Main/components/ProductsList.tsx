import React, {FC, useContext} from 'react';
import {SafeAreaView, StyleSheet, RefreshControl, FlatList} from 'react-native';
import {Product} from './Product';
import {AppContext, IProduct} from '../../../AppContext/AppContext';
import {useInitialLoadProducts} from '../../../reusableHooks/useInitialLoadProducts';

export const ProductsList: FC = () => {
  const {products, isProductsDataLoading, loadProductsData} =
    useContext(AppContext);
  const renderItem = ({item: product}: {item: IProduct}) => (
    <Product {...product} />
  );
  useInitialLoadProducts();

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.contentContainerWrapper}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        refreshControl={
          <RefreshControl
            refreshing={isProductsDataLoading}
            onRefresh={loadProductsData}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainerWrapper: {alignItems: 'center', backgroundColor: '#FFF'},
});