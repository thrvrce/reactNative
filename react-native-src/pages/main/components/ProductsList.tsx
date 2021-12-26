import React, {FC, useContext} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {Product, IProduct} from './Product';
import {AppContext} from '../../../Context/AppContext';
interface IProductsListProps {
  products: IProduct[];
}

export const ProductsList: FC<IProductsListProps> = props => {
  const {products} = props;
  const {isLoading, getProducts} = useContext(AppContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainerWrapper}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getProducts} />
        }>
        <View style={styles.contentWrapper}>
          {products.map(product => (
            <Product {...product} key={product.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainerWrapper: {alignItems: 'center', backgroundColor: '#FFF'},
  contentWrapper: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFF',
    width: 376,
  },
});
