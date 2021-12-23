import React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Product} from './Product';

export const ProductsList = props => {
  const {products} = props;
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainerWrapper}>
        <View style={styles.contentWrapper}>
          {products.map(product => (
            <Product {...product} />
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
