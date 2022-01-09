import React, {FC, useContext} from 'react';
import {SafeAreaView, StyleSheet, RefreshControl, FlatList} from 'react-native';
import {Product} from './Product';
import {AppContext, IProduct} from '../../../Context/AppContext';
interface IProductsListProps {
  products: IProduct[];
}

export const ProductsList: FC<IProductsListProps> = props => {
  const {products} = props;
  const {isProductsDataLoading, loadProductsData} = useContext(AppContext);
  const renderItem = ({item: product}: {item: IProduct}) => (
    <Product {...product} />
  );

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
