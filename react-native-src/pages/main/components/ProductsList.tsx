import React, {FC} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Product} from './Product';
import {IProduct} from '../../../AppContext/AppContext';
import {ProductListTypes} from './constants';

interface IProductsList {
  listType: ProductListTypes;
  products: IProduct[];
  refreshControl?: JSX.Element;
}

export const ProductsList: FC<IProductsList> = props => {
  const {listType, products, refreshControl} = props;

  const renderItem = ({item: product}: {item: IProduct}) => (
    <Product {...product} listType={listType} />
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainerWrapper}
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={listType}
      refreshControl={refreshControl}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerWrapper: {alignItems: 'center', backgroundColor: '#FFF'},
});
